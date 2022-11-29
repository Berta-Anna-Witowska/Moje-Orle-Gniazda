import "../styles/elements/_gallery.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function ToVisit() {
  return (
    <div className="gallery">
      <h1>Chcę odwiedzić</h1>
      <div className="gallery-div"></div>
      <ButtonBackToTrail />
    </div>
  );
}
