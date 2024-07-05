import React from 'react';
import './SharePopcorn.css';  // Import the corresponding CSS file
import Popcorn from '../images/Popcorn.png';  // Adjust the path as needed
import Share from '../images/Share.png';  // Adjust the path as needed
import Dollar2 from '../images/popcornImage.png';  // Adjust the path as needed
import Dollar5 from '../images/popcornImage.png';  // Adjust the path as needed
import Dollar10 from '../images/popcornImage.png';  // Adjust the path as needed

const SharePopcorn = () => {
  return (
    <div className="share-popcorn-container">
      <div className="popcorn-header">
        <img src={Share} alt="Share Image" className="share-image" />
        <img src={Popcorn} alt="Popcorn Image" className="popcorn-image" />
      </div>
      <div className="thanks-message">
        <h1>Thanks for supporting our efforts!</h1>
      </div>
      <div className="donation-selection">
        <table className="invisible-table">
          <tbody>
            <tr>
              <td><img src={Dollar2} alt="Popcorn 1" className="small-popcorn" /></td>
              <td><img src={Dollar5} alt="Popcorn 2" className="medium-popcorn" /></td>
              <td><img src={Dollar10} alt="Popcorn 3" className="large-popcorn" /></td>
            </tr>
            <tr>
              <td className="donation-amount">$2</td>
              <td className="donation-amount">$5</td>
              <td className="donation-amount">$10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="donate-button">
        <button className="donations-button">Donate</button>
      </div>
    </div>
  );
};

export default SharePopcorn;
