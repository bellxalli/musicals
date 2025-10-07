
import musicals from "../data/musicals.json";


export default function RatingCard(){

    return(

        <div>

            <p> RatingCard </p>

    <div className="rating-card">
            <h3>{musicals.title}</h3>

        <div>

        <CriticRatings critics={musicals.ratings.critics} />
        <AudienceRatings audience={musicals.ratings.audience} />

        </div>

    </div>

        </div>
    )

}




export function CriticRatings(){

    <CriticRatings critics={musicals.ratings.critics} />

    return(

        

        <div>
            <p>Critic Rating: {critics}/10</p>
        </div>

    )

}

export function AudienceRatings(){

    return(

         <div>
            <p>Audience Rating: {audience}/10</p>
        </div>

    )

}