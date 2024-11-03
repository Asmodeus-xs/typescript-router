
import Button from "../UI/Button"
import { type UpcomingSessionItem, useUpcomingSessionContext } from "../../store/session-context"



export default function UpcomingSession({ title, summary, date, id }: UpcomingSessionItem) {

    const { removeUpcomingSession } = useUpcomingSessionContext()!

    return (
        <div className={"upcoming-session"}>
            <div>
                <h2>{title}</h2>
                <p>{summary}</p>
                <time>{date}</time>
            </div>
            <Button textOnly onClick={() => removeUpcomingSession(id)} >Cancel</Button>
        </div>
    )

}