"use strict";



function Empinfo(EmployeeID , FullName , Department , Level, ImageURL, Salary ){
    this.EmployeeID =EmployeeID ;
    this.FullName = FullName; 
    //this.imagePath =`./images/${this.name}.PNG`;
    this.Department = Department;
    this.Level = Level;
    this.Salary = Salary;
}
function getSalary(min , max){
    return Math.floor(Math.random() * (max - min) + min);

}

Empinfo.prototype.render = function (){
    //  let max = 2000;
    //  let min = 1500;
    
    let salary;
    let netSalary;
    let tax;
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



    return netSalary;
    // console.log(this.Salary);

   }
   

//    const Emap1 = new Empinfo(12 , "Hamzeh ibrahim" , "Administration" , "Senior");
//    console.log(Emap1.render());

//    const Emap2 = new Empinfo(12 , "Ahmad ibrahim" , "Marketing" , "Junior");
//    console.log(Emap2.render());

//    const Emap3 = new Empinfo(12 , "Mohammad ibrahim" , "Development" , "Mid-Senior");
//    console.log(Emap3.render());

   
const Emp1 = new Empinfo(1000 , "Ghazi Samer" , "Administration" , "Senior" , " ");
const Emp2 = new Empinfo(1001 , "Lana Ali" , "Finance" , "Senior" , " ");
const Emp3 = new Empinfo(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , " ");
const Emp4 = new Empinfo(1003 , "Safi Walid" , "Administration" , "Mid-Senior" , " ");
const Emp5 = new Empinfo(1004 , "Omar Zaid" , "Development" , "Senior", " ");
const Emp6 = new Empinfo(1005 , "Rana Saleh" , "Development" , "Junior" , " ");
const Emp7 = new Empinfo(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior", " ");


 document.write("<br><br><br><br><br>")
 document.write(`<p> ${Emp1.FullName} : ${Emp1.render()}</p>`);
 document.write(`<p>${Emp2.FullName} : ${Emp2.render()}</p>`);
 document.write(`<p>${Emp3.FullName} : ${Emp3.render()}</p>`);
 document.write(`<p>${Emp4.FullName} : ${Emp4.render()}</p>`);
 document.write(`<p>${Emp5.FullName} : ${Emp5.render()}</p>`);
 document.write(`<p>${Emp6.FullName} : ${Emp6.render()}</p>`);
 document.write(`<p>${Emp7.FullName} : ${Emp7.render()}</p>`);







// Employee ID

// Full Name

// Department:

// Administration
// Tamara Ayoub
// Development
// Finance
// Level:

// Junior
// Mid-Senior
// Senior
// Image URL

// Salary