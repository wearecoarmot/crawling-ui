import React from 'react';

const BoardContent = () => {
  const dummyItems = [];

  for (let i = 0; i < 100; ++i) {
    dummyItems.push(<div key={i}>Dummy</div>);
  }

  return <>{dummyItems}</>;
};

export default BoardContent;
