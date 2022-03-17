let inputNum = 0
let num = document.getElementById("convert-el")
let len = document.getElementById("lenRes")
let vol = document.getElementById("volRes")
let mass = document.getElementById("massRes")

function convert() {
    inputNum = document.getElementById("form-input").value
    num.textContent = inputNum // Number to be converted
}

function lenConv() { //length conversion
    feet = (inputNum * 3.2808398950131).toFixed(3)
    meter = (inputNum * 0.3048).toFixed(3)
    len.textContent = inputNum + "meters = " + feet + " feet | " + inputNum + " feet = " + meter + "meters" // Value of length paragraph 
}

function volConv() { //volume conversion
    gallon = (inputNum * 0.2641729).toFixed(3)
    liter = (inputNum * 3.7854).toFixed(3)
    vol.textContent = inputNum + "liters = " + gallon + " gallons | " + inputNum + " gallons = " + liter + "liters" // Value of length paragraph 
}

function massConv() { //mass conversion
    pound = (inputNum * 2.20462262).toFixed(3)
    kilo = (inputNum * 0.45359237).toFixed(3)
    mass.textContent = inputNum + "kilos = " + pound + " pounds | " + inputNum + " pound = " + kilo + "kilos" // Value of length paragraph 
}