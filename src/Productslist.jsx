import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './productslist.css';
function Productslist() {

    const [data, setData] = useState([]);
    const [searchInpValue, setsearchInpValue] = useState("");

    const getProducts = ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {setData(data.products)});
    }
    // console.log(data.products);


    const  showProductCard = (id)=>{
        window.reload('')
    }

    useEffect(getProducts,[]);

    
    const formSubmit = (e)=>{
        e.preventDefault();
            fetch(`https://dummyjson.com/products/search?q=${searchInpValue}`)
            .then(res => res.json())
            .then(data => {setData(data.products)})
            .then(setsearchInpValue(""));
         }

    
    


    return ( 
    <>
    <h2>Produktu katalogs</h2>
    <div className='product-search'>
        <form onSubmit={(e)=>{
                formSubmit(e);
            }}>
            <input type="text" placeholder='Ievadiet produkta nosaukumu' onInput={(e)=>{setsearchInpValue(e.target.value)}} value={searchInpValue}></input> 
            <input type="submit" value="Meklēt"   />

        </form>
           
    </div>    
    <div className='products'>
        {data.map((product,i)=>{
            return (
            // console.log(product);
            <div className='product-card' key={i}>
                <h3>{product.title}</h3>
                <p>{product.brand}</p>
                <img src={product.thumbnail}></img>
                <Link to={"/shop/product/"+product.id} ><button>Skatīt produktu</button></Link>

            </div>
            )
        })}

    </div>



    </> );
}

export default Productslist;