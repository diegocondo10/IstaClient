import { Diagnostico } from './diagnostico';
import { SeccionFS } from './seccion-ficha-salud';
import { Pregunta } from './pregunta';
import { DetalleParametro } from './detalle-parametros';
import { DetalleDiagnostico } from './detalle-diagnostico';
export type DetalleRespuesta = {
    id?: number
    respuesta?: string
    parentesco?: Diagnostico
    seccion?: SeccionFS
    pregunta?: Pregunta
    detalleparametrosSet?: DetalleParametro[]
    detallediagnosticoSet?: DetalleDiagnostico[]
}