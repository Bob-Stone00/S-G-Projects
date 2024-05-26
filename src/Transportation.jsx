import React from 'react';

const Transportation = () => {
  return (
    <div className="track-and-tracing-Transportation-div">
      <div className="track-and-tracing-Transportation-div-inner1">
        <h3>S&C Transportation</h3>
        <img
          src="Images/bx-border-all.svg"
          alt="Border icon"
          height="20"
          width="20"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px', marginTop: '5px' }}
        />
      </div>
      <div>
        <div className="track-and-tracing-Transportation-div-inner">
          <h4>PayLoad</h4>
          <h3>234 lbs</h3>
          <h4>LoadVolume</h4>
          <h3>234ln</h3>
          <h4>loadlength</h4>
          <h3>234In</h3>
        </div>
        <div>
          <img src="Images/R.png" alt="Image" height="200px" width="220px" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default Transportation;
