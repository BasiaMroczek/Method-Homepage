import React from "react";

const ImageModal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("image-modal")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="image-modal" onClick={handleClick}>
      <div className="image-modal__content">
        <img
          src={selectedImg.src}
          alt={selectedImg.alt}
          className="image-modal__img"
        />
        <button className="image-modal__close" onClick={() => setSelectedImg(null)}>
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
