import { ComponentPropsWithRef, forwardRef, ReactNode, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

type ModalProps = {
    children: ReactNode;
    onClose: () => void
} & ComponentPropsWithRef<'dialog'>
export type ModalHandle = {
    open: () => void
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, onClose }, ref) {

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current?.showModal()
            }
        }
    })

    const dialog = useRef<HTMLDialogElement>(null)

    return createPortal(<dialog ref={dialog} className="modal" onClose={onClose}>{children}</dialog>, document.getElementById("modal")!)
})


export default Modal