const { exec } = require('child_process');

exec('ls', (error, stdout) => {
  if (error) throw error;
  console.log(stdout);
});
