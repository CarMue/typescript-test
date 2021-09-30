export class GegenstandNichtGefundenError extends Error {

  constructor(private id: number) {
    super("Gesuchter Gegenstand mit der ID " + id + "nicht gefunden!");
    super.name = "Nicht-Gefunden-Error";
  }
}