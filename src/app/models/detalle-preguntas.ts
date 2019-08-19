import { AbstractDetalleFicha } from './abstrac-detalle-ficha';
import { Pregunta } from './pregunta';
export class DetallePreguntas extends AbstractDetalleFicha {
    pregunta?: Pregunta
    respuesta?: string
}
