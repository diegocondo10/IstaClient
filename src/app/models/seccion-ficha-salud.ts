import { FichaSalud } from './ficha-salud';
import { SeccionNombre } from './seccion-nombre';
import { DetalleRespuesta } from './detalle-respuesta';
export class SeccionFS {
    id?: number
    ficha?: FichaSalud
    seccionNombre?: SeccionNombre
    detallerespuestaSet?: DetalleRespuesta[]
}
