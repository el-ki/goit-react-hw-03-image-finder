import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map((item) => (
        <ImageGalleryItem
          key={item.id}
          smallSize={item.webformatURL}
          alt={item.tags}
          largeSize={item.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
