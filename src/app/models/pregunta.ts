import { TipoRespuesta } from './tipo-respuesta';
import { SeccionNombre } from './seccion-nombre';
export class Pregunta {
    id?: number
    numero?: number
    titulo?: string
    tipoRespuesta?: TipoRespuesta
    seccNom?: SeccionNombre
    required?: boolean
}

