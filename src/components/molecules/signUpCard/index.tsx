import React from "react";
import "./index.css"
import Field from "../../atoms/field";
import Button from "../../atoms/button";
import { Link, useHistory } from "react-router-dom"

import { regexpEmail, regexpPass } from "../../../helpers/helpers";

const SignUpCard = () => {
    const history = useHistory()
    return (
        <>
            <section className="signUpBox">
                <div className="signUpBox__container">
                    <Field placeholder={"Nome"} yup={(value: string) => true} error={true} />
                    <Field placeholder={"Email"} yup={(value: string) => regexpEmail.test(value)} error={true} />
                    <Field placeholder={"Senha"} typeField={"password"} yup={(value: string) => regexpPass.test(value)} error={true} />
                    <Button content={"Cadastrar"} onClick={() => history.push("/")}/>
                </div>
            </section>
        </>

    )
}

export default SignUpCard;