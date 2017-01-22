

export interface User {
    name:string;
}

export interface NameListener {
    onNameUpdated(name:string):void;
}