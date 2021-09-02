import React from 'react';

const Card=(props)=>{
    return (
        <>
            <div className="container">
                <div className="card">
                    <h1>{props.food}</h1>
                    <h3>you have consumed {props.calory} cals today</h3>
                </div>
            </div>
        </>
    );
}

export default Card;