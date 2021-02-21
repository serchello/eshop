import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../backend/data'
import Rating from '../../components/rating'
import Master from '../../components/master'

export default function Productscreen(props) {
    
     const router = useRouter()
     const product = data.products.find((x) => x._id === router.query.id)

    if (!product) {
        return <div>Product not found</div>
    }
    
    return (
        <>
           <Master>
                <main>
                    
                <div className="row top">
                    <Link href="/">Back to result</Link>
                    <div className="col-2">
                        <img className = "large" src={product.image} alt={ product.name}/>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{ product.name}</h1>
                            </li>
                            <li>
                                <Rating
                                    rating='5'
                                    numReviews={product.numReviews}
                                ></Rating>
                            </li>
                            <li>
                                Price: ${product.price }
                            </li>
                            <li>
                                Description: {product.description }
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                        <span className="success">In Stock</span>
                                        ) : (
                                        <span className="danger">Unavailable</span>
                                        )}
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="primary block">Add to Cart</button>
                                </li>
                            </ul>
                        </div>   
                    </div>
                </div>


                </main>

            </Master>
        
        </>
    )
}