export class Keg {
  public pints: number = 124;
  public empty: boolean = false;
  constructor(public name: string, public brewery: string, public price: number, public abv: number, public ibu: number, public id: number) {}
}
