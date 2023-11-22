// let products = [
//   { id: 1, name: "Ürün 1", price: 10.99, category: "Elektronik" },
//   { id: 2, name: "Ürün 2", price: 15.49, category: "Giyim" },
//   { id: 3, name: "Ürün 3", price: 5.99, category: "Mutfak" },
//   { id: 4, name: "Ürün 4", price: 7.99, category: "Elektronik" },
//   { id: 5, name: "Ürün 5", price: 12.99, category: "Giyim" },
//   { id: 6, name: "Ürün 6", price: 9.99, category: "Mutfak" },
//   { id: 7, name: "Ürün 7", price: 19.99, category: "Elektronik" },
//   { id: 8, name: "Ürün 8", price: 3.99, category: "Giyim" },
//   { id: 9, name: "Ürün 9", price: 8.49, category: "Mutfak" },
//   { id: 10, name: "Ürün 10", price: 11.99, category: "Elektronik" },
//   { id: 11, name: "Ürün 11", price: 14.99, category: "Giyim" },
//   { id: 12, name: "Ürün 12", price: 17.99, category: "Mutfak" },
//   { id: 13, name: "Ürün 13", price: 6.99, category: "Elektronik" },
//   { id: 14, name: "Ürün 14", price: 13.49, category: "Giyim" },
// ];

// for (let i = 0; i < products.length; i++) {
//    if (products[i].category=="Giyim") {
//    console.log(products[i]);
//    }
// }

// for (const abc of products) {
//     if (abc.category=="Giyim") {
//       console.log("salam Firat")
//     }
//     // console.log(abc.category.toUpperCase());
// }

//  for (let i = 0; i < products.length; i++) {
//     if (products[i].category=="Elektronik") {
//         console.log(products[i].category.toUpperCase())
//     }
//  }

// 1. a və b ədədimiz var. Əgər a b-dən böyükdürsə,
//  consolda "a b-den boyukdur" yazılsın, bərabərdirsə
//  "beraber", digər halda isə "a b den kicikdir";

// let a=5;
// let b=10;
// if (a>b) {
//     console.log(" a bden boyukdur");
// }
// // if (a==b) {
// //     console.log("a bye beraberdir");
// // }
// // else{
// //     console.log(" a bden kicikdir");
// // }

// let students = [
//   { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

//   { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

//   { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

//   { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

//   { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

//   { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

//   { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

//   { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

//   { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 },
// ];

// 2. students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// let yeniArray=[];
// for (let i = 1; i < students.length; i++) {
//     if (i%2==0) {
//        yeniArray.push(students[i])
//     }
// }
// console.log(yeniArray);

// let yeniArray=[];
// for (let i = 2; i < students.length; i+=2) {
//     yeniArray.push(students[i])
// }
// console.log(yeniArray);

// 3.  students arrayində id-i tək olan tələbələrin adlarını consolda yazdırın.
// for (let i = 0; i < students.length; i++) {
//     if (students[i].id%2===1) {
//         console.log(students[i].name);
//     }
// }

// for (const x of students) {
//     if (x.id%2==1) {
//         console.log(x.name);
//     }
// }

// 4. students arrayinda yaşı 20+ olan tələbələri
// yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].age>20) {

//     }
// }

// let newArray=[];
// for (const telebe of students) {
//     if (telebe.age>20) {
//         newArray.push(telebe);
//     }
// }
// console.log(newArray);

// 5. students arrayinda id-i cüt və grade-i 90+ olan
// tələbələri  yeni arrayə əlavə edib, yeni yaranmış
// arrayi consolda yazdırın;

// for (let i = 0; i < students.length; i++) {
//     if (students[i].id%2==0 &&  students[i].grade>90) {
//         console.log(students[i]);
//     }
// }

// 6.  students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// const yeniArray=[];
// for (const element of students) {
//     if (element.grade==100 || element.grade==95) {
//         yeniArray.push(element)
//     }
// }
// console.log(yeniArray);
// const newArray=[];
// for (let i = 0; i < students.length; i++) {
//     if(students[i].grade==100 || students[i].grade==95){
//         newArray.push(students[i])
//     }
// }
// console.log(newArray)

// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.
// let a=5;
// let b=8;
// let c=3;
// let discriminant;
// discriminant = b * b - 4 * a * c;
// let root1;
// let root2;
// if (discriminant > 0) {
//   root1 = (-b - Math.sqrt(discriminant)) / (2 * a);
//   root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   console.log(root1,root2);
// }
//  else if (discriminant == 0) {
//   root1 =-b/2*a;
//   console.log(root1);
// }
// else {
//   console.log("heqiqi koku yoxdur");
// }

// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
// let a;

// 5. Bu massivin minimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1];
// // let min = arr[0];
// // for (let i = 0; i < arr.length; i++) {
// //   if (min > arr[i]) {
// //     min = arr[i];
// //   }
// // }
// let index=arr.indexOf(1);
// console.log(index);
// let sentence="Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın";
// console.log(sentence.split(" "));

// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// let sentence="            Mən Code Academydə Programing tədrisi alıram            " ;
// let trimmedSentence=sentence.trim();
// let words=trimmedSentence.split(" ");
// let pureSentence=words.join("");
// console.log(pureSentence.length);

// 1 den 100ecen a ya qaliqsiz bolunen butun ededleri consolda
//  chap eletdiren funksiya



// students = [
//     {id:1, name: "Fuad", surname: "Ismayilov", age: 20, group: "SWP102" },
//     {id:172, name: "Nicat", surname: "Babayev", age: 19, group: "SWP202" },
//     {id:1233, name: "Sevane", surname: "Muradova", age: 18, group: "SWP102" },
//     {id:8927, name: "Leyla", surname: "Kerimova", age: 20, group: "SWP202" },
//     {id:3, name: "Jale", surname: "Memmedova", age: 20, group: "SWP202" },
//   ];
// //   adinin uzunlugu 5e boyuk beraber olan 
// //   ve qrupu swp202
// //   olan telebelerin oldugu arraye
// //    ilk elementi
// //    olaraq "Adiniz"i add eden funksiya
// function myFunction(age,groupName){
// let myArr=students.filter(item=>item.name.length>=age && item.group==groupName);
//  myArr.unshift("Fidan")
//  console.log(myArr);
// }
// myFunction(5,"SWP202")







// index htmlda button,p ve input var
// inputun ichinde daxil olan eded 10dan
// boyukdurse, ekranda "Eded 10dan boyukdur"
// yazan ve 10dan kicikdirse, inputda 
// yazilan ededi yazdiran bir funksiya yazin

const btn=document.getElementById('btn')
const text=document.getElementById('text')
const inp=document.getElementById('myInput')

var number=1;
btn.addEventListener('click',function(){
  text.innerText=number++;
})











// btn.addEventListener('click',function(){
//   if (inp.value>10) {
//     text.innerText="Eded 10dan boyukdur"
//   }
//   else{
//     text.innerText=inp.value
//   }
// })
