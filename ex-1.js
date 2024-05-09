let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here

const james = {
  age: 18,
  hasCriminal: false,
};

isOver18 = james.age > 18 ? true : false;
hasCriminalBlacklist = james.hasCriminal;
isAllow = isOver18 && hasCriminalBlacklist;

console.log(isAllow);
