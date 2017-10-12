let myNum: number = 5;
let myString: String = "Hello Universe";
let myArr:number[] = [1, 2, 3, 4];
var myObj: any = { name: 'Bill' }; 
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
let arrayOne: boolean[] =[true, false, true, true]; 
let arrayTwo: Array<any> = [1, 'abc', true, 2]
var myObj: any= { x: 5, y: 10 }; 
// object constructor
const MyNode = (function (){
    function MyNode(val: number){
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() :void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never{
    throw new Error('Error message');
}
