import React, { useState } from 'react';

import image1 from '../public/Image/image2.jpg';
import image2 from '../public/Image/image8.jpg';
import image3 from '../public/Image/image10.jpg';
import image4 from '../public/Image/images11.jpg';
import image5 from '../public/Image/images12.jpg';
import image6 from '../public/Image/image9.jpg';
import image7 from '../public/Image/image13.jpg';
import image8 from '../public/Image/images5.jpg';
import image9 from '../public/Image/images7.jpg';
import image10 from '../public/Image/images4.jpg';
import image11 from '../public/Image/image14.jpg';
import image12 from '../public/Image/image6.jpg';

const App = () => {
 const firstContainerImages = [
    { src: image1 ,width: '500px', height: '150px' },
    { src: image2, width:'200px',height:'300px'},
    { src: image3, width: '500px', height: '150px' },
    { src: image4, width: '170px', height: '200px' },
    { src: image5, width: '190px', height: '150px' },
    { src: image6, width: '160px', height: '180px' },
    { src: image7, width: '210px', height: '160px' },
  ];

  const secondContainerImages = [
    { src: image8, width: '200px', height: '200px' },
    { src: image9, width: '180px', height: '150px' },
    { src: image10, width: '220px', height: '180px' },
    { src: image11, width: '190px', height: '190px' },
    { src: image12, width: '290px', height: '170px' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState(firstContainerImages);

  const openModal = (index, images) => {
    setCurrentIndex(index);
    setCurrentImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  const renderImages = (images, containerTitle, rowsConfig) => (
    <div style={{ marginBottom: '20px' }}>
      <h2>{containerTitle}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: rowsConfig,
          gap: '10px',
          
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Thumbnail ${index}`}
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
              borderRadius: '8px',
              border:'3px solid white',

              
            }}
            onClick={() => openModal(index, images)}
          />
        ))}
      </div>
    </div>
  );
  const [isUploadPopupVisible, setIsUploadPopupVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null); // Stores the selected file
    const handleUploadClick = () => {
      setIsUploadPopupVisible(true);
  };
  const closeUploadPopup = () => {
    setIsUploadPopupVisible(false); // Closes the popup
  };
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]); // Updates state with the selected file
    }
  };
  

  
  

  return (
    <div style={{ padding: '20px', backgroundImage: 'linear-gradient(to right, black, green, black)' ,marginBottom:'600px'}}>
     <nav style={{ color: 'black', padding: '1rem' }}>
        <div
          className="nav-left"
          style={{
            backgroundColor: 'whitesmoke',
            padding: '10px',
            borderRadius: '15px',
            width: '400px',
            marginLeft: '80px',
            
          }}
        >
          <a href="/" style={{ backgroundColor: 'aqua', padding: '5px', borderRadius: '15px' }}>
            Home
          </a>
          <a href="/about">About us</a>
          <a href="/category">Category</a>
          <a href="/profile">Profile</a>
        </div>
        <div className="nav-right" style={{ padding: '5px', color: 'black', }}>
          <button style={{backgroundColor:'aqua' }} onClick={handleUploadClick}>Upload your work</button>
          {isUploadPopupVisible && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      
    }}
  >
    <div
      style={{
        backgroundColor: 'black',
        color:'white',
        padding: '20px',
        borderRadius: '8px',
        width: '900px',
        justifyContent:'space-between',
        height:'400px',
        display:'flex',
        border:'2px solid green'
      }}
    >
      <div>
        <button
          onClick={closeUploadPopup}
          style={{
            margin:'310px 10px',
            padding: '10px',
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid green',
            borderRadius: '5px',
            marginLeft:'10px'
            
          }}
        >
          Cancel
        </button>
      </div>
      <header style={{marginRight:'50px',fontSize:"12px"}}><i class="bi bi-images"style={{marginRight:'25px',backgroundColor:'lightgreen',padding:'3px', color:'black',borderRadius:'60%' }}></i>AddyourArtwork </header>
      <div style={{margin:'70px 10px',height:'180px',width:'400px',padding:'90px'}}><i class="bi bi-images" style={{marginLeft:'10px',color:'green'}}></i>
      <input type="file"  style={{color:'green',textShadow:'pink'}} onChange={(e) => console.log(e.target.files[0])} />
      </div>
       <div style={{margin:'310px 40px',marginLeft:'100px'}}>
      <button style={{backgroundColor:'lightgreen',fontSize:'10px' }}>Upload Your work</button>
      </div>
      
      
    </div>
  </div>
)}
          <button style={{marginLeft:"20px"}}>
          <i class="bi bi-box-arrow-in-left"></i> Sign Out
          </button>
        </div>
      </nav><br></br>
      <h3 style={{color:"white",marginLeft:'90px'}}>Digital art Work </h3><br></br>
      <div className='firstcon'>
 
       {/* First Container */}
    {renderImages(firstContainerImages, 'First Container', 'repeat(4, 1fr)',)}</div><br></br>
    <h3 style={{color:"white",marginLeft:'90px'}}>Recent Art</h3>

<div className='secondcon'>
  
 {/* Second Container */}
      {renderImages(secondContainerImages, 'Second Container', 'repeat(3, 1fr)')}</div>
      <div>
        <h5 style={{color:"white",backgroundColor:'black',textAlign:'center'}}>Digital art</h5>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          >
            Close
          </button>

          <button
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={goToPrev}
          >
            &#8249; {/* Left arrow */}
          </button>

          <img
            src={currentImages[currentIndex].src}
            alt={`Full Image ${currentIndex}`}
            style={{  }}
          />

          <button
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={goToNext}
          >
            &#8250; {/* Right arrow */}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
