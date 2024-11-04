import { useState } from "react"
import { NavLink } from "react-router-dom"
import Button from "../UI/Button"
import UpcomingSessions from "../Sessions/UpcomingSessions"

export default function Header() {

    const [isUpcomingSessionsOpen, setIsUpcomingSessionsOpen] = useState(false)



    function handleOpenSessions() {
        setIsUpcomingSessionsOpen(true)
    }
    function handleCloseSessions() {
        setIsUpcomingSessionsOpen(false)
    }

    return (
        <header id="main-header">
            {isUpcomingSessionsOpen && <UpcomingSessions onCloseSessions={handleCloseSessions} />}
            <h1>React Mentoring</h1>
            <nav>
                <ul>
                    <li><NavLink to={""} end>Our Mission</NavLink></li>
                    <li><NavLink to={"sessions"}>Browse Sessions</NavLink></li>
                    <li><Button onClick={handleOpenSessions} >Upcoming sessions</Button></li>
                </ul>
            </nav>
        </header>
    )
}
