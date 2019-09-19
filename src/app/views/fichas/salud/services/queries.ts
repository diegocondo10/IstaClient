import gql from 'graphql-tag';

export const BUSCAR_FICHA = gql`
query buscarFicha($personaId: Int!) {
  ficha(personaId: $personaId) {
    id
    seccionfsSet {
      seccionNombre {
        id
        nombre
      }
      detallerespuestaSet {
        id
        respuesta
        pregunta {
          id
          numero
          titulo
          required
          observacion
          dependeDe {
            id
            numero
          }
          tipoRespuesta {
            id
            nombre
            extra
            parametroSet {
              id
              descripcion
            }
          }
        }
        detalleparametrosSet {
          id
          detalleRespuesta {
            id
          }
          parametro {
            id
          }
        }
        detallediagnosticoSet {
          id
          parentesco
          diagnostico
          detalleRespuesta {
            id
          }
        }
      }
    }
  }
}

`;


export const CONFIRMAR_FICHA = gql`
mutation confirmarFicha($ID: ID, $state: String!) {
  ficha(ficha: {id: $ID, estadoEnvio: $state}, operation: UPDATE) {
    ficha {
      id
    }
  }
}
`;

export const PARAMETRO_OTRO = gql`
mutation agregarParametro($params: CrearParametrosInput!) {
  crearParametro(params: $params) {
    detalle {
      id
      parametro {
        id
        descripcion
      }
    }
  }
}
`;