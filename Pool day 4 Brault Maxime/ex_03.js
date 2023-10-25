function fillBus(peopleAtBusStops,busSeat){
    var i = 0
    var c = 0
    while(busSeat > c){
    c += peopleAtBusStops[i]
    i++
    }
    if(Array.isArray(peopleAtBusStops) == false){
    return -1
    }
    if(Number.isInteger(busSeat) == false){
    return -1
    }
    return i
    }
    console.log(fillBus([5,8,15,7,2],32))
    //Mopek