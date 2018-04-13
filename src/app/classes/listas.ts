import { Item } from './item'

export class List{
  name:string;
  finish:boolean;
  items: Item[];

  constructor( name : string, finish ?: boolean, items ?: Item[]) {
    this.name = name;
    this.finish = false;
  }
}
