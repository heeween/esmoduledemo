function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    console.log(`${((degrees * 9 / 5) + 32)}`+'F')
  }
  else {
    console.log((degrees - 32) * 5 / 9)
  }
}
convertTemperature(25, 'C')
convertTemperature(86, 'F')