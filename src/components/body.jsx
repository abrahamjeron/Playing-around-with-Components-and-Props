export default function Body({ images }) {
  return (
    <div>
        {images.map((image) => (
            <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
            </div>
        ))}
    </div>
  );
}
