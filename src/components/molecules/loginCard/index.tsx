import React from "react";
import "./index.css"
import Field from "../../atoms/field";
import Button from "../../atoms/button";
import { Link } from "react-router-dom"

import { regexpEmail, regexpPass } from "../../../helpers/helpers";

const LoginCard = () => {
    return (
        <>
            <section className="loginBox">
                <div className="loginBox__container">
                    <Field placeholder={"Email"} yup={(value: string) => regexpEmail.test(value)} error={true} />
                    <Field placeholder={"Senha"} typeField={"password"} yup={(value: string) => regexpPass.test(value)} error={true} />
                    <Button content={"Login"} />
                </div>
            </section>
            <Link style={{color: "black"}} to="/signup/">Cadastre-se</Link>
        </>

    )
}

export default LoginCard;
