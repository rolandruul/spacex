import React from 'react';
import { NotificationManager } from 'react-notifications';
import API from './../constants/api';
import { formatShipmentData } from './../utils/helpers';
import Header from './../components/Header/Header';
import Sidebar from './../components/Sidebar/Sidebar';
import Notification from './../components/Notification/Notification';
import ShipmentInfo from './../components/Shipment/ShipmentInfo/ShipmentInfo';

class Shipment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shipmentsLoaded: false,
      shipments: [],
      lastChangedShipment: {}
    };
  }

  componentDidMount() {
    const shipments = JSON.parse(localStorage.getItem('shipments'));
    if (shipments) {
      this.setState({ shipments, shipmentsLoaded: true });
    }
  }

  fetchShipments = () => {
    // Fetch
    fetch(API.shipments)
      .then(res => res.json())
      .then((result) => {
        const shipments = formatShipmentData(result);
        // Set state and save locally
        this.setState({
          fetching: false, 
          shipmentsLoaded: true,
          shipments
        });
        localStorage.setItem('shipments', JSON.stringify(shipments));
        NotificationManager.success('Shipments loaded successfully!');
      });
  }

  saveShipments = () => {
    const { lastChangedShipment, shipments } = this.state;

    const newShipments = shipments.map(shipment => {
      if (shipment.name === lastChangedShipment.name) {
        shipment.boxes = lastChangedShipment.boxes;
      }
      return shipment;
    });

    // Update state
    this.setState(prevState => {
      let _shipments = Object.assign({}, prevState.shipments);
      _shipments = newShipments;
      return _shipments;
    });
    // Save
    localStorage.setItem('shipments', JSON.stringify(newShipments));
    NotificationManager.success('Shipment updated successfully!');
  }

  setLastChangedShipment = val => {
    this.setState({ lastChangedShipment: val });    
  }

  render() {
    const { shipmentsLoaded, shipments } = this.state;
    return (
      <>
        {shipmentsLoaded && shipments.length > 0 ? (
          <>
            <Header
              search={shipments}
              save={this.saveShipments} 
              fetch={this.fetchShipments} 
            />
            <main role="main">
              <Sidebar items={shipments} />
              <ShipmentInfo shipments={shipments} setLastChangedValue={this.setLastChangedShipment} />
            </main>
          </>
        ) : (
          <Notification fetch doYes={this.fetchShipments} />
        )}
      </>
    );
  }
}

export default Shipment;