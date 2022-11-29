import "../styles/elements/_gallery.scss";
import ButtonBackToTrail from "../utils/ButtonBackToTrail";

export default function Gallery({isUserLogged}) {
  return (
    <div className="gallery">
      <h1>Galeria zdjęć</h1>
      <div className="gallery-div">
        {isUserLogged === true && <h1>Zalogowany</h1>}
      </div>
      <ButtonBackToTrail />
    </div>
  );
}
