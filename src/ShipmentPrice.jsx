import React, { useState } from 'react';

const ShipmentPrice = () => {
  const [product, setProduct] = useState('Machines');
  const [from, setFrom] = useState('America');
  const [to, setTo] = useState('America');
  const [weight, setWeight] = useState('450lbd');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'product':
        setProduct(value);
        break;
      case 'from':
        setFrom(value);
        break;
      case 'to':
        setTo(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="track-and-tracing-shipmentPrice-div">
      <h3>Set Shipment Price</h3>
      <div className="track-and-tracing-shipmentPrice-div-inner2">
        <div>
          <p>Product</p>
          <select name="product" value={product} onChange={handleChange}>
            <option value="Machines">Machines</option>
            <option value="Electronics">Electronics</option>
            <option value="Gym">Gym</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <div>
          <p>From</p>
          <select name="from" value={from} onChange={handleChange}>
            <option value="America">America</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div>
          <p>To</p>
          <select name="to" value={to} onChange={handleChange}>
            <option value="America">America</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div>
          <p>Lbs</p>
          <select name="weight" value={weight} onChange={handleChange}>
            <option value="450lbd">450lbd</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShipmentPrice;
