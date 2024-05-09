// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
//John
lastMonthPaidMoreThan4000 = 4001; //4001>4000
isWeekday = "Friday"; //Friday is in range (Mon-Fri)
hasBoughtProductFromITCategory = 0;
hasAttendedDiscountEvent = 1;
isPlatinum = "Gold";

let hasPromotion = Boolean(
  (lastMonthPaidMoreThan4000 > 4000 &&
    (isWeekday == "Monday" ||
      isWeekday == "Tuesday" ||
      isWeekday == "Wednesday" ||
      isWeekday == "Thursday" ||
      isWeekday == "Friday") &&
    hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
    isPlatinum == "Platinum"
);

console.log(hasPromotion);
