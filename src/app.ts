//import path from "path";

const nam = 'James';

const person = { first: nam };
// eslint-disable-next-line max-len
const newn =
  'djkfsjdfkjhsdkjfhkjahdjfsklajhlkjsdfhalkjfhlkajshdflkjahsdlkjfhlaksdjfklasdjlkjkjlkjlkjl';
console.log(newn);
console.log(person, nam);

console.log('trying things ');

const sayHelloLinting = (fName: string) => {
  console.log(`Hello linting, ${fName}`);
};
sayHelloLinting(nam);

export const test = async (params: string) => {
  console.log(params);
};
