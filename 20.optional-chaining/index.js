
var obj = {
    name: 'sachin',
    age: 40,
    address: { state: 'mumbai' }
}

// console.log(obj.address.state);
// console.log(obj.address1.state);

//->obj lo address vunte obj lo address lo state ni print chesthadi
// console.log(obj.address && obj.address.state);  //before optional chaining
console.log(obj.address1 && obj.address1.state);  //before optional chaining

// *** Optional chaining *** syntax ?.
console.log(obj.address?.state);  // optional chaining  //mumbai
console.log(obj.address1?.state);  // optional chaining   //undefined