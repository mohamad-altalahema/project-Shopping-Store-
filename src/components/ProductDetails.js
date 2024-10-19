import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({setcart}) => {
    const p = useParams();
    const id = p.id
    const [product , setproduct] = useState([])
    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then((data) => setproduct(data) )
    })
    if(!product){
        return <div>loading.....</div>
    }

    const addtocart = ()=>{
        if(product){
            setcart((prevcart) => [...prevcart ,product])
        }

    }
  return <div>
    <h1>{product.title}</h1>
    <img src={product.image} alt='product' width='300'/>
    <p>{product.dwscription}</p>
    <p>{product.price}</p>
    <button onClick={addtocart} className='s'>Add to cart</button>

      
    </div>
  
}

export default ProductDetails
