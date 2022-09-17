const message = "Hello World"
const newMessage = message.padStart(15, "*").padEnd(20, "-")
console.log(newMessage);

//案例，隐藏省份证号
const cardNumber = "123123413241254321";
const lastFourCard = cardNumber.slice(-4);
const finalCard = lastFourCard.padStart(cardNumber.length, "*")
console.log(finalCard)