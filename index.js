// Your code here
function saturdayFun(firstParam = "roller-skate"){
    return `This Saturday, I want to ${firstParam}!`
}

function mondayWork(firstParam="go to the office"){
    return `This Monday, I will ${firstParam}.`
}

function wrapAdjective(style="*"){
    return function(secondFnParam = "special"){
      return  `You are ${style}${secondFnParam}${style}!`
    }
}

const Calculator = {
     add: function(firstNum,secondNum){
            return firstNum + secondNum
        },
    subtract: function(firstNum,secondNum){
            return firstNum - secondNum
        },
    multiply: function(firstNum,secondNum){
            return firstNum * secondNum
    },
    divide: function(firstNum,secondNum){
            return firstNum / secondNum
    },
    
    
}
function actionApplyer(start,ray){

    for (let i=0; i < ray.length; i++ ) {
     start = ray[i](start )
}
return start 
}