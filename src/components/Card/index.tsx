import React from 'react';
import './style.css';

interface CardInterface {
    text?: string 
};

const CardDNV : React.FC<CardInterface> = (props: CardInterface) => {

    return <div className="CardDNV">Card....{props.text}</div>
};


export default CardDNV;