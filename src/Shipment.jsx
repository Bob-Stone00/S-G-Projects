import React from 'react';

const Shipment = () => {
  return (
    <div className="track-and-tracing-shipment-div">
      <div className="track-and-tracing-shipment-div-inner1">
        <h3>Ready For Shipments</h3>
        <img
          src="Images/bx-home-alt-2.svg"
          alt="img"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}
        />
      </div>

      <div className="track-and-tracing-shipment-div-inner2">
        <h3>132K lbs</h3>
        <div className="track-and-tracing-shipment-div-inner2-inner"></div>
        <h4 style={{ marginRight: '70px' }}>06 pcs</h4>
      </div>

      <hr />

      <div className="track-and-tracing-shipment-div-inner3">
        <h3>Ready For Shipments</h3>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}>
          <img src="Images/bxs-up-arrow-alt.svg" alt="img" height="15" width="15" />
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'blue' }}>01%</p>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
