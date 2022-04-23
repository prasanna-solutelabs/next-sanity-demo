import Toolbar from "../components/toolbar";
import Link from "next/link";


const defaultEndPoint ='https://rickandmortyapi.com/api/character/';

export async function getStaticProps() {
    const res = await fetch(defaultEndPoint);
    const data = await res.json()
    return{
        props: {
            data
        }
    }
}

export default function Avatar2({data}) {
    const { results = [] } = data;
    return(
        <div>
            <Toolbar />
            <h1 className='title'>
                Rick and Morty Wiki
            </h1>
        
            <ul className='grid'>
                {results.map(result =>{
                    const {id ,name , image} = result;

                    return(
                        <li key={id} className='card'>
                            <a>
                                <img src={image} alt={`${name}`}></img>
                                <h3>{name}</h3>
                            </a>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}