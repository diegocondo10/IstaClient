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


export const GET_EVENTO_BY_ID = gql`
query getEventoById($id: Int!) {
  appCalendarioAcademico {
    eventoById(id: $id) {
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
    addEvento(titulo: $titulo, descripcion: $descripcion, color: $color, operation:CREATE) {
      evento {
        id
      }
    }
  }
}

`

export const EDIT_EVENTO = gql`
mutation editarEvento($id: Int!, $titulo: String!, $descripcion: String!, $color: String!) {
  appCalendarioAcad {
    addEvento(id: $id, titulo: $titulo, descripcion: $descripcion, color: $color, operation: UPDATE) {
      evento {
        id
      }
    }
  }
}
`

export const DELETE_EVENTO = gql`
mutation eliminarEvento($id: Int!, $titulo: String!, $descripcion: String!, $color: String!) {
  appCalendarioAcad {
    addEvento(id: $id, titulo: $titulo, descripcion: $descripcion, color: $color, operation: DELETE) {
      evento {
        id
      }
    }
  }
}
`