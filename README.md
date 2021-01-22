# SpaceX Cargo Planner

Mobile version is really shallow and for real life purpose it wouldn't work.

I used create-react-app for broilerplate.

Shipments are loaded from project description's repository, then saved locally into browser's localStorage.

Structure:

/src
  /components - All components used
  /constants  - Constants (routes, api urls etc)
  /fonts      - Fonts used
  /img        - Images and icons used
  /pages      - Contains all main pages
  /styles     - Styles
  /utils      - Helper functions etc

/pages/Shipment - is main page for shipments view.

URL for single shipment is: /shipment/:id/:friendlyURL

Shipment is filtered by it's id

Friendly URL is just a shipment name, where spaces and other symbols are replaced with hyphens.

I tried to use both: functional components with hooks and also class components.