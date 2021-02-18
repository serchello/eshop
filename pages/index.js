import Head from 'next/head'
import data from '../public/data'
import Product from '../components/product'
// import styles from '../styles/style.css'

export default function Home() {
  return (
   <>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Matata</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
           <div className="row center">
              
            {data.products.map((product) => (
                <Product key={product._id} product={product}/>
              ))}
              
           </div>
        </main>
        <footer className="row center">
            Powered By Sergios
        </footer>

      </div>
    </>
  )
}
