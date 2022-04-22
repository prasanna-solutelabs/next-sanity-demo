import Toolbar from "../components/toolbar";

export default function Time({time}) {
    return (
        <div>
            <Toolbar />
            <h1>{time}</h1>
        </div>
    )
}


export function getStaticProps() {
    console.log("running getstaticprops")
    return{
        props:{
            time: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        revalidate: 60,
    };
}