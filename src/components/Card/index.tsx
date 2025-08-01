import { Link } from "react-router-dom"
import { TbShoppingCartUp } from "react-icons/tb";
type CardProps = {
    id: number
    name: string,
    image: string,
    price: number,
    lastPrice: number
}
import './style.css'


export default function Card({ name, image, price, lastPrice, id }: CardProps) {
    return (
        <div className="flex gap  justify-start items-center ">
            <Link
                key={id}
                to={`/infoProduct/${id}`}
                className="container-produto-categoria ml-2">
                <div className="div-imagem-produto-categoria">
                    <img
                        className="imagem-produto-categoria"
                        src={image} alt="" />
                </div>
                {name && (

                    <p className="nome-produto-categoria leading-4 mt-2 text-[18px]">{name}</p>
                )}
                <div className="div-preco-categoria">
                    <div className="prices-categoria">
                        <p className="last-price-categoria">{lastPrice.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
                        <p className="price-produto-categoria ">{price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
                    </div>
                    <button className="add-carrinho-card-categoria">
                        <  TbShoppingCartUp className="icon-carrinh-categoria" />
                    </button>
                </div>
            </Link>
        </div>


    )
}