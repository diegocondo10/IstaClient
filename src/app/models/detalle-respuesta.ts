import { Diagnostico } from './diagnostico';
import { SeccionFS } from './seccion-ficha-salud';
import { Pregunta } from './pregunta';
export class DetalleRespuesta {
    id?: number
    respuesta?: string
    parentesco?: Diagnostico
    seccion?: SeccionFS
    pregunta?: Pregunta
}