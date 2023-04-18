let divEmployees = document.getElementById ("divEmployees");

class Person { 
    name = "";
    email = "";
    age = "";
    resume ="";
    id=0;

    static total = 0;
        constructor ( name, email, age, resume){
            this.name=name;
            this.email=email.toLowerCase ();
            this.age = (age<18)?18:age;
            this.resume=resume;
            Person.total ++;
            this.id = Person.total;

    } // constructor Person
    static printTotal (){
            console.log (Person.total);
    }// printTotal
    
        printinfo(){// Metodo
            divEmployees.insertAdjacentHTML("beforeend",
            `
            <div id="card_${this.id}" class="row row-cols-1 row-cols-md-3 g-4">
            <div class = "card-header">${this.name}</div>
            <div class="col">
            <div class = "card-body">
            <h5 class "card-title">${this.email}</div>
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>${this.resume}</p>
                </div>
                <p class="card-text"><strong>${this.age}</strong></p>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          `);
    } //printInfo

} // class Person

class Employee extends Person {
    department = "";
    salary = 0.0;
    constructor(name, email, age , resume, department, salary){
            super(name, email, age, resume);
            this.department = department;
            this.salary = salary;

    }// constructor 
    calculateSalary (){
        return ((this.salary*30)* 1.16).toFixed(2);

    }//calculateSalary

    printinfo(div) {
        super.printinfo(div);
        let cardBody = document.getElementById(`card_${this.id}`)
            .getElementsByClassName("card-body")[0];
        cardBody.insertAdjacentHTML("beforeend",
            `<p class="card-text">${this.department}</p>
            <p class="card-text"><strong>${this.calculateSalary()}</strong></p>`
        );
        console.log(this.department, this.salary, this.calculateSalary());
    }    //printinfo

}// class Empoloyee


let maritere = new Employee("maritere", "maritere@qgmail.com", 21, "Java Full Stack Developer", "IT", 1255.20);
let dora = new Employee("dora Garcia", "dora.garcia@gmail.com", 21,"FullStack Developer", "Development", 1115.25);
let john =  new Person("john Doe", "JDoe@gmail.com",17 , "Desconocido");
let jane = new Person("jane Doe", "Jane.Doe@gmail.com", 26, "Jane");
let vale = new Employee("valeria", "valeria.arquieta@gmail.com", 21, "FullStack Java Developer", "Development", 1205.12);

maritere.printinfo(divEmployees);
dora.printinfo(divEmployees);
vale.printinfo(divEmployees);

let employees = [];
employees.push(
    new Employee("maritere", "maritere@qgmail.com", 21, "Java Full Stack Developer", "IT", 1255.20),
    new Employee("dora Garcia", "dora.garcia@gmail.com", 21,"FullStack Developer", "Development", 1115.25),
    new Employee("valeria", "valeria.arquieta@gmail.com", 21, "FullStack Java Developer", "Development", 1205.12),
    new Person("jane Doe", "Jane.Doe@gmail.com", 26, "Jane"),

    );

employees.forEach ( e=> e.printinfo(divEmployees)
    );

console.log(Person.total);// este se pudo quitar pero nose

Math.random();

john.resume = "Ortra cosa";
john.name = "john Doe";
john.age = 40;
john.email = "jdoe@gmail.com";

john.printinfo (); 

Person.printTotal(); //5