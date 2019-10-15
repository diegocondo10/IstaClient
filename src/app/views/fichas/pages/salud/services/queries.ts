import gql from 'graphql-tag';

export const BUSCAR_FICHA = gql`
query buscarFichaSalud($personaId: Int!) {
  appFs {
    fichaSalud {
      nombre
      posicion
      preguntafsSet {
        id
        posicion
        titulo
        ayuda
        tipo
        required
        min
        max
        step
        regex
        parametros {
          id
          titulo
        }
        respuestaPersona(personaId: $personaId) {
          id
          respuestas
        }
      }
    }
  }
}
`;



export const UPDATE_RESPUESTA_FS = gql`
mutation updateRespuestaFs($id: Int!, $respuesta: JSONString) {
  appFs {
    respuestaFs(id: $id, respuesta: $respuesta) {
      respuestaFs {
        id
      }
    }
  }
}
`;