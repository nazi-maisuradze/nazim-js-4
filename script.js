//1 მოცემულია მასიცი: let array2 = [14, 150, 'css', null, 'javascript', 25];   შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array = [14, 150, 'css', null, 'javascript', 25];

let array2 = array.map (item => {
    if (typeof item=== 'number') {
        return item *item
    } else if (typeof item === "string") {
        return item.toUpperCase()
    }
    return item;
}) ;

console.log(array2)


//2  //მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.
let info= "good day"
let newInfo = info.split(" ").slice(1);
console.log(newInfo);


//3  დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

function arraylength (array){
    return array.length;
}
console.log(arraylength(array));


//4   prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let question = prompt("capital of Georia?");
let answer = "tbilisi";
let lowAnswer = question.toLowerCase();
if  (lowAnswer == answer ) {
    alert ("ok");
}
else {
    alert ("not ok");
}


//5    მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”. 

let fruits = ["apple", "“mango”", "“avocado”","”kiwi”"];
fruits.splice (-2, 1, "strawberry")
console.log(fruits);



//6    შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
//მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//დაბეჭდეთ მასივისი ახალი ელემენტები.

let array4 = [5, 25, 89, 120, 36];
array4.push ("javascript", "python");
array4.unshift("html", "css");
array4.shift();
array4.pop();
console.log(array4.length);



//7  შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;
//გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let array5 =["orange", "banana", "kiwi"];
console.log(array5.length);
array5.push("apple", "pineapple");
array5.unshift("watermelon");
console.log(array5.length);
array5.splice(2,0,"mango");
array5.shift();
array5.pop();
console.log(array5.length)


// 9    მოცემულია მასივი let array3 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array3 =[1, 2, 3, 4, 5]
array3.splice(3,0,"a","b","c");
console.log(array3);


//10  მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let  array6 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray6=array6.map(function(item) {
    return item/3;} );
 console.log(newArray6);

//   or 
let  array8 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray8 = array8.map ((item) => item/3);
console.log(newArray8);


//11მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
  //წაშალეთ ამ მასივიდან რიცხვი 10;

  let array7 =  [15, 100, 25, 10, 36];
  array7.splice(-2,1);
  //or 
  array7.splise(3,1);
  console.log(array7);


//12 მოცემულია მასივი:  let array8 = [1, 2, 3 , 4 , 5]
//მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

let array9 = [1, 2, 3 , 4 , 5];
array9.splice(2,1,"three");
console.log(array9);





