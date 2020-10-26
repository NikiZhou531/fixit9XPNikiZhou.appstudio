
validate1.onshow=function(){
    alrtValid1.value = "Name is a required field, Email requires a valid email address, Age requires a number, and SSN needs a valid SSN"
}


btnValidate1.onclick=function(){
 $("#Validator1").jqxValidator("validate")
  
}




