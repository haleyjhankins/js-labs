
function whoWins(first, second) {
  if (first == 'rock' && second =='scissors'){
    return 'first';
  }
  else if (first == 'scissors' && second =='rock'){
    return 'second';
  }

  if ( first== 'paper' && second == 'rock'){
    return 'first';
  }

  else if ( first == 'rock' && second =='paper'){
    return 'second';
  }

if (first =='scissors' && second == 'paper'){
  return 'first';
}

else if ( first == 'paper' && second =='scissors'){
  return 'second';
}

if (first == "paper" && second =='paper'){
  return 'tie';
}

if (first =='scissors' && second =='scissors'){
  return 'tie';
}

if (first =='rock' && second== 'rock'){
  return 'tie';
}

}
