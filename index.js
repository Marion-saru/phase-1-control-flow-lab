let distance;
let city;
let tip;

function scuberGreetingForFeet(distance){
    if(distance <= 400){
      return `This one is on me!`
    }
    else if(distance > 400 && distance <= 2000){
      return `That will be twenty bucks.`
    }
    else if (distance > 2000 && distance <= 2500){
    return `I will gladly take your thirty bucks.`
   }
   else {
    return `No can do.`
   }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case `generous`:
      return `Thank you so much.`;
    case `not as generous`:
      return `Thank you.`;
    default:
      return `Bye.`;    
  }
}

distance = 1;
console.log(scuberGreetingForFeet(distance));

city = "NYC"
console.log(ternaryCheckCity(city));

tip = "generous"
console.log(switchOnCharmFromTip(tip));