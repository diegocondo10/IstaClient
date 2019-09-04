import { Diagnostico } from './diagnostico';
import { DetalleRespuesta } from './detalle-respuesta';
export type DetalleDiagnostico = {
    id?: number
    diagnostico?: Diagnostico
    detalleRespuesta?: DetalleRespuesta //ForeingKey
}