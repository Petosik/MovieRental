import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(movies: any[], field: any, reverse?: boolean): any {
    if (!movies) {
      return movies;
    }

    if (field == "title") {
      let sortedArray: Movie[] = movies.sort((m1, m2) => {
        if (m1.title.toLowerCase() > m2.title.toLowerCase())
          return 1;
        if (m1.title.toLowerCase() < m2.title.toLowerCase())
          return -1;
        return 0;
      });
      if (reverse) {
        return sortedArray.reverse();
      }
      return sortedArray;
    }

    if (field == "release year") {
      let sortedArray: Movie[] = movies.sort((m1, m2) => {
        if (m1.releaseYear > m2.releaseYear)
          return 1;
        if (m1.releaseYear < m2.releaseYear)
          return -1;
        return 0;
      });
      if (reverse) {
        return sortedArray.reverse();
      }
      return sortedArray;
    }
  }
}