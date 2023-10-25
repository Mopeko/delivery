    function addCar(CarList, car){
        var object = JSON.parse(CarList);
        object.cars.push(car);
        return object; 
    }
    var CarList= '{"cars": ["TOYOTA","PORSHE","RENAULT"]}'
    const allcar= addCar(CarList, "CITROEN")
    console.log(allcar)