import * as React from "react";


import { NameListener } from "./state"

export class NameField extends React.Component<NameListener, undefined> {

    onInput(event:React.FormEvent<HTMLInputElement>) {
        this.props.onNameUpdated(event.currentTarget.value);
    }

    render() {
        return  <form>
            <b>Name:</b>
            <input type="text" onInput={ e => this.onInput(e) }></input>
        </form>;
    }
}