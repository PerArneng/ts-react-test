import * as React from "react";


import { User } from "./state"


export class Hello extends React.Component<User, undefined> {

    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
}

