import { Persona } from './persona';
export interface SeccionFs {
    id?: number
    nombre?: string
    posicion?: string
    activo?: boolean
}


export interface PreguntaFs {
    id?: number
    posicion?: number
    titulo?: string
    ayuda?: string
    tipo?: string
    required?: boolean
    min?: number
    max?: number
    step?: number
    regex?: string
    seccion?: SeccionFs
    dependeDe?: PreguntaFs
    parametros?: ParametroFs[]
    respuestaPersona?: RespuestaFs
}

export interface ParametroFs {
    id?: number
    titulo?: string
    agregado_por?: string
    pregunta?: PreguntaFs
    activo?: boolean
    check?: boolean
}

export interface PermisoIngresoFs {
    id?: number
    inicio?: Date
    fin?: Date
    //periodo?: PeriodoLectivo
    activo?: boolean
}

export interface PersonaFs {
    id?: number
    fechaIngreso?: Date
    fechaModificacion?: Date
    finalizada?: boolean
    persona?: Persona
}

export interface RespuestaFs {
    id?: number
    respuestas?: string
    personaFs?: PersonaFs
    pregunta?: PreguntaFs
}

export interface RespuestaSimple {
    respuesta?: ParametroFs
}

export interface RespuestaParametros {
    parametros?: Map<number, ParametroFs>
}

export interface Diagnostico {
    parentesco?: string
    diagnostico?: string
    medicacion?: 'SI' | 'NO'
}
export interface RespuestaDiagnosticos {
    diagnosticos?: Diagnostico[]
}


export interface RespuestaJSON {
    parametro?: ParametroFs
    parametros?: Map<number, ParametroFs>
    diagnosticos?: Diagnostico[]
    respuestaSelect?: { id?: number, titulo?: string }

}