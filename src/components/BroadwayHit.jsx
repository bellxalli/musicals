export default function BroadwayHit({ props }) {
  if (props.isBroadwayHit) {
    return <p>Broadway Hit! ⭐</p>
  } else {
    return <p>Not a Broadway Hit 💔</p>
  }
}
