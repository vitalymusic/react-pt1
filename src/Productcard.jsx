import {useParams,Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Productcard() {

    const { id } = useParams();
    const [data, setData] = useState({});
    const getProduct = ()=>{
         fetch('https://dummyjson.com/products/'+id)
        .then(res => res.json())
        .then(dati => {setData(dati)});
    }

    useEffect(getProduct,[]);



    return ( 
    <>
        <Link to="/shop">Atgrirezties uz sarakstu</Link>

        <div className='product-details'>
            <h1>{data.title}</h1>
            <p>Apraksts: {data.description}</p>
            <p>Cena: {data.price} Eur</p>
            <p>Peejams daudzums: {data.stock}</p>

            <div className='images'>
                {data?.images?.map((image, i) => (
                    <img src={image} key={i}/>
                ))}
                
            </div>   
        </div>
        

    </> );
}

export default Productcard;