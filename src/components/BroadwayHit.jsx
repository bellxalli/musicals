export default function BroadwayHit({ musical }) {
  if (musical.isBroadwayHit) {
    return <p>Broadway Hit! ⭐</p>
  } else {
    return <p>Not a Broadway Hit 💔</p>
  }
}
