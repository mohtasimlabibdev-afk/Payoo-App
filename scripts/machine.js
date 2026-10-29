// machine -> balance 
function getBalance(){
      const balanceElement = document.getElementById("balance");
      const balance = balanceElement.innerText;
      console.log("Current Balance ", Number(balance));
      return Number(balance);
}

// machine -> set Balance
function setBalance(value) {
      const balanceElement = document.getElementById("balance");
      balanceElement.innerText = value;
}


// Machine Id -> Hide All  -> Show ID
function showOnly(id) {
     const addMoney = document.getElementById("add-money");
     const cashOut = document.getElementById("cashout");
//      console.log(`add money - ${addMoney} , Cashout - ${cashOut}`);

      // Hide everyone
      addMoney.classList.add("hidden");
      cashOut.classList.add("hidden");

      // Show only with the ID
      const selected = document.getElementById(id);
      selected.classList.remove("hidden");
      
}