// http://api.weatherapi.com/v1/current.json?key=fa225f56011c49da8b3160533240808&q=kolkata&aqi=no //   
const temparatureField=document.querySelector(".temp");
const locationField=document.querySelector(".time-location p");
const dateandTimeField=document.querySelector(".time-location span");
const conditionField=document.querySelector(".condition p");
const searchField=document.querySelector(".search-area");
const form=document.querySelector("form");
form.addEventListener('submit', searchForLocation)




//let target='kakdwip'
const fetchResults= async(target)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=fa225f56011c49da8b3160533240808&q=${target}&aqi=no `
    const res=await fetch(url)
    const data=await res.json();
    console.log(data)
    let locationName=data.location.name;
   
    let time=data.location.localtime
   
    let temp=data.current.temp_c
    
    let condition=data.current.condition.text
    updateDetails(temp,locationName,time,condition)
}

function updateDetails(temp,locationName,time,condition){

let splitDate= time.split(' ')[0];
let splitTime= time.split(' ')[1];
let currentDay= getDayName(new Date(splitDate).getDay()) 

    temparatureField.innerText=temp;
    locationField.innerText=locationName;
    dateandTimeField.innerText=`${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText=condition;


}

function searchForLocation(e){
e.preventDefault();
target=searchField.value;
fetchResults(target)
}

function getDayName(number){
    switch(number){
        case 0:
        return 'sunday'
        case 1:
        return 'Monday'
        case 2:
        return 'Tuesday'
        case 3:
        return 'Wednesday'
        case 4:
        return 'Thursday'
        case 5:
        return 'Friday'
        case 6:
        return 'Saturday'
    }
}










































