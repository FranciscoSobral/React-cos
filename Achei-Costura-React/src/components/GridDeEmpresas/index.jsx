// src/components/GridDeEmpresas/index.jsx

import React from 'react';
import CardDeEmpresa from '../CardDeEmpresa'; // Importa o componente que acabamos de criar

// Este componente recebe a lista de empresas já filtrada
function GridDeEmpresas({ empresas }) {
  // Se não houver empresas para mostrar, exibe uma mensagem
  if (empresas.length === 0) {
    return <p>Nenhuma empresa encontrada para este filtro.</p>;
  }

  // Se houver empresas, cria a grade
  return (
    <div className="grid-container">
      {empresas.map(empresa => (
        <CardDeEmpresa key={empresa.id} empresa={empresa} />
      ))}
    </div>
  );
}

export default GridDeEmpresas;