// calculator.js
import { add, subtract } from "./utils.js";

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function calculate(a, b) {
  console.log(`Add: ${add(a, b)}`);
  console.log(`Subtract: ${subtract(a, b)}`);
  console.log(`Multiply: ${multiply(a, b)}`);
  console.log(`Divide: ${divide(a, b)}`);
}
