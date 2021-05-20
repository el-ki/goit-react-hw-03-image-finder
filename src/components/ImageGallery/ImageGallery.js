import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((item) => (
        <ImageGalleryItem
          key={item.id}
          smallSize={item.webformatURL}
          alt={item.tags}
          largeSize={item.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
