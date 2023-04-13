//import path from "path";
const nam = 'James';

const person = { first: nam };

console.log(person, nam);

const sayHelloLinting = (fName: string) => {
	console.log(`Hello linting, ${fName}`);
};
sayHelloLinting(nam);

export const test = async (params: string) => {
	console.log(params);
};
