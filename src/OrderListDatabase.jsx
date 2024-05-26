import React, { useState } from 'react'; // Import useState for handling select value

const OrderListDatabase = () => {
  const [selectedValue, setSelectedValue] = useState('Pending Shipments'); // Initial selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const generatePDF = () => {
    // Add your logic for generating PDF based on selectedValue (optional)
    alert('Generating PDF...');
  };

  return (
    <div className="track-and-tracing-OrderListDataBase-div">
      <div className="track-and-tracing-OrderListDataBase-div-inner1">
        <img
          src="Images/bx-plus-circle.svg"
          alt="Add Order"
          height="20"
          width="20"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px', marginTop: '5px' }}
        />
        <div>
          <h4>Order List Database</h4>
          <p>Tuesday 14, May 2023</p>
        </div>
      </div>

      <div className="track-and-tracing-OrderListDataBase-div-inner2">
        <select value={selectedValue} onChange={handleChange}>
          <option value="Pending Shipments">Pending Shipments</option>
          <option value="Returned Shipments">Returned Shipments</option>
          <option value="Scheduled Shipments">Scheduled Shipments</option>
          <option value="Successful Shipments">Successful Shipments</option>
        </select>

        <button style={{ border: '1px solid black', backgroundColor: 'white' }} onClick={generatePDF}>
          Download Reports
        </button>

        <button style={{ backgroundColor: 'blueviolet', color: 'white' }}>Create Shipment</button>
      </div>
    </div>
  );
};

export default OrderListDatabase;
