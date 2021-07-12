import React from "react";
import "./index.css"

interface Props {
    content: string
    onClick?: () => void
}

const Button:React.FC<Props> = ({ content, onClick }) => {

    return (
        <button
            className="buttonBox__button"
            onClick={onClick}
        >{content}</button>
    )
}

export default Button;
