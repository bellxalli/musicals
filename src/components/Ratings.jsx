
import musicals from "../data/musicals.json";


export default function RatingCard(props){

    return(

        <div>

    <div className="rating-card">
            <h3>{props.title}</h3>

        <div>

        <CriticRatings critics={props.ratings.critics} />
        <AudienceRatings audience={props.ratings.audience} />

        </div>

    </div>

        </div>
    )

}

export function CriticRatings({props}){

    return(

        

        <div>
            <p>Critic Rating: {props}/10</p>
        </div>

    )

}

export function AudienceRatings({props}){

    return(

         <div>
            <p>Audience Rating: {props}/10</p>
        </div>

    )

}

export function ExampleRatings() {

  return <RatingCard musical={musicals.musicals[0]} />;

}