const form = document.querySelector("form");

const input_pass = document.querySelector(".grid_item_input5 > input");
let pass = ""
input_pass.addEventListener("input", () => {
  pass = input_pass.value;
})

const input_conf_pass = document.querySelector(".grid_item_input6 > input");
input_conf_pass.addEventListener("input", () => {
  if (input_conf_pass.value != pass){
    input_conf_pass.style.borderColor="red";
  }
  else{
    input_conf_pass.style.borderColor="black";
  }
})
