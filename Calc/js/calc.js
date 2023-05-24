const calculator = {
    display_value:'0',
    first_operand:null,
    wait_second_operand:false,
    operator:null,
}

function input_digit(digit){
    const {display_value, wait_second_operand} = calculator
    if (wait_second_operand === true){
        calculator.display_value=digit
        calculator.wait_second_operand=false
    }else{
        calculator.display_value = display_value === '0' ? digit : display_value + digit
    }
}

function input_decimal(dot){
    if(calculator.wait_second_operand===true) return
    if(!calculator.display_value.includes(dot)){
        calculator.display_value+=dot
    }
}

function handle_operator(next_op){
    const{first_operand, display_value, operator} = calculator
    const val_of_input = parseFloat(display_value)
    if(operator && calculator.wait_second_operand){
        calculator.operator = next_op
        return
    }
    if(first_operand == null){
        calculator.first_operand=val_of_input
    }else if(operator){
        const val_now = first_operand || 0
        let result = perform_calc[operator](val_now, val_of_input)
        result=Number(result).toFixed(9)
        result = (result*1).toString()
        calculator.display_value = parseFloat(result)
        calculator.first_operand = parseFloat(result)
    }
    calculator.wait_second_operand = true
    calculator.operator = next_op
}

const perform_calc = {
    '/':(first_operand, second_operand)=> first_operand/second_operand,
    '*':(first_operand, second_operand)=> first_operand*second_operand,
    '-':(first_operand, second_operand)=> first_operand-second_operand,
    '+':(first_operand, second_operand)=> first_operand+second_operand,
    '=':(first_operand, second_operand)=> second_operand,
}

function calculator_reset(){
    calculator.display_value='0'
    calculator.first_operand=null
    calculator.wait_second_operand = false
    calculator.operator = null
}
function update_display(){
    const display = document.querySelector('.calculator-screen')
    display.value = calculator.display_value
}
update_display()

const keys = document.querySelector('.calculator-keys')
keys.addEventListener('click', (event)=>{
    const {target} = event
    if(!target.matches('button')){
        return
    }
    if(target.classList.contains('operator')){
        handle_operator(target.value)
        update_display()
        return
    }
    if(target.classList.contains('decimal')){
        input_decimal(target.value)
        update_display()
        return
    }
    if(target.classList.contains('all-clear')){
        calculator_reset()
        update_display()
        return
    }
    input_digit(target.value)
    update_display()
})