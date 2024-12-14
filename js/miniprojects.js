//FIRST CONTAINER
 
let data = 0;
document.getElementById('root').innerText = data; //this must be present for the code to function properly
 decrement =()=> {
	
	if(data > 0 ){
		data -= 1;
		document.getElementById('root').innerText = data;
	}else{
		return;
	}
}

increment = () => {
	data += 1;
	document.getElementById('root').innerText = data;
}








//SECOND CONTAINER

const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

 if(h>=12){
     session = "PM";
 }



 h=(h < 10) ? "0" + h:h;
 m=(m < 10) ? "0" + m:m;
 s=(s < 10) ? "0" + s:s;

 let time = h + ":" + m + ":" + s + " " + session ;

 document.getElementById("myClock").innerText = time;
 document.getElementById("myClock").textContent = time;

 setTimeout(showTime, 1000);

};

showTime();



// THIRD CONTAINER


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



    // Example of instantiation
class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.currentOperandTextElement = currentOperandTextElement
		this.clear()

	}

	clear() { 
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
	}

	delete() {
       this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	appendNumber(number) {
		if(number ==='.' && this.currentOperand.includes('.')) 
		return
       this.currentOperand = this.currentOperand.toString() + number.toString()
	}

	chooseOperation(operation) {
		if(this.currentOperand === '') 
		return
		if(this.previousOperand !== '') {
			this.compute()
		}
       this.operation = operation
       this.previousOperand = this.currentOperand
       this.currentOperand = ''
	}

	compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) 
		return
        switch (this.operation) {
        	case '+':
        	    computation = prev + current
        	    break
        	case '-':
        	    computation = prev - current
        	    break
        	case '*':
        	    computation = prev * current
        	    break
        	case '%':
        	    computation = prev / current
        	    break
        	default :
        	    return;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString()
		const integerDigits = parseFloat(stringNumber.split('.')[0])
		const decimalDigits = stringNumber.split('.')[1]
		let integerDisplay
		if (isNaN(integerDigits)) {
			integerDisplay=''
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
		}
		if (decimalDigits !=null) {
			return `${integerDisplay}.${decimalDigits}`
		} else {
			return integerDisplay
		}
	}

	updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation !=null) {
        	this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
        	  this.previousOperandTextElement.innerText = ''
        }
	}
}




const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})

operationButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay()
	})
})

equalsButton.addEventListener('click', button => {
	calculator.compute()
	calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
	calculator.clear()
	calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
	calculator.delete()
	calculator.updateDisplay()
})



// JAVASCRIPT CODE FOR FLIPPING 

let card = document.getElementById("card");
function openLogin() {
    card.style.transform = "rotateX(0deg)";
}

function openRegister() {
    card.style.transform = "rotateX(-180deg)";
}



//Fourth container

let css=document.querySelector("h1");
let color1=document.querySelector("#color1");
let color2=document.querySelector("#color2");
let body=document.getElementById('gradient');
 
let styleBackground = () => {
	body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
	css.textContent=body.style.background + ";";
} 


color1.addEventListener('input', styleBackground);

color2.addEventListener('input', styleBackground);


//

//this declaration is for setting hidden password
let pswd = document.getElementById('pswd');
let toggleBtn = document.getElementById('toggleBtn');


//this declaration is for check 
let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');
 
//To show hidden passsword

toggleBtn.onclick = () => {
    if(pswd.type === 'password'){
        pswd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    }else {
        pswd.setAttribute('type', 'password');
         toggleBtn.classList.remove('hide');
    }
}

//check password logic 

let checkPassword = (data) => {
    //we use Javascript RegExpression pattern for this
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');
   
    //lower case validation check logic
if(lower.test(data)){
    lowerCase.classList.add('valid');
}else{
    lowerCase.classList.remove('valid');
}


    //upper case validation check logic
if(upper.test(data)){
    upperCase.classList.add('valid');
}else{
    upperCase.classList.remove('valid');
}


    //number case validation check logic
if(number.test(data)){
    digit.classList.add('valid');
}else{
    digit.classList.remove('valid');
}

    //special character  validation check logic
if(special.test(data)){
    specialChar.classList.add('valid');
}else{
    specialChar.classList.remove('valid');
}


    //minLength  validation check logic
if(length.test(data)){
    minLength.classList.add('valid');
}else{
    minLength.classList.remove('valid');
}
}