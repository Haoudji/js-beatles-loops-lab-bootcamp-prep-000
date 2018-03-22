function theBeatlesPlay(musicianArray, instrumentsArray){
  var emptyArray = []
  for(var i = 0; i < musicianArray.length; i++){
    emptyArray.push( musicianArray[i] + ' plays ' + instrumentsArray[i] )
  }
  return emptyArray
}
function johnLennonFacts(array){
  var n = 0;
  while(n < array.length){
    array[n] = array[n] + "!!! "
    n++
  }
  return array[n] 
}