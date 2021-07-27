import { Pipe, PipeTransform } from '@angular/core';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';

@Pipe({
  name: 'filterChapters'
})
export class FilterChaptersPipe implements PipeTransform {

  transform(list: ChapterObject[], filter: string, props: string[]): ChapterObject[] {
    if(!filter || filter === '') return list;
    return list.filter((item: ChapterObject) => {
      for (const prop of props) {
        if(item[prop] && item[prop].toString().toLowerCase().includes(filter)) return true;
      }
      return false;
    });
  }

}
