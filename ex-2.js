// Exercise #2: Promotion Conditions
let johnLastMonthPay = 4001
let johnLastBuyDate = 'Friday'
let johnBoughtProductFromITCategory = false
let johnAttendedDiscountEventTime = 2
let johnMember = 'Gold'
// Start coding here
let lastMonthPaidMoreThan4000 = johnLastMonthPay > 4000;
let isWeekday = johnLastBuyDate == 'Friday'||johnLastBuyDate == 'Monday';
let hasBoughtProductFromITCategory = johnBoughtProductFromITCategory == true;
let hasAttendedDiscountEvent = johnAttendedDiscountEventTime == 0;
let isPlatinum = johnMember == 'Platinum';

let hasPromotion = lastMonthPaidMoreThan4000 && isWeekday && hasBoughtProductFromITCategory &&hasAttendedDiscountEvent && isPlatinum;

console.log(hasPromotion);
