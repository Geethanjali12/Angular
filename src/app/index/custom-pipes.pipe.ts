import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: string, name: string): string {
    return 'Name: ' + name;
  }
 
}
