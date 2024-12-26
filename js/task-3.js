// function getElementWidth(content, padding, border) {

//     const contentWidth = parseFloat(content);
//     const paddingWidth = parseFloat(padding) * 2;
//     const borderWidth = parseFloat(border) * 2;
//     return contentWidth + paddingWidth + borderWidth;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

function checkForSpam(message) {
    message = message.toLowerCase();
    
    const hasSpam = message.includes("spam") || message.includes("sale");
    
    return hasSpam;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true