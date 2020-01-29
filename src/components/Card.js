import React from 'react';
import './Card.css'
import { Link, navigate } from "gatsby"


const Card = props => (
    <div className="Card"  onClick={() => navigate(props.nav)}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <img src={props.image} />
    </div>
)

export default Card