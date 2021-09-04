import React from "react";

const Card = ({item})=>{
    return(
    <div className="card">
        <img src={item.img} alt={item.name}/>
        <div className="card-info">
            <h2>{item.name}</h2>
            <h3>{item.nickname}</h3>
            <p>{item.birthday}</p>
            <p>{item.status}</p>
        </div>
    </div>
    )}

export default Card;