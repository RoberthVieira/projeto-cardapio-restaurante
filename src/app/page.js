'use client';
import Image from "next/image";
import estilos from "./page.module.css";
import Banner from '@/../public/banner.png';
import { useState } from "react";
import { filtrarProdutos, buscaProduto, produtosEntradas } from "./service/service";
import Cards from './components/Card/index';
import Categorias from "./components/Categorias/index";
import CampoDeBusca from "./components/CampoDeBusca";
import { produtos } from "./Dados/dados";
import Rodape from './components/Rodape';


export default function Home() {

  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState('Entradas');

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscaProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  }

  return (
    <div>
      <header className={estilos.topo}>
        <Image src={Banner} alt="banner" className={estilos.img}/>
        <div>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes nosso cardapio é um requinte de sabores refinados.</p>
        </div>
      </header>
      <main className={estilos.container_principal}>
        <Categorias
          handleFiltro={handleFiltro}
          botaoClicado={botaoClicado}
        />
        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />
        <section className={estilos.secao_cards}>
          <h2>Cardápio</h2>
          <div className={estilos.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto}/>
            ))}
          </div>
        </section>
      </main>
      <Rodape/>
    </div>
  );
}
