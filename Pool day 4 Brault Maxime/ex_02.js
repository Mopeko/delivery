function findHousing(housingToFind, housingList) {
    let i = 0
    while (i < housingList.length) {
      if (housingToFind === housingList[i]) {
        return [i, housingList[i]]
      }
      i++
      //return null
    }
  
  }
  displayResult(findHousing("Hut", ["Hut", "Flat", "Igloo", "House"]))
  //Mopek