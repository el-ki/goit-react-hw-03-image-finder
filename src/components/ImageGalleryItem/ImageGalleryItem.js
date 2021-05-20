const ImagGalleryItem = ({ smallSize, alt, largeSize }) => (
  <li className="ImageGalleryItem">
    <img
      src={smallSize}
      alt={alt}
      data-large={largeSize}
      className="ImageGalleryItem-image"
    />
  </li>
);
export default ImagGalleryItem;
