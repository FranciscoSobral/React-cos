import React, { useState, useEffect } from 'react';
import Filtros from '../../components/Filtros';
import GridDeEmpresas from '../../components/GridDeEmpresas';

function EmpresasPage() {
  const [empresas, setEmpresas] = useState([]);
  const [filtros, setFiltros] = useState({ localizacao: 'Todas' });

  useEffect(() => {
    const dadosDoServidor = [
      { id: 1, nome: 'Roupas Estilosas', categoria: 'Modinha', cidade: 'Caruaru - PE', contato: '81 9...****' },
      { id: 2, nome: 'Malhas & Cia', categoria: 'Malharia', cidade: 'Toritama - PE', contato: '81 9...****' },
      { id: 3, nome: 'Jeans da Capital', categoria: 'Jeans', cidade: 'Toritama - PE', contato: '81 9...****' },
      { id: 4, nome: 'Costura Fina', categoria: 'Alta Costura', cidade: 'Caruaru - PE', contato: '81 9...****' },
    ];
    setEmpresas(dadosDoServidor);
  }, []);

  const handleFiltroChange = (nomeDoFiltro, valor) => {
    setFiltros(filtrosAnteriores => ({
      ...filtrosAnteriores,
      [nomeDoFiltro]: valor,
    }));
  };

  const empresasFiltradas = empresas.filter(empresa => {
    const passouNoFiltroDeLocalizacao = 
      filtros.localizacao === 'Todas' || empresa.cidade === filtros.localizacao;
    return passouNoFiltroDeLocalizacao;
  });

  return (
    <div>
      <h1>Empresas de Costura - {filtros.localizacao}</h1>
      <Filtros
        filtrosAtuais={filtros}
        onFiltroChange={handleFiltroChange}
      />
      <hr />
      <GridDeEmpresas empresas={empresasFiltradas} />
    </div>
  );
}
export default EmpresasPage;