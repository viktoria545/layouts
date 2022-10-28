import React from "react";
import '../IconSwitch.css'

export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    return (
        <div className='btn_icon'>
            <button className='btn' onClick={onSwitch}>
                <span className='material-icons'> {icon}</span>
            </button>
        </div>
    )
}