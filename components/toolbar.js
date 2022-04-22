import { useRouter } from "next/router";
import styles from '../styles/Toolbar.module.css'

export const Toolbar =() =>{
    const router = useRouter();

    return(
        <div className={styles.main}>
                
                <div onClick={()=> router.push('/')}>Home</div>
                <div onClick={()=> router.push('/time')}>Time</div>
                <div  onClick={()=> window.location.href = 'https://github.com'}>Github</div>
                <div onClick={() => router.push('/avatar')}>Avatar</div>
        </div>
    )
}

// export function getStaticProps() {
//     return{
//         props:{
//             time: new Date().toISOString()
//         },
//     };
// }



export default Toolbar;