var people= ['mac', 'sue', 'jill', 'joan', 'vizzini', 'rugan']

var output= 'I know '



for (var i=0; i <people.length; i++){


  if ( i === 5 ){
    output= output + '' + '& ' + people[i] + '.' ;

  }

  else{
    output= output + '' + people[i] + ', ' ;
  }
}
console.log(output)
