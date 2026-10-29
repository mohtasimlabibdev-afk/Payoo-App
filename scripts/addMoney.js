
document.getElementById("add-money-btn").addEventListener("click", function(){
      //1- Get the Selected Bank
      const bankAccountInput = document.getElementById("add-money-bank");
      const bankAccount = bankAccountInput.value;

      if(bankAccount == "Select Bank"){
            alert("Please Select a Bank");
            return;
      }
      console.log("Selected Bank: ", bankAccount)
      // 2- get Bank Account number
      const bankAccountNumberInput = document.getElementById("add-money-number");
      const bankAccountNumber = bankAccountNumberInput.value;
      if(bankAccountNumber.length != 11){
            alert("Invalid Account Number");
            return;
      }
      console.log("Account Number: ", bankAccountNumber)
      // 3- Get the Amount
      const addAmountInput = document.getElementById("add-money-amount");
      const addAmount = addAmountInput.value;
      console.log("Added amount: ",addAmount);
      // New Balance
      const newBalance = getBalance() + Number(addAmount);
      const addMoneyPinInput = document.getElementById("add-money-pin");
      const addMoneyPin = addMoneyPinInput.value;
      if(addMoneyPin == "1234"){
            alert("Amount Added");
            setBalance(newBalance);
      }else{
            alert("Invalid Pin");
            return;
      }
      
      console.log("New Balance:", newBalance);
});