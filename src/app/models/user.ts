import { Persona } from './persona';

export class User {
    username?: string;
    password?: string;
    estado?: boolean;
    loggedIn?: boolean;
    persona?: Persona;
    roles?: string[]
}
