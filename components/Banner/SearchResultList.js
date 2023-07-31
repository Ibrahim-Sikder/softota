import React from 'react';

const SearchResultList = () => {
     return (
          <div className="results-list">
      {results.map((result, id) => {
        return <searc result={result.name} key={id} />;
      })}
    </div>
     );
};

export default SearchResultList;