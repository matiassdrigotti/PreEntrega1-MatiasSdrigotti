import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const navigate = useNavigate();

    return (
        <article className="CardItem2">
            <header className="Header2">
                <h2>{name}</h2>
            </header>
            <section>
            <picture className="detalleImg2">
                <img src={img} alt={name}/>
            </picture>
                <p className="Info2">
                    Categoria: {category}
                </p>
                <p className="Info2">
                    Descripcion: {description}
                </p>
                <p className="Info2">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter2">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada')}/>
                <button onClick={() => navigate(-1)} className='btnVolver' type="button">Volver</button>
            </footer>
        </article>
    )
}

export default ItemDetail