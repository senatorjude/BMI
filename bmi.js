
let calc_Btn = document.getElementById("calc")

window.addEventListener("load", () => {
    let int = "in this calculation we want you to know that muacles are not among what we calculate"
    setTimeout(function(){
        alert(int)
    },8000)
})

function calcBMI(){
    let weight = document.getElementById("weight")
let height = document.getElementById("height")
let result = document.getElementById("result")
let resSta = document.getElementById("result-statement")
resSta.innerHTML = "No statements to show"


    let BMI = weight.value/(height.value**2)
    result.innerHTML = BMI

    // working for our result statement 
    // if(weight.value == "" && height.value == ""){
    //     result.innerHTML = "0000000............"
    //     resSta.innerHTML = "No Statement to show"
    // }

    if(BMI < 18.5){
        resSta.innerHTML = "you fall withing underweight, you no dey eat food you won check your body weight.mumu"
    }else if(BMI >= 18.5 && BMI < 25){
        resSta.innerHTML = "You fall withing the healthy weight range"
    }else if(BMI >= 25 && BMI < 30){
        resSta.innerHTML = "You fall withing the over weight range"
    }else{
        resSta.innerHTML = "You fall within the obesity range"
    }

    if(weight.value == "" && height.value == ""){
        result.innerHTML = "0000000............"
        resSta.innerHTML = "No Statement to show"
    }


}

calcBMI()
calc_Btn.addEventListener("click", calcBMI)