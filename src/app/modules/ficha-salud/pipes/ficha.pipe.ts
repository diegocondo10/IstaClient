import { Pipe, PipeTransform } from '@angular/core';
import { FichaSalud } from '../../../models/ficha-salud';
import { SeccionFS } from '../../../models/seccion-ficha-salud';

@Pipe({
  name: 'ficha'
})
export class FichaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): SeccionFS[] {

    console.log("PIPE FICHA SALUD");
    return (value.data['ficha'] as FichaSalud).seccionfsSet;
  }

}
