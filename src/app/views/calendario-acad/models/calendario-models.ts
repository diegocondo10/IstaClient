export interface Evento {
    id?: number
    titulo?: string
    descripcion?: string
    color?: string
    activo?: boolean
}

export interface PeriodoLectivo {
    id: number
    //carrera: Carrera
    nombre: string
    fechaInicio: Date
    fechaFin: Date
    observacion: string
    estado: Boolean
    activo: Boolean
    numCierre: number
    //cursosSet: [Curso]
    //tipodenotaSet: [TipoDeNota]
    //permisoingresofsSet: [PermisoIngresoFs]
    //calendario: Calendario
}

export interface CalendarioAcad {
    id: number
    fechaInicio: Date
    fechaFin: Date
    activo: Boolean
    periodo: PeriodoLectivo
    eventos: Evento[]
    detallecalendarioSet: DetalleCalendario[]
}

export interface DetalleCalendario {
    id: number
    fechaInicio: Date
    fechaFin: Date
    activo: Boolean
    calendario: CalendarioAcad
    evento: Evento
}