document.getElementById("login-btn").addEventListener("click", function(){
      //1- get the mobile number
      const numberInput = document.getElementById("input-number");
      const contactNumber = numberInput.value;
      console.log(contactNumber);
      //2- get the pin
      const pinInput = document.getElementById("input-pin");
      const pinNumber = pinInput.value;
      console.log(pinNumber);
      //3- match the number and the pin
      if(contactNumber == "01712939687" && pinNumber == "1234"){
            //4.1 - If True -> alert -> Homepage
            alert("Success");
            window.location.assign("./home.html");
      }else{
            //4.2 - If false -> alert -> Return 
            alert("Incorrect. Try Again");
            return;
      }
})