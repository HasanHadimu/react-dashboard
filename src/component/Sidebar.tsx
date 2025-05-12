import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

import 'bootstrap/dist/css/bootstrap.min.css';


interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return (
    <CDBSidebar
      textColor="#333"
      backgroundColor="#f0f0f0"
      style={{ height: '100vh', width: isCollapsed ? '80px' : '250px' }}
    >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Super Admin
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="user">User</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Product</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="chart-line" iconType="solid">
            Laporan
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="cog">Setting</CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div style={{ padding: '20px 5px', color: '#888' }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
