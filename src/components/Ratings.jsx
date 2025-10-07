export default function RatingCard(props) {
  return (
    <div>

      <CriticRatings ratings={props.ratings} />
      <AudienceRatings ratings={props.ratings} />
      <BestRatings ratings={props.ratings} />

    </div>
  )
}

export function CriticRatings({ ratings }) {

  return <p>Critic Rating: {ratings.critics}/10</p>

}

export function AudienceRatings({ ratings }) {
  
    return <p>Audience Rating: {ratings.audience}/10</p>

}

export function BestRatings({ ratings }) {
  
    if (ratings.critics > 9 && ratings.audience > 9) {
    return <p>Rated great by all! 👍</p>
    } else {

        return <p> It's ok! </p>

    }

}
