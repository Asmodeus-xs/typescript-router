import { useUpcomingSessionContext } from "../../store/session-context";
import { useEffect, useRef } from "react";

import UpcomingSession from "./UpcomingSession";
import Modal, { type ModalHandle } from "../UI/Modal.tsx"
import Button from "../UI/Button.tsx";

type UpcomingSessionsProps = {
    onCloseSessions: () => void
}

export default function UpcomingSessions({ onCloseSessions }: UpcomingSessionsProps) {
    const { upcomingSessions } = useUpcomingSessionContext()!
    const modal = useRef<ModalHandle>(null)

    useEffect(() => {
        if (modal.current)
            modal.current.open();
    }, [])

    console.log(upcomingSessions.length)

    return (
        <Modal onClose={onCloseSessions} ref={modal}>
            {upcomingSessions.length <= 0 && <div>
                <p>No sessions booked yet</p>
                <Button onClick={onCloseSessions}>Close</Button>
            </div>}
            {upcomingSessions.length > 0 && <ul>
                {upcomingSessions.map((session) => <li key={session.id}><UpcomingSession {...session} /></li>)}
            </ul>}
        </Modal>
    )
}