import { FichaSalud } from './ficha-salud';
import { Pregunta } from './pregunta';
import { DetallePreguntas } from './detalle-preguntas';
export class Seccion {
    id?: number
    ficha?: FichaSalud
    nombre?: string
    detallepreguntasSet?: Array<DetallePreguntas>
}
