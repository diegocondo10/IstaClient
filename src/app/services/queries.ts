import gql from 'graphql-tag';
export const MIS_PERIODOS_LECTIVOS = gql`
query buscarPeriodo($cedula: String!, $rol: String!) {
  appNotas {
    periodos(cedula: $cedula, rol: $rol) {
      id
      fechaInicio
      fechaFin
      carrera {
        nombre
        docenteCoordinador {
          codigo
          persona {
            primerNombre
            primerApellido
          }
        }
      }
    }
  }
}
`;