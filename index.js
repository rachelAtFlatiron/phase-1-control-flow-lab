function scuberGreetingForFeet(distance){
  
  //i would use an if/else if because we only want one of these results, and an if else/if structure implies that we only expect one of these test cases to work
  //2500 feet
  if(distance > 2500){
    return('No can do.')
  }
  //over 2000 feet
  else if (distance < 400){
    return ("This one is on me!")
  }
  //between 400 and 2000 feet
  else if (distance <= 2000 && distance >= 400){
    return ('That will be twenty bucks.')
  }
  //less than 400 feet
  else if (distance > 2000 && distance < 2500){
    return('I will gladly take your thirty bucks.')
  }
}

function ternaryCheckCity(location){
  
  // if(location === 'NYC'){
  //   return "Ok, sounds good."
  // } else {
  //   return "No go."
  // }

  // condition ? true result : false result
  // ternarys evaluate to a single value similarly to 2+2, such that we are going to return the entire ternary and not the individual strings
  return location === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(value){
  // if(value === 'generous'){
  //   return 'Thank you so much.'
  // } else if (value === 'not as generous') {
  //   return 'Thank you.'
  // } else {
  //   return 'Bye.'
  // }

  switch(value){
    case 'generous':
      //return exits the function so we will never reach the break
      return 'Thank you so much.'
      break 
    case 'not as generous':
      return 'Thank you.'
      break 
    default:
      return 'Bye.'
  }
}