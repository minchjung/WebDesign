const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  console.log(n1);
  console.log(operator);
  console.log(n2);
  n1 = Number(n1); 
  n2 = Number(n2); 

  if(operator === '+')  result = n1 + n2; 
  else if(operator === '-') result = n1 - n2; 
  else if(operator === '*') result = n1 * n2;
  else{
    if(n1 === 0 || n1 === 0.0) return 'INF';
    result = n1/n2;
  }
  return String(result);
}
function checkCalculatable(n1,op,n2){
  return n1 === '' || op === '' || n2 === '' ; 
}
let isFirstNumberOk = false;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
  
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if(isFirstNumberOk === false){
        firstOperend.textContent = buttonContent ;
      }
      else{
        secondOperend.textContent = buttonContent; 
      }
      
    }
    if (action === 'operator') {
      operator.textContent = buttonContent ; 
      isFirstNumberOk = true;
    }
    if (action === 'decimal') {
    }
    if (action === 'clear') {
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';

      isFirstNumberOk = false; 

    }
    if (action === 'calculate') {
      let answer = calculate( firstOperend.textContent, operator.textContent , secondOperend.textContent );
      calculatedResult.textContent = answer ; 
    }
  }
});

// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum ='', secondNum ='', operatorForAdvanced, previousKey, previousNum;
let decimalPressed = false; 
let boolOrder = [false,false,false,false];
let calculateStack = [];
buttons.addEventListener('click', function (event) {
  
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.
  
  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {

    if (action === 'decimal') {
      if( !decimalPressed ){
        decimalPressed = true; // decimal OFF
        if( !boolOrder[0] ){
          if( firstNum === '' ) firstNum = '0';

          firstNum += '.';  
          display.textContent = firstNum;
        }
        else if(boolOrder[2]){
          if( secondNum === '' ) secondNum = '0';

          secondNum += '.';  
          display.textContent = secondNum;
        }
      }
    }
    if (action === 'number') {
      if( !boolOrder[0] ){ // first case
        firstNum += buttonContent;  
        display.textContent = firstNum;

        boolOrder[1] = true; // operator ON for the first trial 
      }
      else if (boolOrder[2]){ // After the first 
        secondNum += buttonContent;
        display.textContent = secondNum ;

        boolOrder[1] = false; // operator OFF for the first trial
      }
    }
    if (action === 'operator'){
      if( boolOrder[1] && firstNum !=='' ){ // first case
        operatorForAdvanced = buttonContent ; 
        previousNum = firstNum ;
        
        boolOrder[0] = true // number  OFF for the first trial
        boolOrder[2] = true ; // number ON for the se `cond trial
        decimalPressed = false ; // decimal ON
      }
      else if(boolOrder[2] && secondNum !== ''){ // second case
        if( !boolOrder[3] ){
          secondNum = display.textContent;
          previousNum = calculate(previousNum, operatorForAdvanced, secondNum);

          display.textContent = previousNum ;
          secondNum = '';
          
          operatorForAdvanced = buttonContent ; 
          decimalPressed = false;
        }
      }
    }
    if (action === 'calculate') {
      if(secondNum !==''){
        previousNum = calculate(previousNum, operatorForAdvanced, secondNum);
        display.textContent = previousNum; 

        boolOrder[3] = true;
      }
      else{
        previousNum =calculate(previousNum, operatorForAdvanced, previousNum);
        display.textContent =previousNum ;
        
        boolOrder[3] = true;
      }
    }
    if (action === 'clear') {
      firstNum = ''; 
      secondNum = ''; 
      operatorForAdvanced = '';
      previousNum = undefined;

      for(let i = 0 ; i < boolOrder.length ; i++){
        boolOrder[i] = false; 
      }
      decimalPressed = false; 
      display.textContent = '0';
    }
    console.log(`firstNum = ${firstNum}`);
    console.log(`secondNum = ${secondNum}`);
    console.log(`previousNUm = ${previousNum}`);
    console.log(`op = ${operatorForAdvanced}`);
    console.log("");
  } //if button ON
});// eventListener
