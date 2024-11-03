import { createContext, ReactNode, useContext, useReducer } from "react";

export type UpcomingSessionItem = {
    id: string
    title: string;
    summary: string;
    date: string
}

type UpcomingState = {
    upcomingSessions: UpcomingSessionItem[]
    isUpcomingModalOpen: boolean
}

const initialState: UpcomingState = {
    upcomingSessions: [],
    isUpcomingModalOpen: false
}
type UpcomingContext = UpcomingState & {
    addUpcomingSession: (item: UpcomingSessionItem) => void
    removeUpcomingSession: (id: string) => void

}
const UpcomingSessionContext = createContext<UpcomingContext | null>(null)

export function useUpcomingSessionContext() {
    return useContext(UpcomingSessionContext)
}


type CancelUpcomingSession = {
    type: "CANCEL_SESSION"
    payload: string
}

type AddUpcomingSession = {
    type: "ADD_SESSION";
    payload: UpcomingSessionItem

}

type Action = CancelUpcomingSession | AddUpcomingSession

function UpcomingSessionReducer(state: UpcomingState, actions: Action) {

    const newState = { ...state }

    if (actions.type === "ADD_SESSION") {
        newState.upcomingSessions = [...state.upcomingSessions, actions.payload]
    }
    if (actions.type === "CANCEL_SESSION") {
        newState.upcomingSessions = state.upcomingSessions.filter(session => session.id !== actions.payload)
    }

    return newState
}


export default function UpcomingSessionContextProvider({ children }: { children: ReactNode }) {

    const [upcomingSessions, dispatch] = useReducer(UpcomingSessionReducer, initialState)

    const ctxValue: UpcomingContext = {
        upcomingSessions: upcomingSessions.upcomingSessions,
        isUpcomingModalOpen: upcomingSessions.isUpcomingModalOpen,
        addUpcomingSession(item) { dispatch({ type: "ADD_SESSION", payload: item }) },
        removeUpcomingSession(id) { dispatch({ type: "CANCEL_SESSION", payload: id }) }

    }


    return (
        <UpcomingSessionContext.Provider value={ctxValue}>
            {children}
        </UpcomingSessionContext.Provider>
    )

}