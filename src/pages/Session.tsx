import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { SESSIONS } from '../dummy-sessions.ts';
import BookSession from '../components/Sessions/BookSession.tsx';
import Button from '../components/UI/Button.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false)

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function handleCloseBookSession() {
    setIsBookSessionOpen(false)
  }
  function handleOpenBookSession() {
    setIsBookSessionOpen(true)
  }

  return (
    <main id="session-page">
      {isBookSessionOpen && <BookSession session={loadedSession} onClose={handleCloseBookSession} />}
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              {<Button onClick={handleOpenBookSession}>BookSession</Button>}
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
