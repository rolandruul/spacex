import React from 'react';
import SidebarItem from './SidebarItem';
import SidebarSection from './SidebarSection';

function Sidebar({ items }) {

  function getSectionLetter(item, index, arr) {
    const firstLetter = item.name.charAt(0).toUpperCase();
    const prevFirstLetter = (index > 0) ? arr[index - 1].name.charAt(0).toUpperCase() : false;
    
    if (prevFirstLetter) {
      return prevFirstLetter !== firstLetter ? firstLetter : false;
    } else {
      return firstLetter;
    }
  }

  return (
    <div className="sidebar">
      <h2>Shipment list</h2>
      {items.map((item, i, arr) => {
        // Alphabetical sectioning
        const sectionLetter = getSectionLetter(item, i, arr);
        return (
          <div key={i}>
            {sectionLetter && <SidebarSection key={i} title={sectionLetter} />}
            {<SidebarItem key={item.id} data={item} />}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;