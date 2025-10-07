import Ratings from "./Ratings"
import BroadwayHit from "./BroadwayHit"

function Musical(props) {
  return (
    <div>
      <hr />
      <h2>{props.title}</h2>
      <Ratings {...props} />
      <BroadwayHit musical={props} />
      <p>{props.title} hit the stage in {props.year} and written by {props.composer}. Tickets for this musical average $250 per person. Critics say it is {props.durationMinutes} minutes of musical entertainment!</p>
      <p>Genres:</p>
      <ul>
        {props.genres.map((g, index) => <li key={index}>{g}</li>)}
      </ul>
    </div>
  )
}

export default Musical
