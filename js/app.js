"use strict";
let empForm = document.getElementById('empForm');
let empSec = document.getElementById('empSec');
//empSec.style.display="inline";


// let sec = document.getElementById("firstSection")


function Empinfo( EmployeeID, FirstName,LastName , Department , Level, Salary,imagePath ){
    this.EmployeeID =EmployeeID ;
    this.FirstName = FirstName; 
    this.LastName = LastName; 
    this.imagePath = `../assets/${this.FirstName}.PNG`;
    this.Department = Department;
    this.Level = Level;
   // this.Salary = salary;
}


function getSalary (max , min) {
    return Math.floor(Math.random() * (max - min) + min);
   
}

Empinfo.prototype.getSalary2 = function() {
    var salary;
    var netSalary;
    var tax;
    if (this.Level === "Senior") {
       // this.Salary = Math.floor(Math.random() * (max - min) + min);
 
       salary = getSalary(1500 , 2000 );
 
    } else if (this.Level === "Mid-Senior") {
        //this.Salary = Math.floor(Math.random() * (max2 - min2) + min2);
 
        salary = getSalary(1000 , 1500 );    
    } else if (this.Level === "Junior") {
        salary = getSalary(500 , 1000 );   
    }
     tax = salary * (7.5/100)
    netSalary =   salary - tax  ;
    this.Salary=netSalary;
    return salary;
 
 
     // let gitsalary = document.createElement('p');
     // div.appendChild(gitsalary);
     // gitsalary.textContent= this.salary;
 
 
    }
    




 

var getId = (function(num) {
    return function() {
      var str = String(num++);
      while (str.length < 4) str = "0" + str;
      return str;
    }
  })(1); 


Empinfo.prototype.render = function (){
    let div1 = document.createElement('div');
    let img = document.createElement('img');
    let div2 = document.createElement('div');
    let h5 = document.createElement('h5');
    // let p = document.createElement('p');
    
           div1.setAttribute("class","card")
           div1.style.width="250px";
           div1.style.height="250px";
           div1.style.padding = "10px";
          
         
           img.setAttribute("class","img")
          // div1.setAttribute
          div1.appendChild(img);
          h5.textContent=` Name: ${this.FirstName +" "+ this.LastName}   ID: ${this.EmployeeID}   Department: ${this.Department} 
                            Level: ${this.Level}
                            Salary: ${this.Salary}`;
                            h5.style.fontFamily="'Montserrat', sans-serif";
                            h5.style.color="#000000";

          div2.setAttribute("class","container");
          div2.appendChild(h5);
          div1.appendChild(div2);
          
         
    
          img.setAttribute('src',this.imagePath);
          img.setAttribute('alt', this.FirstName);
          img.style.width="250px"
          img.style.height="200px"
          
          
         empSec.appendChild(div1);
    
}

   function handelSubmit(event) {
    event.preventDefault();
    let fname = event.target.FirstName.value;
    let lname = event.target.LastName.value;


    let Depa = document.getElementById('Department').selectedIndex;
    let Depa2 = document.getElementById('Department').options;
    let selDep = Depa2[Depa].text;

    let Level = document.getElementById('Level').selectedIndex;
    let Level2 = document.getElementById('Level').options;
    let selLev = Level2[Level].text;

    let img = event.target.imgurl.value;
    
    //console.log(`${fname} ${lname}  ${selDep}  ${selLev}`);
    
    
    //let Form = new Empinfo(fname[0].toUpperCase()+fname.substring(1), lname, selDep, selLev);
    let Form = new Empinfo(getId() , fname[0].toUpperCase()+fname.substring(1),lname,selDep, selLev);
    let salary1 =Form.getSalary2();
    
    //salary1.getSalary2();
    Form.render();
}

empForm.addEventListener('submit', handelSubmit);
   

   
// const Emp1 = new Empinfo(1000 , "Ghazi Samer" , "Administration" , "Senior" , " ");
// const Emp2 = new Empinfo(1001 , "Lana Ali" , "Finance" , "Senior" , " ");
// const Emp3 = new Empinfo(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , " ");
// const Emp4 = new Empinfo(1003 , "Safi Walid" , "Administration" , "Mid-Senior" , " ");
// const Emp5 = new Empinfo(1004 , "Omar Zaid" , "Development" , "Senior", " ");
// const Emp6 = new Empinfo(1005 , "Rana Saleh" , "Development" , "Junior" , " ");
// const Emp7 = new Empinfo(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior", " ");


//  document.write("<br><br><br><br><br>")
//  document.write(`<p> ${Emp1.FullName} : ${Emp1.render()}</p>`);
//  document.write(`<p>${Emp2.FullName} : ${Emp2.render()}</p>`);
//  document.write(`<p>${Emp3.FullName} : ${Emp3.render()}</p>`);
//  document.write(`<p>${Emp4.FullName} : ${Emp4.render()}</p>`);
//  document.write(`<p>${Emp5.FullName} : ${Emp5.render()}</p>`);
//  document.write(`<p>${Emp6.FullName} : ${Emp6.render()}</p>`);
//  document.write(`<p>${Emp7.FullName} : ${Emp7.render()}</p>`);








//   let p = document.createElement('p');
//       p.textContent(``)
    
//     let salary;
//     let netSalary;
//     let tax;
//     if (this.Level === "Senior") {
//        // this.Salary = Math.floor(Math.random() * (max - min) + min);

//        salary = getSalary(1500 , 2000 );

//     } else if (this.Level === "Mid-Senior") {
//         //this.Salary = Math.floor(Math.random() * (max2 - min2) + min2);

//         salary = getSalary(1000 , 1500 );    
//     } else if (this.Level === "Junior") {
//         salary = getSalary(500 , 1000 );   
//     }
//      tax = salary * (7.5/100)
//     netSalary =   salary - tax  ;



//     return netSalary;
 // console.log(this.Salary);
