import React from 'react';

const Shifumi = ({ score1, score2, handleClick }) => (
    <div className="container">
      <h1>Hello there</h1>
      <p>score player: {score1}<br/>score ordi: {score2}</p>
      <button value="0" type="button" onClick={handleClick}>
        Pierre
      </button>
      <button value="1" type="button" onClick={handleClick}>
        Feuille
      </button>
      <button value="2" type="button" onClick={handleClick}>
        ciseaux
      </button>
    </div>
  );

  export default Shifumi;