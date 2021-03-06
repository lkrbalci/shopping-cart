import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {

    return (
        <div className="nav">
            <ul className="navLinks">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
            <div className="cartIcon">
                <Link to="/cart"><img src="https://img.pngio.com/shopping-cart-icon-free-download-png-and-vector-cart-icon-png-256_256.png" alt="Shopping Cart Icon - Free Download, PNG and Vector" style={{ width: "25px", height: "25px" }}></img></Link>
            </div>
            {(props.data > 0) ?
                <div className="basketQuantity"><p>{props.data}</p></div> :
                null}

        </div>
    )
}

export default Nav