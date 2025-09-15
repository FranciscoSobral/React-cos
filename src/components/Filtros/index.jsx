// src/components/Filtros/index.jsx

import React from 'react';

// Este componente recebe duas "props" (propriedades) da página Empresas:
// 1. filtrosAtuais: Para saber qual opção está selecionada.
// 2. onFiltroChange: A função que ele deve chamar quando o usuário mudar uma opção.
function Filtros({ filtrosAtuais, onFiltroChange }) {
  const cidades = ["Todas", "Caruaru - PE", "Toritama - PE", "Santa Cruz do Capibaribe - PE"];

  return (
    <div className="filtros-container">
      <label htmlFor="localizacao">Localização:</label>
      <select 
        id="localizacao"
        name="localizacao"
        // O valor exibido no dropdown é controlado pelo estado da página Empresas
        value={filtrosAtuais.localizacao}
        
        // Quando o usuário escolhe uma nova cidade...
        onChange={(evento) => 
          // ...ele chama a função onFiltroChange que veio do "pai" (EmpresasPage)...
          // ...e avisa qual filtro mudou ('localizacao') e qual o novo valor (evento.target.value).
          onFiltroChange('localizacao', evento.target.value)
        }
      >
        {cidades.map(cidade => <option key={cidade} value={cidade}>{cidade}</option>)}
      </select>
      
      {/* Aqui você adicionará os outros filtros, como o de "cargo", seguindo o mesmo modelo */}
    </div>
  );
}

export default Filtros;