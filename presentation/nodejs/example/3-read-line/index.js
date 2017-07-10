var readline = require('readline')
//readline is a wraper around stdout and stdin
//we are doing this because, input and output stream could be anything, even punch card :D
var rl = readline.createInterface(process.stdin, process.stdout)

var realPerson = {
	name: '',
	sayings : []
}
rl.question('What is your name ?', function(answer){
	realPerson.name = answer;
	
	rl.setPrompt(`What would ${realPerson.name} say ?`)
	rl.prompt(); //displays the above prompt
	
	//this fucntion will be triggered when a new line is entered
	rl.on('line', function(saying){
		realPerson.sayings.push(saying)
		if(saying.toLowerCase().trim() === 'exit'){
			rl.close();	
		}else{
				
			rl.setPrompt(`What else would ${realPerson.name} say? (Press 'exit' to quit)`)
			rl.prompt();
		}
	})


})

rl.on('close', function(){
	console.log('%s is saying %j', realPerson.name, realPerson.sayings)
	process.exit();
})
