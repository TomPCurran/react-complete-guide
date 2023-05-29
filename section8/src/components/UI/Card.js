import React from 'react';
import classes from './Card.module.css';

//props.children passes in things between <Card></Card>
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
