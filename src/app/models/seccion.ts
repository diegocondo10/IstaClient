import { FichaSalud } from './ficha-salud';
import { Pregunta } from './pregunta';
export class Seccion {
    id?: number
    ficha?: FichaSalud
    nombre?: string
    detallepreguntasSet?: Pregunta[]
}
