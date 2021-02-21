import React,{ useState, useEffect } from 'react'

import Product from '../components/product'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import data from '../backend/data'

export default function Homescreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => { 
        async function Load() {
            try {
                setLoading(true);
                const response = await fetch('https://api.npoint.io/a625b4ba492c397031c9')
                setLoading(false);
                
                const products = await  response.json()        
                setProducts(products)
               
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
         Load()
    }, [])

    return (

        <div className="row center">
            {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                <div className="row center">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
                </div>
            )}
             
        </div>
    )
}