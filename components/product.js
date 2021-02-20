import React from 'react'
import Rating from './rating'
import Link from 'next/link'

export default function Product(props) {
    const { product } = props;
    return (
  
       
        <>
            <Link href={`/product/${product._id}`}>
                <div key={product._id} className="card">               
                    <img className="medium" src={product.image} alt={product.name} />
                    <div className="card-body">
                        <h2>{ product.name}</h2>
                        <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}     
                        />
                        <div className="price">${ product.price} </div>
                    </div>
                </div>
            </Link>
        </>


    )
}