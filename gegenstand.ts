export abstract class Gegenstand {
  
  constructor(public readonly id: number, public wert: number) {}

  toString(): string {
    let text: string = "\nID: " + "\t" + this.id;
    text += "\nWert: " + "\t" + this.wert;
    return text;
  }



}