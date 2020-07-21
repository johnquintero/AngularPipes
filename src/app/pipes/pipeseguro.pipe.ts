import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'pipeseguro'
})
export class PipeseguroPipe implements PipeTransform {

  constructor(private _domSanitaizer : DomSanitizer){

  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this._domSanitaizer.bypassSecurityTrustResourceUrl(value);
  }

}
