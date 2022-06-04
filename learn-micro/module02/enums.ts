enum PersonStatus {
  Freelance,
  Fulltime,
  Parttime
}

let person: PersonStatus = PersonStatus.Freelance;

console.log(person); // return the index of the freelance enum
console.log(PersonStatus[person]); // return the name of the person status, here is freelance

