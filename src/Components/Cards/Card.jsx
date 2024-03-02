import { useState } from "react";
import "./Card.css";

export const Card = ({ pelis }) => {
  const { img, titulo, genero, descripcion } = pelis;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="Cards"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="image" src={img} />
        {isHovered && (
          <div className="hover-info">
            <h2 className="titulo">{titulo}</h2>
            <span className="Span">
              <strong>Género:</strong> {genero}
            </span>
            <br />
            <span className="Span">
              <strong>Descripción:</strong> {descripcion}
            </span>
          </div>
        )}
      </div>
    </>
  );
};
