import React, { useState } from "react";
import "./index.css"

interface Props {
    placeholder: string
    yup: (error: string) => boolean
    error: boolean
    typeField?: string
}

const Field:React.FC<Props> = ({ placeholder, yup, error, typeField= "" }) => {
    const [value, setValue] = useState("")

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <div className="fieldBox">
            <input
                className={yup(value) ? "fieldBox__field" : "fieldBox__field--error"}
                placeholder={placeholder}
                value={value}
                type={typeField}
                onChange={handleChange}
            />
            <p className="fieldBox__error">{error && !yup(value) && `${placeholder}: error`}</p>
        </div>
    )
}

export default Field;
