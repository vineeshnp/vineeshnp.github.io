const  exec  = require("child_process").exec;

exec('ls'); // exicutes ls on terminal

exec('ls', (err, stdout, stderr) => {
	
	if(err){
	 throw err
	}

	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
})

