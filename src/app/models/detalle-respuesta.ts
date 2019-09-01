import { Diagnostico } from './diagnostico';
import { SeccionFS } from './seccion-ficha-salud';
import { Pregunta } from './pregunta';
import { DetalleParametro } from './detalle-parametros';
export type DetalleRespuesta = {
    id?: number
    respuesta?: string
    parentesco?: Diagnostico
    seccion?: SeccionFS
    pregunta?: Pregunta
    detalleparametrosSet?: DetalleParametro[]
}