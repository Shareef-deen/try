//import path from "path";
const nam = 'James';

const person = { first: nam };

console.log(person,nam);

console.log("trying things out");

const sayHelloLinting = (fName: string) => {
	console.log(`Hello linting, ${fName}`);
};
sayHelloLinting(nam);

export const test = async (params: string) => {
	console.log(params);
};
