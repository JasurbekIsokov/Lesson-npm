"use script";


// Lesson 27

"use script";

// Prototype;

// const Avto = function (nomi, rangi, yili) {
//   this.nomi = nomi;
//   this.rangi = rangi;
//   this.yili = yili;

// };

// Avto.prototype.yoshi = function () {
//   return 2022 - this.yili;
// };

// Avto.prototype.nomi = function () {
//   return this.nomi1;
// };

// Avto.prototype.yoshi2 = function () {
//   return 2022 - this.yili;
// };

// Avto.prototype.nomi2 = function () {
// return this.nomi1;
// };

// let gm = new Avto("Nexia", "oq", 2022);

// console.log(gm);

// let qum = new Avto("Niva", "kok", 2021);

// console.log(qum.yoshi());

// console.log(qum);

// let sum = new Avto("Lasetti", "qora", 2020);

// console.log(sum);

// let nm = new Avto("Jentra", "kulrang", 2022);

// console.log(nm.yoshi());

// console.log(nm);

// console.log(Avto.prototype);

// console.log(gm.proto.proto);

// console.log(gm.proto.proto == Object.prototype);

// console.log(gm.hasOwnProperty("noi"));

// ----------------------------------------------------------------------------

// ES6 Classes

// class Bank {
//   // #name;
//   // #age;
//   // #summa;

//   static n = 20;

//   constructor(name, age, yili) {
//     this.name = name;
//     this.age = age;
//     this.summa = [];
//     this.yili = 2002;
//   }

//   set kiritilganSumma(val) {
//     this.summa.push(val);
//   }

//   get olish() {
//     return this.yili;
//   }

//   set chiqarilganSumma(val) {
//     this.summa.push(-val);
//   }

//   set nameniOlish(val) {
//     this.name = val;
//   }
//   set nameOl(val) {
//     this.nameniOlish = val;
//   }

//   set nameniOlish1(val) {
//     this.nameniOlish = val;
//   }

//   set nameniOlish2(val) {
//     this.nameniOlish1 = val;
//   }

//   set ageniOlish(val) {
//     this.age = val;
//   }

//   set ageiOlish1(val) {
//     this.ageniOlish = val;
//   }

//   set summaniOlish(val) {
//     this.summa = val;
//   }

//   set summaniOlish1(val) {
//     this.summaniOlish = val;
//   }
// }

// let jasur = new Bank("Jasur", 20);

// console.log(jasur);

// jasur.firstName = "d";

// console.log(jasur);

// Jasur.kiritilganSumma = 3000;

// ----------------------------------------------------------------------------

// Object.create





// const me = {
//     sum() {
//         return 2022-this.yosh
//     }
// }

// let Jasur = Object.create(me)
// Jasur.yosh = 20

// console.log(Jasur.sum());

// console.log(Jasur);


// ------------------------------------------------------------------------------------------

// const Person = function(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.ageSum = function() {
//     return 2022 - this.age
// }


// const Teacher = function(name ,age, job){
//     Person.call(this, name, age);

//     this.job = job;
// }

// Teacher.prototype = Object.create(Person.prototype)

// Teacher.prototype.oylikSum = function(){
//     console.log( 200000000);
// }

// const jasur = new Teacher("Jasur", 20, "Developer" )
 

// console.log(jasur);

// jasur.oylikSum()

// console.log(jasur.ageSum());

// ----------------------------- ///////////////////////////////////////////////////// -------------------------------

// Inhoritance in ES6 Classes


// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     yilniHisobla(){
//         return 2022-this.age

//     }
// }

// class Talaba extends Person {
//     constructor(name, age,grade){
//         super(name,age)
//         this.grade = grade;
//     }

//     foizniHisobla(){
//         return (this.grade*100)/5
//     }
// }

// const jasur = new Talaba ("Jasur" , 20,  4)

// console.log(jasur);

// console.log(jasur.foizniHisobla());

// console.log(jasur.yilniHisobla());

// ----------------------------- ///////////////////////////////////////////////////// -------------------------------

  
// const Person = {
    
//     sum (){
//         return 2022 - this.yosh
//     }
//     ,
//     qush(yosh){
//         this.yosh = yosh
//     }
// }

// const Student = Object.create(Person)

// Student.qush = function(yosh,name){
//     Person.qush.call(this, yosh)
//     this.name = name
// }



// Student.tani = function(){
//     console.log(`I am ${this.name} , I ${this.yosh} years old. Men ${jasur.sum()} - yil tug'ilganman`);
// }

// const jasur = Object.create(Student)

// jasur.qush(20,"Jasur")
// jasur.tani();


// ----------------------------- ///////////////////////////////////////////////////// -------------------------------

// Encapsulation : Private Programming OOP


//  class telefon  {

//     #codi

//     constructor(nomi, versiyasi, xotirasi, batareykasi, narxi ){
//         this.nomi = nomi;
//         this.versiyasi = versiyasi;
//         this.xotirasi = xotirasi;
//         this.batareykasi = batareykasi;
//         this.#codi = 1111;
//         this.narxi = narxi;
//     }

//     #codniUzgart (val){
//         this.#codi = val;
//     }

//     #codniUzgart1 (val){
//         this.#codniUzgart(val);
//     }

//     #codniUzgartir2(val) {
//         this.#codniUzgart1(val)
//     }

//     codniUzgartir(val){
//         this.#codniUzgartir2(val)
//     }

//  }


//  const iphone = new telefon("Iphone X" , 12, 128, 4000, '1000$')

//  console.log(iphone);

// iphone.codniUzgartir(1122)

// iphone.codniUzgartir(4122)

// class Samsung extends telefon {
//     constructor(nomi, versiyasi, xotirasi, batareykasi,narxi){
//         super(nomi, versiyasi, xotirasi, batareykasi,)
//         this.narxi = narxi;
//     }

    
// }

// const a50 = new Samsung("Samsung" , 12, 128, 4000, '1000$');

// a50.codniUzgartir(20) 

// console.log(a50)

// console.log(iphone);

// ----------------------------- ///////////////////////////////////////////////////// -------------------------------

// class Telefon {

//     constructor(name){
//         this.name = name;
//     }

//     nominiOl(){
//         console.log(this.name);
//     }

//     uzgartir(val){
//         this.name = val; 
//         return this;
//     }
// }


// let samsung = new Telefon("Samsung Galazy")

// samsung.uzgartir("Iphone").nominiOl()

// ----------------------------- ///////////////////////////////////////////////////// -------------------------------
