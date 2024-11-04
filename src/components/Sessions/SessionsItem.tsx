import { Link } from "react-router-dom"


export type SessionItm = {
    id: string,
    title: string,
    image: string,
    summary: string
}


export default function SessionItem({ item }: { item: SessionItm }) {


    return (
        <>
            <img src={item.image} />
            <div className="session-data">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="actions">
                    <Link to={`/typescript-router/sessions/${item.id}`} className="button">Learn More</Link>
                </div>
            </div>
        </>
    )
}