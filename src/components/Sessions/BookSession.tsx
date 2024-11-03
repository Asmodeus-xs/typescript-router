import { FormEvent, useEffect, useRef } from "react";
import Modal, { type ModalHandle } from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useUpcomingSessionContext, type UpcomingSessionItem } from "../../store/session-context";

type BookSessionProps = {
    session: UpcomingSessionItem
    onClose: () => void
}

export default function BookSession({ session, onClose }: BookSessionProps) {

    const modal = useRef<ModalHandle>(null)

    const { addUpcomingSession } = useUpcomingSessionContext()!


    function closeHandle() {
        onClose()
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        const formData = new FormData(event.currentTarget)

        const data = Object.fromEntries(formData) as { name: string, email: string }

        console.log(data);
        addUpcomingSession(session)
        onClose()
    }

    useEffect(() => {
        if (modal.current) {
            modal.current.open()
        }
    }, [])




    return (
        <Modal onClose={closeHandle} ref={modal}>
            <form onSubmit={handleSubmit}>
                <h2>Book Session</h2>
                <Input id="name" label="YOUR NAME" />
                <Input id="email" label="YOUR EMAIL" type="email" />
                <p className="actions">
                    <Button type={"button"} onClick={onClose} textOnly>Cancel</Button>
                    <Button>Book Session</Button>
                </p>
            </form>

        </Modal>
    )
}