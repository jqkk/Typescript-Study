import { reduce } from "./reduce";
const sum = (result: number, value: number): number => result + value

export const sumArray = reduce(sum, 0)