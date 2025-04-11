var select = document.querySelector('select');
var button = document.querySelector('.btn-one');
var employeesRnd = document.querySelector('.our--team__employees__rostov');
var employeesNsk = document.querySelector('.our--team__employees__novoshahtinsk');
var employeesDnk = document.querySelector('.our--team__employees__donetsk');
// document.addEventListener("DOMContentLoaded", function() {
//     select.addEventListener('change', function(){ 
//         if (select.selectedIndex === 0)
//             employees.classList.toggle('rostov--city')
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    select.addEventListener("change", function(){
        if (select.selectedIndex === 0) {
            employeesRnd.classList.add("hidden"),
            employeesNsk.classList.remove("hidden"),
            employeesDnk.classList.remove("hidden")
        }
        else if (select.selectedIndex === 1) {
            employeesRnd.classList.remove("hidden"),
            employeesNsk.classList.add("hidden"),
            employeesDnk.classList.remove("hidden")
        }
    })
    });


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("burger").addEventListener("click", function(){
//         document.querySelector("header").classList.toggle("open")
//     })
//     });

