import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    amount: stdlib.parseCurrency(50),
    secretKey:56
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    getBobPass: ()=>{
      return (56)
    }
    // implement Bob's interact object here
  }),
]);
console.log (`This is the balance of Alice after ${stdlib.formatCurrency(await stdlib.balanceOf(accAlice))}`)
console.log (`This is the balance of Alice after ${stdlib.formatCurrency(await stdlib.balanceOf(accBob))}`)
console.log('Goodbye, Alice and Bob!');
