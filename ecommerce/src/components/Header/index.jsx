import React from "react";
import Logo from "../../assets/logo.png"
import './header.css';



export const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">Início</a>
                </li>
                <li>
                    <a href="#">Produtos</a>
                </li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item_total">0</span>
            </div>
        </header>
    )
}