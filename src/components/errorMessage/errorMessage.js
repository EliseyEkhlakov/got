import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'> */

const ErrorMessage = () => {
    return (
        <>
        <img src={img} alt='error'>
        </img>
        <span>
        Something goes wrong 
        </span>
        </>
    )
}

export default ErrorMessage;