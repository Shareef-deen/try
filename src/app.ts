//import path from "path";

const nam = 'James';

const person = { first: nam };
const newn =
  'djkfsjdfkjhsdkjfhkjahdjfsklajhlkjsdfhalkjfhlkajshdflkjahsdlkjfhlaksdjfklasdjlkjkjlkjlkjl';
const sk = 3;
if (
  (sk === 3 && person.first && nam === 'James') ||
  newn.startsWith('d', 2) ||
  nam.startsWith('dsdasdasd')
) {
  console.log('test');
}

console.log(newn);
console.log(person, nam);

console.log('trying things jlkjl');

const sayHelloLinting = (fName: string) => {
  console.log(`Hello linting, ${fName}`);
};
sayHelloLinting(nam);

export const test = async (params: string) => {
  console.log(params);
};
