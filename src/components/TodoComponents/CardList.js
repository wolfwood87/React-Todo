import React from 'react';
import TodoList from './TodoList.js'
import '../../App.css';

const CardList = (props) => {
    const cardStyle = {
        border: '1px solid black'
    }
    
    return(
        <div className='card-box'>
            {props.cards.map(num => (
                <TodoList key = {num} style={cardStyle} />
            ))}
            <button className="button-box" onClick={props.addCard}>+</button>
        </div>
    )
  }

export default CardList;