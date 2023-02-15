function getTextElementValueById(elementId){
  const phoneTotalElement = document.getElementById(elementId);
const currentPhoneTotalString = phoneTotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString);
return currentPhoneTotal;


}

function setTextElementValueById(elementId,value){
  const subTotalElement = document.getElementById(elementId);
subTotalElement.innerText = value;

}

function calculateSubTotal(){
  const currentPhoneTotal = getTextElementValueById('phone-total');
const currentCaseTotal = getTextElementValueById('case-total');
const currentSubTotal = currentPhoneTotal + currentCaseTotal;
const subTotalElement = document.getElementById('sub-total');
subTotalElement.innerText = currentSubTotal;

setTextElementValueById('sub-total',currentSubTotal);

// calculate tax

const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount = parseFloat(taxAmountString);
setTextElementValueById('tax-amount',taxAmount);
const finalAmount = currentSubTotal + taxAmount;
setTextElementValueById('final-total',finalAmount);

}


































// function updateCaseNumber(isIncrease){
//     const caseNumberField = document.getElementById('case-number-field');
//   const caseNumberString = caseNumberField.value;
//   const previousCaseNumber = parseInt(caseNumberString);
//   let newCaseNumber;
//   if(isIncrease === true){
//     newCaseNumber = previousCaseNumber + 1;
//   }
//   else{
//     newCaseNumber = previousCaseNumber - 1;
//   }
//   caseNumberField.value =  newCaseNumber;
//   return newCaseNumber;
// }
// function updateCaseTotalPrice(newCaseNumber){
//   const caseTotalPrice = newCaseNumber * 59;
//   const cashTotalElement = document.getElementById('case-total');

//   cashTotalElement.innerText = caseTotalPrice;
// }

// document.getElementById('btn-case-plus').addEventListener('click',function(){
//    const newCaseNumber = updateCaseNumber(true);
//   updateCaseTotalPrice(newCaseNumber);
// })
// document.getElementById('btn-case-minus').addEventListener('click',function(){
//    const newCaseNumber = updateCaseNumber(false);
//    updateCaseTotalPrice(newCaseNumber);
//   })
