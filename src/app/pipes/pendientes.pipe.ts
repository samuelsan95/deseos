import { Pipe, PipeTransform } from "@angular/core";
import { List } from "../classes/listas";

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {
    transform(lists: List[], status: boolean = false) : List[] {

        let newList:List[] = [];

        for(let list of lists) {
            if( list.finish === status) {
                newList.push(list);
            }
        }

        return newList;
    }
}