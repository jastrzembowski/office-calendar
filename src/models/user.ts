export enum VisitType {
  ID_CARD = "Wyrobienie dowodu osobistego",
  RESIDENTIAL_REGISTRATION = "Meldunek",
  VEHICLE_REGISTRATION = "Rejestracja Pojazdu",
  VOTING_REGISTRATION = "Zapisanie do spisu wyborczego"
}   

export interface User {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  emailConfirm?: string;
  type?: VisitType;
}