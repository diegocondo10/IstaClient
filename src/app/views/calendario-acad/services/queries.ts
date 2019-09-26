import gql from 'graphql-tag';

export const GET_EVENTOS = gql`
{
  appCalendarioAcademico {
    eventos(activo: true) {
      id
      titulo
      descripcion
      color
    }
  }
}
`


export const ADD_EVENTO = gql`
mutation agregarEvento($titulo: String!, $descripcion: String!, $color: String!) {
  appCalendarioAcad {
    addEvento(titulo: $titulo, descripcion: $descripcion, color: $color) {
      evento {
        id
      }
    }
  }
}
` 