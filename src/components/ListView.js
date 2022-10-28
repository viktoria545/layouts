import React from "react";
import ShopItem from "./ShopItem";
import '../ListView.css';

export default function ListView(props) {
    const ShopItems = props.items.map((item, index) => <ShopItem key={index} item={item} />)
    return (
        <div className="shop-items" >{ShopItems}</div>
    )
}