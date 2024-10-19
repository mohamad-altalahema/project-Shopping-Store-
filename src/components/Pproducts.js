import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Pproducts = ({cart , setcart}) => {
    const [product , setproducts] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setproducts(data) );
    },[])

    const addcart = (product)=>{
        setcart([...cart , product])
    }
  return <div>
    <h1>Products</h1>
    <div className='products-list'>
        {product.map(product =>(<div key={product.id} className='product'>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width='150'/>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`} className='s'>View Details</Link>
            <button onClick={() => {addcart(product)}}>Add to cart</button>

        </div>) )}

    </div>
  </div>
       
  
}

export default Pproducts
