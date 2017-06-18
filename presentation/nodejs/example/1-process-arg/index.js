function fetchArg(arg){
	var index = process.argv.indexOf(arg);
	return (index===-1)? null: process.argv[index+1]	
}

// check if --user object is present or not

if(fetchArg('--user')){
console.log(`User is ${fetchArg('--user')}`)
}else{
console.log(`No user arg found`)
}
