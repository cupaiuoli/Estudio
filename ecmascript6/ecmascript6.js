function print(text) {
  document.write(text + '<br/>');
}
function TITULO________________________________(titulo) {
  let separador = "-".repeat(50 - titulo.length);
  document.write("<br/>" + separador + titulo + separador + "<br/>");
}
TITULO________________________________("LET");
var x = 20;
if (true) {
  let x = 10;
  print("x local = " + x );
}
print("x global = " + x);


TITULO________________________________("CONST");
const PI = 3.14159;

if (true) {
  const PI = 2.13;
  print("pi local = " + PI + "<br/>");
}
print("pi global = " + PI + "<br/>");

TITULO________________________________("TEMPLATE LITERAL");
let firstName = "Lautaro";
let lastName = "Cupa";

print(`${firstName} ${lastName}`);
print(`10 x 5 = ${10 * 5}`);

TITULO________________________________("TAG TEMPLATE LITERAL");
function doMatch(strings, ...values) {
  if (strings[0] == 'Add') {
    print(`${values[0]} + ${values[1]} = ${values[0] + values[1]}`);
  } else if (strings[0] == 'Sub') {
    print(`${values[0]} - ${values[1]} = ${values[0] - values[1]}`);
  }
}

doMatch `Add${10} ${20}`;
doMatch `Sub${10} ${20}`;


TITULO________________________________("TEMPLATE LITERAL 3");
for (let c of lastName) {
  print(`${c}`);
}

TITULO________________________________("TEMPLATE LITERAL 4");
function highlight(strings, ...values) {
     // here i is the iterator for the strings array
     return strings.reduce((result, string, i) => {
      return `A${result}B${string}C <cite>D${values[i] || 'E'}</cite>`;
    }, '');
}
const author = 'Thomas A. Edison';
const statement = `I have not failed. I've just found 10,000 ways that won't work.`;
const quote = highlight`${statement} by ${author}`;
print(quote);

TITULO________________________________("MULTILINE");
let multilinea = "Esto es \
una linea\
multilinea";

let multilinea2 = `Y esta
se evalua
con backslash`;
print(`Strings multilinea: ${multilinea} <br/> ${multilinea2}`);


TITULO________________________________("DEFAULT VALUES");
function getSum(num1= 5, num2= 10){
  print(`${num1} + ${num2} = ${num1 + num2}`);
  print(`${arguments[0]} + ${arguments[1]} = ${num1 + num2}`);
}
getSum(3);

TITULO________________________________("DEFAULT VALUES 2");
function getSumMore(...vals) {
  let sum = 0;
  for (let i = 0, len = vals.length; i < len; i++) {
    sum += vals[i];
  }
  print(`La suma es ${sum}`)
}
getSumMore(1, 2, 3, 4);

let arrayValores = [1, 2, 3, 4, 5];
getSumMore(...arrayValores);

TITULO________________________________("REDUCE");
let valArr = [1, 2, 3, 4, 5];
let sumVals = valArr.reduce((a, b) => a + b);
print(`Sum: ${sumVals}`);

TITULO________________________________("FILTER");
let evens = valArr.filter(v => v % 2 == 0);
print(`Pares: ${evens}`);


TITULO________________________________("MAP");
let doubles = valArr.map(v => v * 2);
print(`Dobles: ${doubles}`);

TITULO________________________________("OBJETOS");
function createAnimal(name, owner) {
  return {
    name,
    owner,
    getInfo(){
      return `${this.owner} es dueño de ${this.name}`;
    },
    address: {
      street: 'Libertad 123',
      city: 'Buenos Aires'
    }
  };
}
var spot = createAnimal("Spot", "Cupa");
print(`${spot.getInfo()}`);
print(`${spot.name} esta en ${spot.address.city}`);

print(`getOwnPropertyName ${Object.getOwnPropertyNames(spot).join(" ")}`);

TITULO________________________________("DESTRUCTURING");
let {name, owner} = spot;
print(name);

let favNums = [34, 55, 65];
let [, , ultNum] = favNums;
let [, ...last2] = favNums;
print(`Array: ${favNums}. Ultimo Num: ${ultNum}, ultimos dos: ${last2}`);

let val1 = 1, val2 = 2;
[val1, val2] = [val2, val1];
print(`val2: ${val2}`);


TITULO________________________________("CLASES");
class Mammal{
  constructor(name){
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  static makeMammal(name) {
    return new Mammal(name);
  }

  getInfo() {
    return `${this.name} es un Mamifero`;
  }
}

let mammal1 = Mammal.makeMammal("Chipper");
let mammal2 = new Mammal("Fred");
mammal1.name = "Mark";
print(`Mammal 1: ${mammal1.name}`);
print(`Mammal 2: ${mammal2.name}`);
print(mammal1.getInfo());

TITULO________________________________("SUBCLASES");
class Marsupial extends Mammal{
  constructor(name, hasPouch){
    super(name);
    this._hasPouch = hasPouch;
  }
  get hasPouch() { return this._hasPouch; }
  set hasPouch(hasPouch) { this._hasPouch = hasPouch; }
  getInfo() {
    return `${this.name} es un Marsupial`;
  }
}

let kangaroo = new Marsupial("Kangaroo", true);
let quokka =  new Marsupial("Quokka", false);
print(`${kangaroo.getInfo()} y ${kangaroo.hasPouch ? ' tiene ' : ' no tiene ' } a pouch`);
print(`${quokka.getInfo()} y ${quokka.hasPouch ? ' tiene ' : ' no tiene ' } a pouch`);

TITULO________________________________("CLASES DINAMICAS");
function getClass(classType) {
  if (classType == 1) {
    return Mammal;
  } else {
    return Marsupial;
  }
}
class Koala extends getClass(1){
  constructor(name) {
    super(name);
  }
}
let koala = new Koala("Koala");
print(koala.getInfo());

TITULO________________________________("SIMBOLOS");
let capital = Symbol("State capital");
let neuquen = {};
neuquen[capital] = "Viedma";
print(`Symbol capital:${capital.toString()}`);
print(`Capital de Neuquen es ${neuquen[capital]}`);

let employeeNum = Symbol.for("Employee Number");
let bobSmith = {};
bobSmith[employeeNum] = 10;
let sallyMarks = {};
sallyMarks[employeeNum] = 11;

print('');
print(`Symbol employeeNum: ${employeeNum.toString()}`);
print(`Bob: ${bobSmith[employeeNum]}`);
print(`Sally: ${sallyMarks[employeeNum]}`);

TITULO________________________________("ARRAYS");
let array1 = Array.of(1, 2, 3);
let array2 = Array.from(array1, (value) => value * 2);
let array3 = Array.from("word");

for (let val of array1) { print(`Array 1 [1, 2, 3]: ${val}`); }
for (let val of array2) { print(`Array 2 (Array1 * 2): ${val}`); }
for (let val of array3) { print(`Array 3 (Word): ${val}`); }

TITULO________________________________("SETS");
var randSet = new Set();
randSet.add(10);
randSet.add("Word");

print(`Tiene num 10 ${randSet.has(10)}`);
print(`Set size ${randSet.size}`);

randSet.delete(10);
print(`Tiene num 10 ${randSet.has(10)} borrado`);

for (let val of randSet) {
  print(val);
}

TITULO________________________________("MAP");
var randMap = new Map();
randMap.set("key1", "Word");
randMap.set("key2", 10);

print(`key 1 ${randMap.get("key1")}`);
print(`key 2 ${randMap.get("key2")}`);
print(`Map size ${randMap.size}`);
randMap.forEach((val, key) => {print(`para ${key} tiene ${val}`)});

TITULO________________________________("PROMISES 1");
var p1 = Promise.resolve("Resolve Me 1");
p1.then((res) => print(`${res}`));

var p2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve('Resolve Me 2'), 2000);
});
//p2.then((res) => print(res));

TITULO________________________________("PROMISES 2");
let randVal = 18;
var p3 = new Promise((resolve, reject) => {
  if (randVal == 18) {
    resolve("Good Value");
  } else {
    reject("Bad Value");
  }
});
function funResolve(val){
  print(`Funcion resolve ${val}`);
}
function funReject(err){
  print(`Funcion reject ${err}`);
}
//p3.then((val) => print(val), (err) => print(err));
p3.then(funResolve, funReject);

TITULO________________________________("PROMISES 3");
var p4 = new Promise((resolve, reject) => {
  if (randVal <= 17) {
    throw new Error("Cant Vote");
  } else {
    resolve("Can Vote");
  }
});
p4.then((val) => print(val)).catch((err) => print(err.message));
