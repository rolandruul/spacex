import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CargoBay from './../../CargoBay/CargoBay';

function ShipmentInfo({ shipments, setLastChangedValue }) {

  const history = useHistory();
  const { id } = useParams();
  const [ data, setData ] = useState({});

  useEffect(() => {
    const activeShipment = shipments.filter(shipment => shipment.id === id);
    setData(activeShipment[0]);
  }, [shipments, id]);

  function handleValueChange(val) {
    const newValue = {...data, boxes: val };
    setLastChangedValue(newValue);
  }

  function setShipment(e) {
    history.push(e.target.value);
  }

  return (
    <div className="shipment-info">
      <p className="shipment-info__label">Select shipment:</p>
      <select className="shipment-info__shipment" onChange={setShipment}>
        {shipments.map(shipment => {
          return (
            <option 
              key={shipment.id} 
              value={`/shipment/${shipment.id}/${shipment.friendlyURL}`}>
              {shipment.name}
            </option>
          );
        })}
      </select>
      {id && data ? (
        <>
          <h1>{data.name}</h1>
          <p className="shipment-info__email">{data.email}</p>
          <CargoBay key={data.boxes} data={data.boxes} setLastChangedValue={handleValueChange} />
        </>
      ) : (
        <div>Select shipment.</div>
      )}
    </div>
  );
}

export default ShipmentInfo;