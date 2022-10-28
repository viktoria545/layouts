import React from "react";
import ShopCard from "./ShopCard";
import '../CardsView.css';

export default function CardsView(props) {
    const ShopCards = props.cards.map((item, index) => <ShopCard key={index} card={item} />)
    return (
        <div className="shop-cards" >{ShopCards}</div>
    )
}