import React from 'react';
// Usaremos o Link para a navegação no futuro
import { Link } from 'react-router-dom';

function CardDeEmpresa({ empresa }) {
  return (
    <div className="card-empresa">
      {/* Se não tiver imagem real, pode usar um placeholder */}
      <img src={empresa.imageUrl || 'https://via.placeholder.com/300x200'} alt={empresa.nome} />
      <div className="card-info">
        <h3>{empresa.nome}</h3>
        <p>{empresa.categoria}</p>
        <span>{empresa.contato}</span>
        <Link to={`/empresas/${empresa.id}`}>
          <button>Saiba mais</button>
        </Link>
      </div>
    </div>
  );
}

export default CardDeEmpresa;