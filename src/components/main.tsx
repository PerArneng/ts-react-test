import * as React from "react";

import { Hello } from "./hello";
import { NameField } from "./namefield";
import { ReverseName } from "./reversename";

import { User } from "./state";

export class Main extends React.Component<User, User> {

    constructor(props:User) {
        super(props)
        this.state = { name: props.name };
    }

    onNameUpdate(name:string) {
        this.setState( {name: name} );
    }

    render() {
        return  <div>
                    <Hello name={this.state.name} /><br />
                    The name in reverse: <ReverseName name={this.state.name} /><br />
                    <NameField onNameUpdated={name => this.onNameUpdate(name) } />
                </div>;
    }
}
