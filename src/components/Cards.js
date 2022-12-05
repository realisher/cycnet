/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>List of courses</h1>
        <div className='cards__conteiner'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src="images/cisco1.jpg"
                    text="Cycnet course V1"
                    label="Course"
                    path="/courseDes"
                    />
                    <CardItem
                    src="images/cisco4.jpg"
                    text="Cycnet course V2"
                    label="Course"
                    path="/courses"
                    />
                    <CardItem
                    src="images/cisco3.jpg"
                    text="Cycnet course V3"
                    label="Course"
                    path="/courses"
                    />
                   
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src="images/cisco1.jpg"
                    text="Cycnet course V4"
                    label="Course"
                    path="/courses"
                    />
                    <CardItem
                    src="images/cisco4.jpg"
                    text="Cycnet course V5"
                    label="Course"
                    path="/courses"
                    />
                    <CardItem
                    src="images/cisco3.jpg"
                    text="Cycnet course V6"
                    label="Course"
                    path="/courses"
                    />
                   
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Cards
