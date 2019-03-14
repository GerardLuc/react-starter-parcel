import React from 'react';


const Shifumi = ({play, myself, computer}) => (
  <div className="container">
  <h1>Shifumi</h1>
    <span>Mon score {myself}</span><br></br>
    <span>Computer {computer}</span><br></br><br></br>
    <button value="0" type="button" onClick={play}>
      Pierre
    </button>
    <button value="1" type="button" onClick={play}>
      Feuille
    </button>
    <button value="2" type="button" onClick={play}>
      Ciseaux
    </button>
    </div> 
);


export default Shifumi;