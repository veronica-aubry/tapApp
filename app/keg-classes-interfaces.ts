module KegList{
  export interface IKeg {
    pints: number;
    name: string;
    brewery: string;
    price: number;
    abv: number;
    ibu: number;
    markEmpty(): void;
  }

  export class Keg implements IKeg {
    public pints: number = 124;
    public empty: boolean = false;
    constructor(public name: string, public brewery: string, public price: number, public abv: number, public ibu: number, public id: number) {}
    markEmpty(){
      this.empty = true;
    }
  }

}
