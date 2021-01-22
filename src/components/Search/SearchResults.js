import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function SearchResults({ results, onTrigger }) {
  
  const searchResultRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (searchResultRef.current && !searchResultRef.current.contains(e.target)) {
        // Close results when clicked outside of results
        onTrigger();
      }
    }
    // Bind ev. listener
    document.addEventListener('mousedown', handleClick);
    return () => {
      // Unbind on unmount
      document.removeEventListener('mousedown', handleClick);
    };
  }, [searchResultRef, onTrigger]);

  return (
    <>
      {results.result && results.result.length > 0 && (
        <div className="search-results" ref={searchResultRef}>
          {results.result.map(result => {
            return (
              <Link 
                key={result.id} 
                to={`/shipment/${result.id}/${result.friendlyURL}`} 
                onClick={onTrigger}
              >
                {result.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchResults;