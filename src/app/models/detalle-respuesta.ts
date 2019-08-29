import { Diagnostico } from './diagnostico';
import { SeccionFS } from './seccion-ficha-salud';
import { Pregunta } from './pregunta';
export class DetalleRespuesta {
    id?: number
    respuestaSimple?: string
    respuestaParam?: number
    parentesco?: Diagnostico
    seccion?: SeccionFS
    pregunta?: Pregunta
}