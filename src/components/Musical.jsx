import React from "react"
import Ratings from "./Ratings"
import BroadwayHit from "./BroadwayHit"




function Musical(props)
{
    return (
        <div id={props.props.id}>
            <hr />
            <h2>{props.props.title}</h2>

            <Ratings />
            <BroadwayHit />

            <p>{props.props.title} hit the stage in {props.props.year} and wirtten by 
                {props.props.composer}. Tickets for this muscial average $250 per person.
                Critics say it is a {props.props.durationMinutes} minutes of musical entertainment!
            </p>

            <p>Genres:</p>
            <ul>
                {props.props.genres.map((g, index) => (
                    <li key={index}>{g}</li>
                ))}
            </ul>
        </div>
        

    )
}

export default Musical;

