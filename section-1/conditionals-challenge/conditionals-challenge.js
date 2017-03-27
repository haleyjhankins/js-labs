function fullName(firstName, lastName, middleInitial) {

  if(middleInitial === undefined && lastName === undefined) {
    return firstName;
  }
  else if(middleInitial === undefined) {
    return firstName + ' '+ lastName;
  }
  else {
    return firstName + ' ' + middleInitial + ' ' + lastName;
  }


}


function returnSmaller(first, second) {
  if ( first < second ){
  return first;
  }
  else if(first > second){
  return second;
  }

  else if(first === second){
    return first;
  }

}








function tankDeterminer(animal, size) {
}
