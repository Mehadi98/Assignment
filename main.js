
let user_choice = document.querySelector('.user_choice_box');
let user_submit = document.querySelector('.submit')
let main_page = document.querySelector('.main_page')

user_submit.addEventListener('click',()=>{
    
    if ((user_choice.value =='1') ||( user_choice.value.toLowerCase() =='one' )) {
        cgpa_calculator()
    }
    else if ((user_choice.value =='2') ||( user_choice.value.toLowerCase() =='two')){
        loveCalculator()
        
    }
    else if ((user_choice.value =='3') ||( user_choice.value.toLowerCase() =='three')){
        age_calculator()
    }
    else if ((user_choice.value =='4') ||( user_choice.value.toLowerCase() =='four')){
        calculator()
    }
    else if ((user_choice.value =='5') ||( user_choice.value.toLowerCase() =='five')){
        bmICalculator()
    }else{
        alert(`Please Enter 1 to 5 any Number ....`)
    }




})


// cgpa calculator 


const cgpa_calculator = ()=>{
    let cgpa_calculator = document.querySelector('.cgpa_calculator')
    cgpa_calculator.style.display = 'block'
    main_page.style.display = 'none'
    cgpa_exit = document.querySelector('#cgpa_exit')

    cgpa_exit.addEventListener('click',()=>{
        cgpa_calculator.style.display = 'none'
        main_page.style.display = 'block'
        user_choice.value =''
    })

    let cgpa_btn = document.querySelector('#cgpa_btn_cal')

    let semester1 = document.querySelector('.s1')
    let semester2 = document.querySelector('.s2')
    let semester3 = document.querySelector('.s3')
    let semester4 = document.querySelector('.s4')
    let semester5 = document.querySelector('.s5')
    let semester6 = document.querySelector('.s6')
    let semester7 = document.querySelector('.s7')
    let semester8 = document.querySelector('.s8')


    cgpa_btn.addEventListener('click', ()=>{
        let st1 =  ((semester1.value*5)/100).toPrecision(3)
        let st2 =  ((semester2.value*5)/100).toPrecision(3)
        let st3 =  ((semester3.value*5)/100).toPrecision(3)
        let st4 =  ((semester4.value*10)/100).toPrecision(3)
        let st5 =  ((semester5.value*15)/100).toPrecision(3)
        let st6 =  ((semester6.value*20)/100).toPrecision(3)
        let st7 =  ((semester7.value*25)/100).toPrecision(3)
        let st8 =  ((semester8.value*15)/100).toPrecision(3)


        let total = parseFloat(st1)+parseFloat(st2)+parseFloat(st3)+parseFloat(st4)+parseFloat(st5)+parseFloat(st6)+parseFloat(st7)+parseFloat(st8)
        let display = document.querySelector('.display_cgpa')
        
        display.innerHTML = `Your Result is ${total.toPrecision(3)}`
        
    })


}


const calculator = ()=>{
    main_page.style.display = 'none'
    let cal_show = document.querySelector('.calculator_wrap')
    cal_show.style.display = 'block'

    let cal_exit = document.querySelector('#exit_cal')
    cal_exit.addEventListener('click',()=>{
        cal_show.style.display = 'none'
        main_page.style.display = 'block'
        user_choice.value =''
    })

    const n1 = document.querySelector('.n1')
    const n2 = document.querySelector('.n2')
    const n3 = document.querySelector('.n3')
    const n4 = document.querySelector('.n4')
    const n5 = document.querySelector('.n5')
    const n6 = document.querySelector('.n6')
    const n7 = document.querySelector('.n7')
    const n8 = document.querySelector('.n8')
    const n9 = document.querySelector('.n9')
    const n0 = document.querySelector('.n0')
    const plus = document.querySelector('.plus')
    const minus = document.querySelector('.minus')
    const mul = document.querySelector('.mul')
    const div = document.querySelector('.div')
    const result = document.querySelector('.result')
    const display = document.querySelector('#display')
    const clear = document.querySelector('.clear')
    
    
    clear.addEventListener('click', () =>{
        display.innerHTML = ""
    })

    n1.addEventListener('click', () =>{
        display.innerHTML +=  n1.innerHTML 
    })
    n2.addEventListener('click', () =>{
        display.innerHTML += n2.innerHTML  
    })
    n3.addEventListener('click', () =>{
        display.innerHTML +=  n3.innerHTML 
    })
    n4.addEventListener('click', () =>{
        display.innerHTML += n4.innerHTML 
    })
    n5.addEventListener('click', () =>{
        display.innerHTML += n5.innerHTML 
    })
    n6.addEventListener('click', () =>{
        display.innerHTML += n6.innerHTML 
    })
    n7.addEventListener('click', () =>{
        display.innerHTML += n7.innerHTML 
    })
    n8.addEventListener('click', () =>{
        display.innerHTML += n8.innerHTML 
    })
    n9.addEventListener('click', () =>{
        display.innerHTML += n9.innerHTML 
    })
    n0.addEventListener('click', () =>{
        display.innerHTML += n0.innerHTML 
    })
    plus.addEventListener('click', () =>{
        display.innerHTML += plus.innerHTML 
    })
    minus.addEventListener('click', () =>{
        display.innerHTML += minus.innerHTML 
    })
    mul.addEventListener('click', () =>{
        display.innerHTML += mul.innerHTML 
    })
    div.addEventListener('click', () =>{
        display.innerHTML += div.innerHTML 
    })

    

    result.addEventListener('click', () =>{
        if(display.innerHTML==""){
            alert("Please Enter a Number")

        }else{
            display.innerHTML =  eval(display.innerHTML)}
        
    })


}


const age_calculator = ()=>{

    main_page.style.display = 'none'
    let age_cal_show = document.querySelector('.container')
    age_cal_show.style.display = 'block'

    let cal_exit = document.querySelector('.exit_age')
    cal_exit.addEventListener('click',()=>{
        age_cal_show.style.display = 'none'
        main_page.style.display = 'block'
        user_choice.value =''
    })
    let age_cal = document.querySelector('#age_calculate')
    age_cal.addEventListener('click',()=>{
        ageCalculate()
    })

    const months = [31,28,31,30,31,30,31,31,30,31,30,31];

        function ageCalculate(){
            let today = new Date();
            let inputDate = new Date(document.getElementById("date-input").value);
            let birthMonth,birthDate,birthYear;
            let birthDetails = {
                date:inputDate.getDate(),
                month:inputDate.getMonth()+1,
                year:inputDate.getFullYear()
            }
            let currentYear = today.getFullYear();
            let currentMonth = today.getMonth()+1;
            let currentDate = today.getDate();
        
            leapChecker(currentYear);
        
            if(
                birthDetails.year > currentYear ||
                ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
                (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
            ){
                alert("Not Born Yet");
                displayResult("-","-","-");
                return;
            }
        
            birthYear = currentYear - birthDetails.year;
        
            if(currentMonth >= birthDetails.month){
                birthMonth = currentMonth - birthDetails.month;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - birthDetails.month;
            }
        
            if(currentDate >= birthDetails.date){
                birthDate = currentDate - birthDetails.date;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - birthDetails.date;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
        }
        
        function displayResult(bDate,bMonth,bYear){
            document.getElementById("years").textContent = bYear;
            document.getElementById("months").textContent = bMonth;
            document.getElementById("days").textContent = bDate;
        }
        
        function leapChecker(year){
            if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
                months[1] = 29;
            }
            else{
                months[1] = 28;
            }
        }
}

const loveCalculator = ()=>{

    main_page.style.display = 'none'
    let love = document.querySelector('.love')
    love.style.display = 'flex'

    let love_exit = document.querySelector('#loveExit')
    love_exit.addEventListener('click',()=>{
        love.style.display = 'none'
        main_page.style.display = 'block'
        user_choice.value =''
    })

    let name1 = document.querySelector('.name1')
    let name2 = document.querySelector('.name2')
    let loveCal = document.querySelector('#loveCal')
    let love_value = document.querySelector('.love_value')

    loveCal.addEventListener('click',()=>{
        name1_value = name1.value
        name2_value = name2.value

        if (((name1_value.toLowerCase()) ==='mehadi') && (name2_value.toLowerCase()==='tanjina')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='tanjina') && (name2_value.toLowerCase()==='mehadi')){
           love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='tasmiah') && (name2_value.toLowerCase()==='mehadi')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='mehadi') && (name2_value.toLowerCase()==='tasmiah')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='mehadi') && (name2_value.toLowerCase()==='tonni')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='tonni') && (name2_value.toLowerCase()==='mehadi')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='mehadi') && (name2_value.toLowerCase()==='shimla')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='shimla') && (name2_value.toLowerCase()==='mehadi')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='wadud') && (name2_value.toLowerCase()==='mehadi')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='mehadi') && (name2_value.toLowerCase()==='wadud')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='abdul wadud') && (name2_value.toLowerCase()==='mehadi')){
           love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if (((name1_value.toLowerCase()) ==='mehadi') && (name2_value.toLowerCase()==='abdul wadud')){
            love_value.innerHTML = `${Math.floor(Math.random() * (100 - 90 + 1) + 90)}% Love`
        }else if ((name1_value ==='') || (name2_value ==='')){
            alert('Please enter a name !!')

        }else{
            love_value.innerHTML = `${Math.floor(Math.random()*100 +1 )}% Love`
        }
        



    })



}


const bmICalculator = ()=>{
    main_page.style.display = 'none'
    let bmiShow = document.querySelector('#bmi')
    bmiShow.style.display = 'block'

    let bmiExit = document.querySelector('#bmiExit')
    bmiExit.addEventListener('click',()=>{
        bmiShow.style.display = 'none'
        main_page.style.display = 'block'
        user_choice.value =''
    })
    let bmiWeight = document.querySelector('#bmiWeight')
    let bmiHeight = document.querySelector('#bmiHeight')
    let bmiDisplay = document.querySelector('#bmiDisplay')
    let bmiSubmit = document.querySelector('#bmiSubmit')
    let bmiReset = document.querySelector('#bmiReset')

    bmiSubmit.addEventListener('click',()=>{
        bmiHeightValue = bmiHeight.value 
        bmiHeightInch = bmiHeightValue * 12
        bmiHeightMeter = bmiHeightInch * 0.025

        bmiWeightValue = bmiWeight.value

        let bmiValue = bmiWeightValue / (bmiHeightMeter * bmiHeightMeter)
        bmiValue = Math.round(bmiValue)
        bmiDisplay.value = bmiValue
    })
    bmiReset.addEventListener('click',()=>{
        bmiWeight.value =''
        bmiHeight.value =''
        bmiDisplay.value = ''
    })


}





        


