function onlyDigits(str) {
  for (var i =0; i <str.length; i++){
    if ('0123456789'.indexOf(str[i]) === -1){
      return false;
    }
  }
      return true;
    }


function formatPhoneNumber(str) {
  return '('
  + str.slice(0,3)
  + ') '
  +str.slice (3,6)
  +'_'
  +str.slice(6,10);

}

function formatCreditCardNumber(str) {
}

function missingInteger(str) {
}

function repeatChar(char, count) {
}

function delimitWord(str, char) {
}

function reverseWord(str) {
}

function reverseSentence(str) {
}

function kabobCase(str) {
}

function camelCase(str) {
}
