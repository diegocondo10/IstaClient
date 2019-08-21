import { User } from './user';
import { FichaSalud } from './ficha-salud';
import { TipoRespuesta } from './tipo-respuesta';
import { Parametro } from './parametro';
import { Pregunta } from './pregunta';
export class Responses {
    login?: User
    ficha?: FichaSalud
    tipoRespuesta?: TipoRespuesta
    parametros?: Parametro[]
    preguntas?: Pregunta[]
}