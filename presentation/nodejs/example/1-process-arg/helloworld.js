console.log('Aurora') // Aurora 
var planet = 'Earth'
console.log(`Hi from ${planet}`) // Hi from Earth

console.log(planet) // Earth
console.log(global.planet) // undefined, 
//because each file is treated as a module and var will be associated with that module
					