import React from 'react';

const Shifoumi = ({play, myself, computer}) => (
  <div className="Container">
  <h1>SHIFOUMI</h1>
 
  <div>
      <span>Score du joueur {myself} </span>
      <span>Score ordinateur {computer} </span>
  </div>
  
  <button value="0" type="button" onClick={play}>Pierre</button>
  <button value="1" type="button" onClick={play}>Feuille</button>
  <button value="2" type="button" onClick={play}>Ciseau</button>
   
  </div>

);


export default Shifoumi;