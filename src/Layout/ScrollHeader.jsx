import React from 'react';

const HorizontalScrollMenu = () => {
  const menuContainerStyle = {
    overflowX: 'auto', // অনুভূমিক স্ক্রোলিং সক্রিয় করতে
    whiteSpace: 'nowrap', // মেনু আইটেমগুলো এক লাইনে রাখতে
    margin: '10px 0',
  };

  const menuListStyle = {
    listStyle: 'none',
    display: 'flex',
    padding: 0,
    margin: 0,
  };

  const menuItemStyle = {
    padding: '10px 20px',
    marginRight: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    border: '2px solid transparent', // বর্ডার এবং প্যাডিং সঠিক রাখতে
    cursor: 'pointer',
    transition: 'background-color 0.3s, border 0.3s', // ট্রানজিশন প্রপার্টি
  };

  const menuItemHoverStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#007bff', // হোভার করলে বর্ডার কালার পরিবর্তন
  };

  return (
    <div style={menuContainerStyle}>
      <ul style={menuListStyle}>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          Home
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          About
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          Services
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          Contact
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          Blog
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          Gallery
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          FAQ
        </li>
        <li 
          style={menuItemStyle} 
          onMouseEnter={(e) => e.target.style = { ...menuItemStyle, ...menuItemHoverStyle }} 
          onMouseLeave={(e) => e.target.style = menuItemStyle}
        >
          Privacy Policy
        </li>
      </ul>
    </div>
  );
};

export default HorizontalScrollMenu;
