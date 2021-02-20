import React from 'react'

export default function Header() {

    return (

        <header className="row">
            <div>
                <a className="brand" href="/">Matata</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>

    )
}