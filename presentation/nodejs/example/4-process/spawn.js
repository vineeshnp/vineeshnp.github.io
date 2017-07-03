const spawn = require('child_process').spawn; // loading spawn module from spawn
const ls = spawn('ls', ['-lh', '/usr']); // ls to list, -lh is parameter to ls and /usr is where its exicuted

ls.stdout.on('data', (data) => { //when ever spawn trigger an event stdout 
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => { //during error
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => { //finally
  console.log(`child process exited with code ${code}`);
});
