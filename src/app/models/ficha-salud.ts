import { Persona } from './persona';
import { SeccionFS } from './seccion-ficha-salud';
import { PeriodoIngresoFicha } from './periodo-ingreso-ficha';

export type FichaSalud = {
    id?: number
    estadoRevision?: string
    estadoEnvio?: string
    periodoIngreso?: PeriodoIngresoFicha
    persona?: Persona
    seccionfsSet?: SeccionFS[]
}
