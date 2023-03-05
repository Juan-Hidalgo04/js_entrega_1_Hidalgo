
// Haremos unos objetos con algunas de las capitales de latinoametica, con la distancia desde bogota. 
// Saldremmos del dorado, aeropuerto de Bogota


class country {
    constructor (id,country,destination,airport,hours,currency,flight,budget){
        this.id = id
        this.country = country
        this.destination = destination
        this.airport = airport
        this.hours = hours 
        this.currency = currency
        this.flight = flight
        this.hours = hours
        this.budget = budget
    }
}

const argentina = new country(1,'Argentina','Buenos Aires','Ministro Pistarini International Airport',7,' Argentine Pesos',500,23)
const brazil = new country(2,'Brazil','São Paulo', 'São Paulo-Guarulhos International Airport',5,'Brazilian Real',400,25)
const chile = new country(3,'Chile','Santiago de Chile','Santiago International Airport',6,'Chilean Pesos',440,45)
const mexico = new country(4,'Mexico','Cancun','Cancún International Airport',4,'Mexican pesos',300,48)
const dominicanRepublic = new country(5,'Dominican Republic','Punta Cana','Punta Cana International Airport',3,'Dominican Pesos',400,65)

const full_name = prompt('Hello, Welcome to our budget travel site. Please enter your name')
alert ('Thanks for contacting us, ' + full_name + '. Now, we will start with the process. Please keep in mind that the flight will depart from El Dorado - Bogota.')
let realDestination = parseInt(prompt('Please insert the desired number based on your destination. 1. Buenos Aires, Argentina -- 2. Sao Paulo, Brazil -- 3. Santiago de Chile, Chile -- 4. Cancun, Mexico -- 5. Punta Cana, Dominican Replublic'))

let desiredDestination = false

let infoDestination

while (desiredDestination === false) {
    if (realDestination === 1) {
        desiredDestination = true
        infoDestination = argentina
    }
    else if (realDestination === 2) {
        desiredDestination = true
        infoDestination = brazil
    }
    else if (realDestination === 3) {
        desiredDestination = true
        infoDestination = chile
    }
    else if (realDestination === 4) {
        desiredDestination = true
        infoDestination = mexico
    }
    else if (realDestination === 5) {
        desiredDestination = true
        infoDestination = dominicanRepublic
    } else {
        realDestination = parseInt(
        prompt (
            'Please insert a valid destination number based on the previous list: 1. Buenos Aires, Argentina -- 2. Sao Paulo, Brazil -- 3. Santiago de Chile, Chile -- 4. Cancun, Mexico -- 5. Punta Cana, Dominican Replublic'
        ))
    }
}


alert ('Perfect, You have selected ' + infoDestination.country + '. You will be traveling to ' + infoDestination.destination + '.')


const travelers = parseInt(prompt('Now, Please let us know how many people (Above 2 years old) will be traveling: '))
alert ('Perfect. There will be ' + travelers + ' of you traveling to ' + infoDestination.destination + ', ' + infoDestination.country +'.')

class Season {
    constructor (called,value){
        this.called = called
        this.value = value
    }
}

const lowSeason = new Season('Low Season', 1) 
const shoulderSeason = new Season('Shoulder Season', 1.5)
const highSeason = new Season('High Season', 2)


console.log ('Info destination',infoDestination, travelers)

let realSeason = parseInt(prompt('As you may know, the budget might change depending on the season of the year. Please insert the season you will be traveling to ' +  infoDestination.destination + ': 1. Low Season -- 2. Shoulder Season -- 3. High Season.'))

let desiredSeason = false

let infoSeason

while (desiredSeason === false) {
    if (realSeason === 1) {
        desiredSeason = true
        infoSeason = lowSeason
    }
    else if (realSeason === 2) {
        desiredSeason = true
        infoSeason = shoulderSeason
    }
    else if (realSeason === 3) {
        desiredSeason = true
        infoSeason = highSeason
    } else {
        realSeason = parseInt(
        prompt (
            'Please insert a valid season number based on the previous list: 1. Low Season -- 2. Shoulder Season -- 3. High Season.'
        ))
    }
}

const days = +prompt('Perfect. Now that we know that you will be traveling in ' + infoSeason.called + '. Please let us know how many days you will stay in ' + infoDestination.destination + ':')

console.log (days, infoSeason.called)

// Function multip
function budgetMulti(value,multi) {
    const bMulti = value * multi
    return bMulti
}


const finalFlight = budgetMulti(budgetMulti(infoDestination.flight,infoSeason.value),travelers)
const finalBudget = budgetMulti(budgetMulti(budgetMulti(infoDestination.budget,infoSeason.value),travelers),days)
const finalMoney = finalBudget + finalFlight

console.log (finalBudget, finalFlight, finalMoney)

alert(`Thank you for choosing us, ${full_name}. Next, you will find the final budget review.

To stay ${days} days on ${infoDestination.destination}, ${infoDestination.country} during ${infoSeason.called} for ${travelers} travelers, we recommend a budget of USD ${finalBudget} to cover accommodation, food, and transportation expenses. Also, we estimate that you may need USD ${finalFlight} approx for flight tickets. The total budget is USD ${finalMoney}.

Moreover, here is some information to have in mind for your trip to ${infoDestination.destination}, ${infoDestination.country}: The estimated time of flight is ${infoDestination.hours} hours, you will arrive to ${infoDestination.airport} and the local currency will be ${infoDestination.currency}.`)

