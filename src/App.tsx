import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import HeaderNCAA from './components/headerNCAA';
import TeamCards from './components/teamCards';
import AllTeams from './components/allTeams';

function App() {
  return (
    <>
      <div className="App-header">
        <HeaderNCAA />
        <div
          className="row"
          style={{
            textAlign: 'center',
            marginLeft: '25px',
            marginRight: '25px',
          }}
        >
          <div className="col-6">
            <TeamCards />
          </div>
          <div className="col-6" style={{ textAlign: 'left' }}>
            <AllTeams />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
