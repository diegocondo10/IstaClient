
import { DetalleRespuesta } from './detalle-respuesta';
export type DetalleDiagnostico = {
    id?: number
    diagnostico?: string
    parentesco?: string
    detalleRespuesta?: DetalleRespuesta //ForeingKey

}