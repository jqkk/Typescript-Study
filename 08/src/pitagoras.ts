import { pipe } from "./pipe";
import { squareMap } from "./squaredMap";
import { sumArray } from "./sumArray";

const pitagoras = pipe(
  squareMap,
  sumArray,
  Math.sqrt
)

console.log(
  pitagoras([3, 4])
)