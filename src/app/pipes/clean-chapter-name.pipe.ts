import { Pipe, PipeTransform } from '@angular/core';
import { ANIMES_INFO } from '../constants/general.constants';

@Pipe({
  name: 'cleanChapterName'
})
export class CleanChapterNamePipe implements PipeTransform {

  transform(value: string, anime: string): string {
    return ANIMES_INFO[anime].validName(value);
  }

}
