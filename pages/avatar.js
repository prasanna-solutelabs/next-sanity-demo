import Toolbar from "../components/toolbar";
import Link from "next/link";


export default function Avatar({avatars}) {
    return(
        <div>
            <Toolbar />
            {avatars.map((avatar) =>{
                const name = avatar.name.toLowerCase().replace(/ /g,'-');;
                return(
                    <div key={avatar._id} className='ssr-styles'>
                        <h3>{avatar._id}</h3>
                        
                        <Link href={`/characters/${name}`}>
                        <h2>{name}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>


    )
}


export async function getStaticProps() {
    const avatars = await fetch ('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar').then(r => r.json());
    console.log(avatars);
    return{
        props: {
            avatars,
            
        },

    }
}
