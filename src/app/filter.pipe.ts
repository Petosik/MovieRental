import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';
import { Renting } from './renting';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(values: any[], term: any): any {
        if (term === undefined) {
            return values;
        }
        return values.filter(function (value) {
            if (value.title !== undefined)
                return value.title.toLowerCase().includes(term.toLowerCase());
            else
                return value.movie.title.toLowerCase().includes(term.toLowerCase());
        })
    }
}