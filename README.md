# SpaceX Cargo Planner

Mobile version is really shallow and for real life purpose it wouldn't work.

I used create-react-app for broilerplate.

Shipments are loaded from project description's repository, then saved locally into browser's localStorage.

Structure:

<dl>
  <dt>/src</dt>
  <dd>/components - All components used</dd>
  <dd>/constants  - Constants (routes, api urls etc)</dd>
  <dd>/fonts      - Fonts used</dd>
  <dd>/img        - Images and icons used</dd>
  <dd>/pages      - Contains all main pages</dd>
  <dd>/styles     - Styles</dd>
  <dd>/utils      - Helper functions etc</dd>
</dl>

/pages/Shipment - is main page for shipments view.

URL for single shipment is: /shipment/:id/:friendlyURL

Shipment is filtered by it's id

Friendly URL is just a shipment name, where spaces and other symbols are replaced with hyphens.

I tried to use both: functional components with hooks and also class components.