import useGaleria from "../hooks/useGaleria"
import '../styles/galeria.css'

export default function Galeria() {

    const {piezas} = useGaleria();

  return (
    <div className="galeria">
     {piezas?.map(pieza => (
        <div className="galeria__pieza pieza" key={pieza.id}>
            <img className="pieza__img" src={`https://www.artic.edu/iiif/2/${pieza.image_id}/full/843,/0/default.jpg`} alt="Imagen de arte" />
            <div className="pieza__content">
                <h3 className="pieza__title">{pieza.title}</h3>
                <p className="pieza__author">{pieza.artist_title}</p>
                <p className="pieza__date">{pieza.date_end}</p>
            </div>
        </div>
     ))}
    </div>
  )
}