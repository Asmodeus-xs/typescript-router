import { ComponentProps } from "react"
import { Link } from "react-router-dom"

type CustomButton = ComponentProps<"button"> & { textOnly?: boolean }
type CustomLink = ComponentProps<"a"> & { to: string; textOnly?: boolean }

type ButtonProps = CustomButton | CustomLink


export default function Button(props: ButtonProps) {

    if ("to" in props) {
        const { to, textOnly, children, ...otherProps } = props
        return <Link className={`button button${textOnly ? "--text-only" : ""}`} {...otherProps} to={to}>{children}</Link>
    }

    const { children, textOnly, ...otherProps } = props;

    return (
        <button className={`button button${textOnly ? "--text-only" : ""}`} {...otherProps}>{children}</button>
    )

}