import React from 'react'
import './Card.css';

function Card(props) {
        return(
            <div className={"poker-card"}>
                <div className={"inner-stroke"}>
                    <div className={"number"}>{props.num}</div>
                </div>
            </div>
        );
}

export default Card