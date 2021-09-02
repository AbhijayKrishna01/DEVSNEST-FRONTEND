import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';
import './style.css';

ReactDOM.render(
    <>
    <h1>Calorie Read Only</h1>


   <div className="main">
        <Card
            food={Sdata[0].food}
            calory={Sdata[0].calory}
        />

        <Card
            food={Sdata[1].food}
            calory={Sdata[1].calory}
        />

        <Card
            food={Sdata[2].food}
            calory={Sdata[2].calory}
        />

        <Card
            food={Sdata[3].food}
            calory={Sdata[3].calory}
        />

        <Card
            food={Sdata[4].food}
            calory={Sdata[4].calory}
        />

        <Card
            food={Sdata[5].food}
            calory={Sdata[5].calory}
        />

        <Card
            food={Sdata[6].food}
            calory={Sdata[6].calory}
        />
        
    </div>
    </>

    ,
    document.getElementById("root")
);