let btn = document.querySelectorAll("button");
let screen = document.getElementById("screen");
let equalTo = document.getElementById("equalTo");
let clear = document.getElementById("clear");
let deleteBtn = document.getElementById("delete");
let percent = document.getElementById("percent");
 
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    let lastChar = screen.value.slice(-1);
    if (['+', '-', 'x', '/','%'].includes(lastChar) && ['+', '-', 'x', '/','%'].includes( btn[i].value)){
      return;
    }
    screen.value += btn[i].value;
  };
}
 
equalTo.onclick = () => {
 
  let string = screen.value;
  //replacing signs with appropriate so that eval function can work.
  string = string.replaceAll(/x/g, "*");
  string = string.replaceAll(/%/g, "/100");
  let result = eval(string);
  console.log(result);
  screen.value = result;
  screen.setAttribute("class", "screen");
 
  //     *ALTERNATE FORMULA*
  //    (
  //  // remove whitespaces from string
  //     string = string.replace(/\s+/g, '');
 
  //     //split string where theres a symbol to make array of strings
  //     // then map each element to be a number.
  //     let numbers = string.split('+').map(Number);
 
  //     // reduce the array to a single digit using a reducer sum function
  //     let result = numbers.reduce((total, num)=>{ return total + num }, 0)
  //     console.log(result)
  //    )
};
 
// clear button
clear.onclick = () => {
  screen.value = " ";
};
 
//delete button
deleteBtn.onclick = () => {
  let string = screen.value;
  string = string.split("");
  string.pop();
  string = string.join("");
  screen.value = string;
};