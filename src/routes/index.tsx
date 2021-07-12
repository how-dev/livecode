import React from "react";
import { Switch, Route } from "react-router-dom"
import LoginCard from "../components/molecules/loginCard";
import SignUpCard from "../components/molecules/signUpCard";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <LoginCard />
            </Route>
            <Route path="/signup/">
                <SignUpCard />
            </Route>
        </Switch>
    )
}

export default Routes;
