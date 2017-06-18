process.stdout.write(" Hello World \n")
process.stdout.write(" Type something \n ")

process.stdin.on('data',function(data){
	process.stdout.write(`\n You typed : ${data.toString().trim()}` )

	process.exit();
})

process.on('exit',function(e){
	process.stdout.write("\n Exiting process \n")
})
