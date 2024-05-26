import React from 'react';

const Navigation = () => {
  return (
    <div className="track-and-tracing-navigation-div">
      <div className="track-and-tracing-navigation-div-inner1">
        <h3>S&C</h3>
      </div>

      <div className="track-and-tracing-navigation-div-inner2">
        <ul>
          <li>
            <button>Delivery</button>
          </li>
          <li>
            <button>Tracking List</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>My Orders</button>
          </li>
          <li>
            <button className="user-btn">
              <div style={{ display: 'flex', justifyContent: 'space-around', objectFit: 'cover' }}>
                <img src="Images/download.jpg" alt="User Avatar" height="20" width="20" style={{ borderRadius: '20px' }} />
                <div>
                  <h4 style={{ margin: 0 }}>Lunga</h4>
                  <p style={{ margin: 0, fontSize: '0.5rem' }}>premium</p>
                </div>
                <img src="Images/bx-star.svg" alt="Star Icon" height="20" width="20" />
              </div>
            </button>
          </li>
        </ul>
      </div>

      <div className="track-and-tracing-navigation-div-inner3">
        <img src="Images/bx-wifi-2.svg" alt="wifi" height="30" width="30" />
        <img src="Images/bx-menu (1).svg" alt="menu" height="30" width="30" style={{ backgroundColor: 'black' }} />
      </div>
    </div>
  );
};

export default Navigation;
