"use strict";


let empSec = document.getElementById('tableSec');
let table = document.getElementById('table');
let divT = document.getElementById('divTable');
let aCount = document.getElementById('adminCount');
let mCount = document.getElementById('marketingCount');
let dCount = document.getElementById('developCount');
let fCount = document.getElementById('financeCount');
let a = document.getElementById('a');
let m = document.getElementById('m');
let d = document.getElementById('d');
let f = document.getElementById('f');
let allEmplo = [];
let jsonArr = localStorage.getItem('allusers');
let arr = JSON.parse(jsonArr);
function checkLocalAndPush() {
    if (allEmplo.length == 0) {
        let arr = readFromLocalS();
        if (arr.length != 0) {
            allEmplo = arr;
        }
    }
  }
  function readFromLocalS() {
    let jsonArr = localStorage.getItem('allusers');
    let arr = JSON.parse(jsonArr);
    if (arr !== null) {
        return arr;
    } else {
        return [];
    }
  }
  let adminCount=0;
      let marketingCount=0;
      let developCount=0;
      let financCount=0;
      let totalOfA=0;
      let totalOfM=0;
      let totalOfD=0;
     let totalOfF=0;
  function render(arr){
     // divT.innerHTML=" ";
    //   let adminCount=0;
    //    let marketingCount=0;
    //    let developCount=0;
    //    let financCount=0;
   
      for (let j = 0; j < arr.length; j++) {
      
          if (arr[j].Department=="Administration"){
            
          adminCount++;
          totalOfA+=arr[j].Salary; }
          else if (arr[j].Department=="Marketing"){
          marketingCount++;
          totalOfM+=arr[j].Salary;
        }
          else if (arr[j].Department=="Development"){
          developCount++;
          totalOfD+=arr[j].Salary;}
          else if (arr[j].Department=="Finance") {
          financCount++; 
          totalOfF+=arr[j].Salary;
         }

          
      }
      
    aCount.textContent=adminCount;
    mCount.textContent=marketingCount;
    dCount.textContent=developCount;
    fCount.textContent=financCount;

    a.textContent=totalOfA/ adminCount;
    m.textContent=totalOfM/marketingCount;
    d.textContent=totalOfD/developCount;
    f.textContent=totalOfF/financCount;
    

  } 
  render(readFromLocalS());
 console.log(`${adminCount} ${developCount} ${financCount} ${marketingCount}`)
  
  console.log(readFromLocalS());








