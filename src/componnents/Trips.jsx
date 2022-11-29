import "../styles/elements/_gallery.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function Trips() {
  return (
    <div className="gallery">
      <h1>Moje wycieczki</h1>
      <div className="gallery-div"></div>
      <ButtonBackToTrail />
    </div>
  );
}
