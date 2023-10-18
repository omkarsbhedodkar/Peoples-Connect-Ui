// src/components/Navbar.js
import React from 'react';
import logo from '../download.png'; // Import your company logo

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.right}>
        <img src={logo} alt="Company Logo" style={styles.logo} />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#FFFFFF', // Set your desired background color
  },
  left: {
    flex: 1,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff', // Set your desired button color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  logo: {
    maxWidth: '80px', // Adjust the logo size as needed
  },
};

export default Navbar;
