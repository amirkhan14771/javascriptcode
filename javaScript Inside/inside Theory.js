// Question 1. What is JS Engine? Famous JS engines ke names btao.

// Ans 1. Javascript Engine ek computer program hota hai jo ki web browser mein run hota hai iska kaam basic readable Javascript code ko 
// Machine level code mein convert krna hota hai.
    
//        Famous JS engines :  Firefox ka Spider Monkey
//                             Google chrome ka V8 
//                             Internet Explorer ka Chakra 
//                             Safari ka Javascript-Core



 

// Question 2.Compiler vs Interpreter? Use, Js kya use krti hai?, kaam?

// Ans 2. Compiler : 

//        (a) Compiler source code ko ek baar mein pura check krta hai.
//        (b) Compiler run hone mein less time consume krt hai.
//        (c) Compiler full program run hone ke baad Error deta hai.


//       Interpreter :

//        (a) Interpreter source code ko line by line check krta hai.
//        (b) Interpreter run hone mein zyada time consume krt hai.
//        (c) Interpreter line by line run hota hai aur agr khi error aata hai to whi Error show kr deta hai.

    
//   Javascript Interpreted language hai aur vo Compiler and Interpreter dono ko support krti hai. ye depend krta hai Javascript engine pe 
//   kyuki diffrent browser diffrent js engine ko support krte hai jese Google chrome V8 engine compiler use krta hai aur modern browser 
//   JIT (Just in Time Compiler) ko use krte hai.





// Question 3.Call Stack and Execution Context explain in detail.

// Ans 3. (a) Call Stack : call stack ek aesi jgh hai jha Javascript engine apne function ko run krta hai aur hr function ka alg call stack
//            bnta hai jb function run ho jata hai to remove ho jata hai.

//        (b) Execution Context : Js Engine mein 2 Execution context hote hai Global and functional global sirf ek hi baar bnta hai aur usme
//            sara program run hota hai aur functional mein function run hote hai aur hr function ke liye diffrent execution context bnta hai.




// Question 4.What is this keyword?

// Ans 4. this keyword denote krta hai kisi bhi parent ko agr hum this keyword ko console mein directly print
//  krdenge to vo window object ko refer krega agr hum kisi object pe this ko print krege to vo object ke indentifier
//  ko refer krega same as function.





// Question 5.Different types ke scope ko explain kro? Lexical Scoping?

// Ans 5. There are three type of Scope : Global Scope, Functional Scope and Block Scope.

//         (a) Global Scope : Global scope ka access pure program ke code pe rhta hai.
//         (b) Functional Scope : Functional scope ka access sirf function ke andr jo code rhta hai uspe hota hai.
//         (c) Block Scope : Block scope ka access block scope ke code pe rhta hai like if else, loop etc aur iska
//             Var keyword ke sath thode exceptional case hote hai kyuki Var keyword Block scope ke bhar bhi work
//             krta hai.



// Question 6.Primitive and Non Primitive types me kya difference hota hai? Memory difference?

// Ans 6. (a) Primitive : Primitive data type mein hume direct value mil jati hai.

//        (b) Non Primitive : Non Primitive data type mein hume phle reference milta hai phir refrence se uski value milti hai.






// Question 7.Shallow Copy vs Deep copy?

// Ans 7. (a) Shallow Copy : Shallow copy mein primitive value change nhi hoti referance mei change ho jata hai.

//        (b) Deep copy : Deep copy mein kuch bhi change nhi hota.







// Question 8.What is arguments object in function?

// Ans 8. Argument Object simply hume ek method deta hai jisse hum Arguments ko reach kr skte hai unke index se.





// Question 9.Different types of memories? Stack, Queue, Heap

// Ans 9. There are three type of Memory : 

//       (a) Stack : stack ke andr LIFO kaam krta hai jo Last aata hai vo phle jata hai.

//       (a) Queue : Queue ke andr FIFO kaam krta hai jo phle aata hai whi phle jata hai.

//       (a) Heap: jitne bhi Object bnte hai Js mein vo sare ke sare Heap memory mein save hote hai aur vo uske address ke through refer hote hai.




