
import { DetalleRespuesta } from './detalle-respuesta';
export type DetalleDiagnostico = {
    id?: number
    parentesco?: string
    diagnostico?: string
    detalleRespuesta?: DetalleRespuesta //ForeingKey

}