

const deposit = ()=>{
    let amt = document.getElementById("depositAmt").value;
    let currentVal = Number( totalAmt );
    let newVal = Number(amt).toFixed(2);
    let newTotal = (Number(currentVal) + Number(newVal)).toFixed(2);
    let newBal = {
      date: new Date(),
      type: 'credit',
      amt : newVal,
      currBal :  newTotal
    }
    totalAmt = newBal.currBal;
    addLogs(newBal);
}

const withdraw = ()=>{
  let amt = document.getElementById("withdrawAmt").value;
  let currentVal = Number( totalAmt );
  let newVal = Number(amt).toFixed(2);

  if( newVal > currentVal) {
    alert("Insufficient Balance");
    return;
  }

  let newTotal = (Number(currentVal) - Number(newVal)).toFixed(2);
  let newBal = {
    date: new Date(),
    type: 'debit',
    amt : newVal,
    currBal :  newTotal
  }
  totalAmt = newBal.currBal;
  addLogs(newBal);
} 

const addLogs = (data)=>{
  let row = document.createElement("tr");
  for(let key in data){
    let td = document.createElement("td");
    td.innerHTML = data[key];
    row.appendChild(td);
  }
  document.getElementById("tBody").prepend(row);
  document.getElementById("bal").innerHTML = totalAmt;
} 

const updateBal = ()=>{
  let currentVal = Number( totalAmt );
  let percentVal = Number((currentVal * fourPercent).toFixed(2))
  let newTotal = Number(currentVal + percentVal).toFixed(2)
  let newBal = {
    date: new Date(),
    type: 'credit',
    amt : percentVal,
    currBal :  newTotal
  }
  totalAmt = newBal.currBal;
  addLogs(newBal);
}


//initializing

let totalAmt = 100;
let fourPercent = (4/100);
document.getElementById("bal").innerHTML = totalAmt;
let depositBtn =  document.getElementById("Deposit");
depositBtn.addEventListener("click", deposit )
let withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", withdraw)

//timer for 30 sec
setInterval(()=>{ 
  if(totalAmt >= 1) updateBal();
},30000);