import React from 'react'

const Cart = ({cart}) => {
  return <div>

    <h1>your cart</h1>
    {
        cart.length ===0 ?(
            <p>your cart is empty</p>
        ) : (
            <ul>
            {
                
                cart.map((item , index) => (
                    <li key={ index}>
                        {item.title} - {item.price}

                    </li>
                ))
            }
            </ul>
        )
    }
      
    </div>
  
}


export default Cart
