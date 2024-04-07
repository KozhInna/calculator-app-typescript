let a: string | null = "";
let b: string | null = "";
let sign: string | null = "";
let result:number = 0;
let isResult:boolean = false;

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operators = ["+", "-", "x", "/"];

const clearButton = document.querySelector(".clear") as HTMLButtonElement;
const display = document.querySelector(".out") as HTMLDivElement;
const buttons = document.querySelectorAll(
  ".number"
) as NodeListOf<HTMLButtonElement>;
const equalButton = document.querySelector(".equal") as HTMLButtonElement;


function clearAll() {
  a = "";
  b = "";
  sign = "";
  display.textContent = "0";
  buttons.forEach((button) => { button.classList.remove("active")});
}

clearButton.addEventListener("click", clearAll);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent!;
   
    if (numbers.includes(value) && sign === "" && b === "") {
      if(a?.length === 11) return;
      if(isResult){
        a = "";
        isResult = false;
      }
      a += value;
      display.textContent = a;
    }
    if (operators.includes(value) && a !== "" && b === "") {
        sign = "";
        sign = value;
        display.textContent = a;
        buttons.forEach((button) => { button.classList.remove("active")});
        button.classList.add("active");
        return;
      } 
    if (numbers.includes(value) && a !== "" && sign !== "") {
      if(b?.length === 11) return;
        b += value;
        display.textContent = b;
      }
  });
});



equalButton.addEventListener("click", () => {
  if (a === "" || b === "" || sign === "") {
    return;
  }
  calcResult();
  sign = "";
  isResult = true;
  })
  
buttons.forEach((button) => {
  button.addEventListener("click", () => {
if(operators.includes(button.textContent!) && a !== "" && b !== "" && sign !== ""){

  calcResult();
  sign = button.textContent!;
  }})})


  function calcResult (){
    function setResult(result:number) { 
      if(result.toString().includes(".")){
      a = result.toFixed(2); }
      else{
        a = result.toString();
      }
      b="";
      display.textContent = a;
      buttons.forEach((button) => { button.classList.remove("active")});
    }
  switch (sign) {
    case "+":
      result = parseFloat(a!) + parseFloat(b!);
      setResult(result);
      break;
    case "-":
      result = parseFloat(a!) - parseFloat(b!);
      setResult(result);
      break;
    case "x":
      result = parseFloat(a!) * parseFloat(b!);
     setResult(result);
      break;
    case "/":
      result = parseFloat(a!) / parseFloat(b!);
     setResult(result);
      break;
    default:
      break;
  }}