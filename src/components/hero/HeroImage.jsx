import vector from "../../assets/images/vector.png";

export default function HeroImage() {
  return (
    <div className="hero-image-wrapper">

      <div className="hero-glow" />

      <img
        src={vector}
        alt="Subhadeep"
        className="hero-image"
      />

    </div>
  );
}