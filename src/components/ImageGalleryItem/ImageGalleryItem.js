const ImagGalleryItem = ({ smallSize, alt, largeSize, onClick }) => (
  <li className="ImageGalleryItem">
    <img
      src={smallSize}
      alt={alt}
      data-large={largeSize}
      data-alt={alt}
      className="ImageGalleryItem-image"
      onClick={onClick}
    />
  </li>
);
export default ImagGalleryItem;
