const passengers = (cap, on, wait) => {
    let totalPassengers = on + wait
    let difference = totalPassengers - cap
    if (totalPassengers > cap) {
        return difference}
        else {
            return 0}
}

console.log(passengers(100, 50, 51))