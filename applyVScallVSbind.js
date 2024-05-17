let person = {
    fullName: function(){
      return this.fName+ " " + this.lName
    }
  }
  
  const person1 = {
    fName: "Madhukar",
    lName: "Gurram"
  }

  console.log(person.fullName.apply(person1)); // Madhukar Gurram


//   The call() method takes arguments separately. The apply() method takes arguments as an array. --------------

  person = {
    fullName: function(city, country){
      return this.fName+ " " + this.lName+ "," + city + " "+country
    }
  }

  console.log(person.fullName.apply(person1, ['Hyd', 'India']));//Madhukar Gurram,Hyd India
//   console.log(person.fullName.apply(person1, 'Hyd', 'India'));//This will throw an error, can not use parmas like this

  console.log(person.fullName.call(person1, 'Hyd', 'India'));//Madhukar Gurram,Hyd India

//    Slice vs Spice of array

// The main difference between slice() and splice() methods in JavaScript is that slice() creates a new array by copying elements from an existing array,
//  whereas splice() modifies the original array.
// Slice() is used to create a new array by copying elements from an existing array, whereas splice() is used to modify the original array by removing or replacing elements.


// bind Creates a new function with a specified this value, allowing you to call it later with that context.
//  ex: const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);