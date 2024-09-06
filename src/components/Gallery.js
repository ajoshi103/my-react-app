import React, { useState } from 'react';
import '../styles/Gallery.css';
import  icon1 from "../styles/logo1.png";
import  icon2 from "../styles/logo2.png";

function Gallery() {
  const [images, setImages] = useState([
    'https://th.bing.com/th/id/R.ce8a61f344fcb6dc0e0cdb6f5c5c1368?rik=QxNOdOYDxtN%2fmg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f4%2fc%2f692635-large-naruto-shippuden-sasuke-wallpaper-2560x1600-windows-10.jpg&ehk=fX%2b%2fhP9znrDfMpkpD5UEnE6pSkwIFb%2fMqCQ5Iz%2fm0C4%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.ce8a61f344fcb6dc0e0cdb6f5c5c1368?rik=QxNOdOYDxtN%2fmg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f4%2fc%2f692635-large-naruto-shippuden-sasuke-wallpaper-2560x1600-windows-10.jpg&ehk=fX%2b%2fhP9znrDfMpkpD5UEnE6pSkwIFb%2fMqCQ5Iz%2fm0C4%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.ce8a61f344fcb6dc0e0cdb6f5c5c1368?rik=QxNOdOYDxtN%2fmg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f4%2fc%2f692635-large-naruto-shippuden-sasuke-wallpaper-2560x1600-windows-10.jpg&ehk=fX%2b%2fhP9znrDfMpkpD5UEnE6pSkwIFb%2fMqCQ5Iz%2fm0C4%3d&risl=&pid=ImgRaw&r=0',

    
   
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;

  // Calculate total pages based on images per page
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Get the images to display for the current page
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  // Navigate to the previous page
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
  };

  // Navigate to the next page
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1)); // Prevent going above the max page
  };

  return (
    <div className="gallery">
       <i class="material-icons">
        
        <img src={icon1} alt='Hi' height={20}/>
        
        </i> 
      {/* Flex container for Gallery text on left and Add Image + Arrows on right */}
      <div className="gallery-header">
        <h3>Gallery</h3>

        <div className="gallery-controls">
          <button className="add-image-btn" onClick={() => setImages([...images, 'https://th.bing.com/th/id/R.ce8a61f344fcb6dc0e0cdb6f5c5c1368?rik=QxNOdOYDxtN%2fmg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f4%2fc%2f692635-large-naruto-shippuden-sasuke-wallpaper-2560x1600-windows-10.jpg&ehk=fX%2b%2fhP9znrDfMpkpD5UEnE6pSkwIFb%2fMqCQ5Iz%2fm0C4%3d&risl=&pid=ImgRaw&r=0'])}>
            + Add Image
          </button>

          {/* Pagination controls: previous and next */}
          <button 
            className="pagination-btn" 
            onClick={handlePrevious} 
            disabled={currentPage === 0}
          >
            ←
          </button>

          <button 
            className="pagination-btn" 
            onClick={handleNext} 
            disabled={currentPage === totalPages - 1}
          >
            →
          </button>
        </div>
      </div>
      
      {/* Render the images for the current page */}
      <img src={icon2} alt='Hi' height={20}/>
      <div className="gallery-content">
        {currentImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
