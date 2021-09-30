import { Gegenstand } from "./gegenstand";

export class Schmuck extends Gegenstand{

  constructor(id:number, wert:number, public bezeichnung: string) {
    super(id, wert);
  }

  toString(): string {
    let text: string = "\n\nSchmuck-Stück:";
    text += super.toString();
    text += "\nBezeichnung: " + "\t" + this.bezeichnung;
    return null;
  }
  
}