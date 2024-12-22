import estilos from './card.module.css';
import Image from 'next/image';

export default function Card({ produto }) {
    return (
        <div className={estilos.container}>
            <figure>
                <Image src={produto.imagem} alt={produto.nome} className={estilos.img}/>
            </figure>
            <div>
                <div className={estilos.container_informacoes}>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>
                <div className={estilos.preco}>
                    <span>{new Intl.NumberFormat('pt-br', {style: "currency", currency:"BRL"}).format(produto.preco)}</span>
                </div>
            </div>
        </div>
    )
}