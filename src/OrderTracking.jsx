import React from 'react';

const OrderTracking = () => {
  return (
    <div className="track-and-tracing-ordertrackin-div">
      <h3 style={{ marginLeft: '30px', color: 'gray' }}>Shipment Progress</h3>
      <div className="row">
        <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
          <div className="row justify-content-between">
            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <p>Ordered<br /><span>Mon, May 24</span></p>
            </div>
            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <p>Out of Factory<br /><span>Tue, May 25</span></p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>Shipped<br /><span>Fri, May 28</span></p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>On Transit<br /><span>Fri, May 31</span></p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>Delivered<br /><span>Fri, June 2</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
