const additionBtn = document.querySelector("#addition");
const subtractionBtn = document.querySelector("#subtraction");
const multiplyBtn = document.querySelector("#multiply");
const dvideBtn = document.querySelector("#dvide");

const number1El = document.querySelector("#number1");
const number2El = document.querySelector("#number2");

const resultEl = document.querySelector("#result");

function calculate(operation){
    const numb1 = Number(number1El.value)
    const numb2 = Number(number2El.value);

    if(number1El.value =="" || number2El.value ==""){
        resultEl.textContent = "pleas enter a number"
    }
    else if(isNaN(numb1) || isNaN(numb2)){
        resultEl.textContent = "pleas enter a valied mumber";
    }
    else{
        let result;
        switch(operation){
            case "addition":
                result = numb1 + numb2;
                break;

            case "subtraction":
                result = numb1 - numb2;
                break;

            case "multiply":
                result = numb1 * numb2;
                break;

            case "dvide":
                result = numb1 / numb2;
                break;

                default:
                    result= "";
                    break;
        }
        resultEl.textContent = result;
    }
}

additionBtn.addEventListener("click", () => {
    calculate("addition");
});
subtractionBtn.addEventListener("click", () => {
    calculate("subtraction");
});
multiplyBtn.addEventListener("click", () => {
    calculate("multiply");
});
dvideBtn.addEventListener("click", () => {
    calculate("dvide");
});