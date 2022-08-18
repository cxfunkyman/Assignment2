var hours = document.getElementById("hours");

function calculate(){
  var rate = 0;
  var Job = document.querySelector('input[name="Job"]:checked').value;
  if(Job =='Accountant'){
      rate = 30;

  }else if(Job =='Project Manager'){
      rate = 50;

  }else if(Job =='Software Engineer'){
      rate = 35;
  }
  else if (Job =='Receptionist') {
    rate = 20;
  }
  document.getElementById("salary").setAttribute('value', '$' + ((hours.value)*rate) + '.00');
}
function reset() {
  document.getElementById("container1").reset();
}