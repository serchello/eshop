import React from 'react'
import data from '../public/data'
import Product from '../components/product'

export default function Homescreen() {
    
    return (

        <div className="row center">
            
            {data.products.map((product) => (
                <Product key={product._id} product={product}/>
            ))}
            
        </div>

    )
}