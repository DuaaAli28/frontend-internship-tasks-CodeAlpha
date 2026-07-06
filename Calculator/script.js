console.log("Script Loaded");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const operators = ["+", "-", "*", "/" ];
const defaultValues = ["Error","Infinity","-Infinity","undefined"];

 function handleInput(value){
  if (value === ".") {
  const lastNumber = display.value.split(/[\+\-\*\/]/).pop();

  if (lastNumber.includes(".")) {
    return;
  }

  if (display.value === "" || /[\+\-\*\/]$/.test(display.value)) {
    display.value += "0.";
    return;
  }

  display.value += ".";
  return;
}
  if (value === "=") {
      try{
      display.value = eval(display.value);}
      catch (error)
      {
        display.value ="Error";
      }
    } else if (value === "C") {
      display.value = "";
    }else if (value === "⌫") {
      display.value = display.value.slice(0,-1);
    } 
    else if ( display.value === "" && operators.includes(value)){
      return;
    }
   
     else  { 
      
        if (defaultValues.includes(display.value)){
          display.value = value;
        } else {
          const lastChar = display.value[display.value.length - 1];
          if (operators.includes(lastChar) && operators.includes(value))
          { return;}
          else{
      display.value += value;}}
    }

 }

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInput(button.textContent);
    })
  });


document.addEventListener("keydown", (event) => {
     if ((event.key >= "0" && event.key <= "9") || operators.includes(event.key) ||
  event.key === "."){
    handleInput(event.key);
     }
     else if (event.key === "Enter") {
    handleInput("=");
}
else if (event.key === "Backspace") {
    handleInput("⌫");
}
else if (event.key === "Escape") {
    handleInput("C");
}
});