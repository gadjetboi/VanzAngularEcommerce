import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   let defaultImageUrl = 'https://images.apple.com/v/macbook-pro/n/images/overview/compare13_small.jpg';

   return (value.includes('http://') || value.includes('https://')) ? value : defaultImageUrl;
  }

}
