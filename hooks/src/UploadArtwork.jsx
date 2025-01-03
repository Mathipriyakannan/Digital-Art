import React, { useState } from 'react';
import './UploadArtwork.css'; // Add your custom CSS file here if needed

const UploadArtwork = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleUploadClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="upload-artwork-container">
      <button className="upload-button" onClick={handleUploadClick}>
        Upload Your Work
      </button >
      <button  onClick={handleClosePopup}>close</button>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Upload Your Artwork</h2>
            <p>Select your file to upload.</p>
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadArtwork;
