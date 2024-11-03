import { ComponentProps } from "react";


type InputProps = {
    label: string,
    id: string
} & ComponentProps<"input">

export default function Input({ label, id, ...props }: InputProps) {


    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id="id" name={id} {...props} />
        </div>
    )

}