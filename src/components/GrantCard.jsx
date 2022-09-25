import '../css/index.css'
import '../css/grantCard.css'
import '../css/fonts.css'
import img from '../storage/edu_cap.svg'
import React from 'react'


function GrantCard(props) {
  return (
    <div className='grant_card'>
        <div className='card_firstColumn'>
            <div className='card_title'>
                {props.title} 
            </div>
            <hr></hr>
            <div className='card_firstParagraph'>
                <p>Кто может участвовать: {props.participant}.</p>
            </div>
            <div className='card_secondParagraph'>
                <p>Старт: {props.start}</p>
                <p>Бюджет: {props.price}$</p>
                <p>Партнер: {props.partner}</p>
            </div>
        </div>
        <div className='card_firstColumn'>
            <img src={img} alt='Edu Cap' />
            <button className='card_button'><p className='card_button_title'>Подробнее</p></button>
        </div>
    </div>
  )
}

export default GrantCard