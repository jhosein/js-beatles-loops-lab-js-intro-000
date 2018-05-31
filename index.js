function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var newArray = [];

  for (var i = 0; i < arrayMusicians.length; i++) {
    newArray[i] = arrayMusicians[i] + " plays " + arrayInstruments[i];
  }

  return newArray;
}
