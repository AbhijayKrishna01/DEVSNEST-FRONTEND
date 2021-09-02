const Card = (props)=>{
    return (
        <div className="container">
        <div className="card">
            <h1>{props.food}</h1>
          <p>You have consumed {props.calory} cals today </p>
        </div>
        </div>
    );
};
export default Card;