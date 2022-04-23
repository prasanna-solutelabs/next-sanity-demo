import { useRouter } from "next/router";
import styles from '../styles/Toolbar.module.css'

export const Toolbar =() =>{
    const router = useRouter();

    return(
        <div className={styles.main}>
                
                <div onClick={()=> router.push('/')}>Home</div>
                <div onClick={()=> router.push('/time')}>Time</div>
                <div  onClick={()=>router.push('/avatar2')}>Avatar</div>
        </div>
    )
}





export default Toolbar;