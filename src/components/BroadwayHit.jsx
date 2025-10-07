import musicals from "../data/musicals.json";

export default function BroadwayHit(props){

        {
            if(props.isBroadwayHit){

                return(

                    <p> Broadway Hit! ⭐</p>

                )

                } else {

                    return (

                    <p> Not a Broadway Hit! 💔 </p>

                    )

                }


    } 
}


export function ExampleHit() {

  return <BroadwayHit musical={musicals.musicals[0]} />;

}