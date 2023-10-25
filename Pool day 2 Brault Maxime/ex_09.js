
displayThisText("the variable value is '" + input_var + "'")
if (typeof input_var === 'boolean' || typeof input_var === 'string') {
  displayThisText("Its type is '" + typeof input_var +"'");
  if(input_var == 42) {
displayThisText("It is the meaning of life")
}
} else {
  if(Number.isInteger(input_var)) {
  displayThisText("Its type is 'Integer'")
  }else{
  displayThisText("Its type is 'Float'")
  }
}