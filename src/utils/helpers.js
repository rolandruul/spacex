// Sort alphabetically by name
export function sortAlphabeticallyByName(data) {
  return data.sort((a, b) => a.name.localeCompare(b.name));
}

// Creates SEO friendly URL section
export function createSEOFriendlyURL(data) {
  return data.map(row => ({ ...row, friendlyURL: row.name.replace(/[^\w]/gi, '-').toLowerCase() }));
}

// Sort alphabetically and add SEO friendly URL section
export function formatShipmentData(data) {
  const sorted = sortAlphabeticallyByName(data);
  const shipments = createSEOFriendlyURL(sorted);
  return shipments;
}

// Calculate bay count based on quotient and reminder
export function calcBayCount(boxes) {
  if (typeof boxes !== 'undefined') {
    const boxArray = boxes.split(',').filter(Boolean);
    const boxTotal = boxArray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    const quotient = (boxTotal / 10) >> 0;
    const reminder = boxTotal % 10 || 0;
    return reminder > 0 ? quotient + 1 : quotient;
  }
}