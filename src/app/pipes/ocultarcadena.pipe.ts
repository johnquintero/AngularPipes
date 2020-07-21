import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarcadena'
})
export class OcultarcadenaPipe implements PipeTransform {

  transform(value: string, activo : boolean): string {

    //Esta es una forma

    // let letra : string;
    // let resultado : string = '';
    // if (activo) {
    //   for (letra of value) {
    //     resultado += '*';
    //   }
    //   return resultado;
    // }
    // return value;

    return (activo) ? '*'.repeat(value.length) : value;
  }

}
