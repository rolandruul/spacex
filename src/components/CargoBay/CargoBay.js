import React, { useState } from 'react';
import { calcBayCount } from './../../utils/helpers';
import Input from './../Input/Input';

function CargoBay({ data, setLastChangedValue }) {

  const [ boxes, setBoxes ] = useState(data);
  const [ bayCount, setBayCount ] = useState(calcBayCount(boxes));

  function handleChange(e) {
    // New value w/ removed whitespace
    const newValue = e.target.value.replace(/\s/g, '');
    // Set state
    setBoxes(newValue);
    setBayCount(calcBayCount(newValue));
    setLastChangedValue(newValue);
  }

  return (
    <div className="cargo-bay">
      <p>Number of required cargo bays: <span>{bayCount}</span></p>
      <form>
        <label htmlFor="cargo-boxes">Cargo boxes</label>
        <Input mobWide id="cargo-boxes" value={boxes} onChange={handleChange} />
      </form>
    </div>
  );
}

export default CargoBay;