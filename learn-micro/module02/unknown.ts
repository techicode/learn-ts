let unknowValue: unknown = 10;
unknowValue = true;
unknowValue = 'Mateo';

// console.log(unknowValue.name);  // Error: Object is of type unknown
// unknowValue();                  // Error: Object is of type unknown
// unknowValue.toUpperCase();      // Error: Object is of type unknown

// The unknown type is similar to the any type in that any value is assignable to type unknown. 
// However, you can't access any properties of an unknown type, nor can you call or construct them.