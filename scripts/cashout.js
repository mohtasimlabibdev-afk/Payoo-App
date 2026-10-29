document.getElementById("cashout-btn").addEventListener("click", function(){
      //1- get the 11 digit agent number and validate
      const cashoutNumberInput = document.getElementById("cashout-number");
      const cashoutNumber = cashoutNumberInput.value;
      console.log(cashoutNumber);
      if(cashoutNumber.length !=11){
            alert("Invalid Agent Number");
            return;
      }
      //2- get the ammount , validate, convert the number
      const cashoutAmountInput = document.getElementById("cashout-amount");
      const cashoutAmount = cashoutAmountInput.value;
      console.log(cashoutAmount);
      
      const currentBalance = getBalance();

      //4- calculate new Balance
      const newBalance = currentBalance - Number(cashoutAmount);
      if (newBalance < 0){
              alert("you Dont have that money dude");
              return;
      }
      //5- Get the pin and verify
      const cashoutPinInput = document.getElementById("cashout-pin");
      const cashoutPin = cashoutPinInput.value;
      if(cashoutPin === "1234"){
            //5.1-  if true:: show an alert > set balance
            alert("Withdraw succesfull");
            console.log("New Balance is: ", newBalance);
            setBalance(newBalance);
        }else{
            //5.2- if false:: show an error alert > return  
            alert("invalid pin");
            return;
      }
})