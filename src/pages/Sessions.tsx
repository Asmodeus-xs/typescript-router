import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server
import SessionItem, { type SessionItm } from '../components/Sessions/SessionsItem.tsx'
import { useState, useEffect } from 'react';



export default function SessionsPage() {

  const [sessions, setSessions] = useState<SessionItm[]>([])


  useEffect(() => {
    setSessions(SESSIONS)
  }, [])


  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      {<ul id='sessions-list'>
        {sessions.map(item => <li className='session-item' key={item.id}><SessionItem item={item} /></li>)}
      </ul>}
    </main>
  );
}
