const { ListItem } = require("@chakra-ui/react");

function calPayroll(){
    //read value 
  let regularHour = parseInt(document.getElementById("regularHour").value);
let extraHour = parseInt(document.getElementById("extraHour").value);
let hourlyWage = parseInt(document.getElementById("hourlyWage").value);;
let submit = "";

var total = (regularHour * hourlyWage) + extraHour * (hourlyWage + 10) 

document.getElementById("showTotal").innerText = "Total: $" + total;

var wageAfterTax = total * 0.75

document.getElementById("showTotalAfterTax").innerText = "Total after deducting tax 25%: $" + wageAfterTax;

}
