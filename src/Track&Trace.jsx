
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles.css'
import './assets/style.css'
import Navigation  from './Navigation'
import Shipment from './Shipment'
import Transit from './Transit';
import ShipmentPrice from './ShipmentPrice';
import OrderFrequency from './OrderFrequency';
import OrderListDatabase from './OrderListDatabase'
import TrackDelivery from './TrackDelivery'
import MostShipmentGoods from './MostShipmentGoods'
import Transportation from './Transportation'
import DeliveryShipments from './DeliveryShipments'
import ConsumersByCountry from './ConsumersByCountry'
import OrderTracking from './OrderTracking'
import TrackAndTracingOrderTracking2 from './TrackandTracing2'


function App() {
  
  return (
    <>
    <main>
      <Navigation />

      <Shipment />

      <Shipment />

      <ShipmentPrice />

      <OrderFrequency />

      <OrderListDatabase />

      <TrackDelivery />

      <MostShipmentGoods/>

      <Transportation />

      <DeliveryShipments />

      <ConsumersByCountry />

      <OrderTracking />

      <TrackAndTracingOrderTracking2 />
      
    
    </main>
    </>
  );
}

export default App