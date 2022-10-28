import React from "react";
import '../ShopItem.css'

export default function ShopItem({ item }) {
    return (
        <div className='shop_item'>
            <div className='item_img'>
                <img src={item.img} alt={item.name} />
            </div>
            <h3 className='item_h3'>{item.name}</h3>
            <div className='item_color'>{item.color}</div>
            <div className='item_price'>${item.price}</div>
            <button className='item_button'>Add to cart</button>
        </div>
    )
}