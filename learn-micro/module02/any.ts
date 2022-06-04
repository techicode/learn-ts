let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

// with randomValue being a boolean
console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error

