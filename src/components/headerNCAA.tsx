import React from 'react';

function headerNCAA() {
  return (
    <div>
      <header
        style={{
          paddingTop: '25px',
          paddingBottom: '25px',
          textAlign: 'center',
          borderBottom: 'solid black',
          borderRadius: '10px 10px 10px 10px',
          boxShadow: '0px 4px 4px black',
          backgroundColor: '#ff7c00',
          color: 'black',
        }}
      >
        <h1>NCAA Basketball Team List</h1>
        <p style={{ fontSize: '14px' }}>
          This site shows all the NCAA basketball teams as well as their
          respective mascots and locations
        </p>
      </header>
    </div>
  );
}

export default headerNCAA;
