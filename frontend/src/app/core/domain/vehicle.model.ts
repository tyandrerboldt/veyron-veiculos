export interface VehicleModel {
  id: number;
  model: string;
  board: string;
  color: string;
  year: number;
  fuel: string;
}

export enum FuelType {
  Alcool = "alcool",
  Gasoline = "gasoline",
  Diesel = "diesel",
  Flex = "flex"
}