import * as React from "react";

import { User } from "./state"

export const ReverseName = (props: User) => (
    <div>{props.name.split('').reverse().join('')}</div>
);




