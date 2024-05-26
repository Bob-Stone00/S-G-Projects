import React from 'react';

const Transit = () => {
  return (
    <div className="track-and-tracing-Transit-div">
      <div className="track-and-tracing-shipment-div-inner1">
        <h3>Avg. Transit Time</h3>
        <img
          src="Images/bx-time-five (1).svg"
          alt="img"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}
        />
      </div>

      <div className="track-and-tracing-shipment-div-inner2">
        <h3>2 days<sub style="font-size: 0.9rem;">/by air</sub></h3>
        <div className="track-and-tracing-shipment-div-inner2-inner"></div>
        <h3>5 days<sub style="font-size: 0.9rem;">/by ship</sub></h3>
      </div>

      <hr />

      <div className="track-and-tracing-shipment-div-inner3">
        <h3>Last Week 80k</h3>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}>
          <img src="Images/bxs-up-arrow-alt.svg" alt="img" height="15" width="15" />
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'blue' }}>09%</p>
        </div>
      </div>
    </div>
  );
};

export default Transit;
