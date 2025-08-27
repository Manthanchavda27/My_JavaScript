const employee = [
    {id:1,name:'Manthan',age:19,department:'IT',salary:35000,specialization:'Javascript'},
    {id:2,name:'Ansh',age:19,department:'CE',salary:50000,specialization:'Resct'},
    {id:3,name:'vraj',age:19,department:'EC',salary:30000,specialization:"Microprocessor"}
];

const totalEmployees = employee.map((employee,i)=>`<p>${employee.name}-${employee.department}-${employee.salary}-${employee.specialization}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML=totalEmployees;

function calculateTotalSalary(){
    const totalSalary = employee.reduce((acc,employee)=>acc+employee.salary,0);
    alert(`Total salaries : $${totalSalary}`);
}

function displayITEmployees(){
      const ITempoyee = employee.filter(employee=>employee.department=='IT');
      const Itdisplay = ITempoyee.map((employee,i)=>`<p>${employee.id}-${employee.name}-${employee.department}-${employee.salary}</p>`).join('');
      document.getElementById('employeeDetails').innerHTML=Itdisplay;
}

function findEmployeeById(employeeId){
     const foundEmployee = employee.find(employee=>employee.id==employeeId);
     if(foundEmployee){
        document.getElementById('employeeDetails').innerHTML=`<p> ${foundEmployee.name}-${foundEmployee.department}-${foundEmployee.salary}-${foundEmployee.id}</p>`;
     }else{
        document.getElementById('employeeDetails').innerHTML="No employee has been found with this Id";
     }
}

function findEmployeeBeSpecialization(employeeSpecialization){
    const specializationemployee = employee.find(employee=>employee.specialization==employeeSpecialization);
    if(specializationemployee){
        document.getElementById('employeeDetails').innerHTML=`<p>${specializationemployee.name}-${specializationemployee.id}-${specializationemployee.department}-${specializationemployee.salary}-${specializationemployee.specialization}</p>`;
    }else{
        document.getElementById('employeeDetails').innerHTML="No employee has been found with this Specialization";
    } 
}