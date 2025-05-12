import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import About from './component/About';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div style={styles.container}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div style={styles.mainContent}>
          <Sidebar isCollapsed={isSidebarCollapsed} />
          <div style={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    height: '100vh', // Full height of the viewport
  },
  mainContent: {
    display: 'flex' as 'flex',
    marginTop: '0px', // Offset for navbar height
  },
  content: {
    flex: 2,
    padding: '20px',
    marginLeft: '20px', // Adjust this value based on sidebar width
    // marginRight: '50px', // Adjust this value based on sidebar width
  },
};

export default App;
