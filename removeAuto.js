const childProcess = require('child_process'); // load child_process
const cmdHandler = (error, stdout, stderr) => {
   if (error) {
      console.log('error: ' + error.message); // node.js error
      return;
   }

   if (stderr) {
      console.log('stderr: ' + stderr); // command error
      return;
   }

   console.log('output: ' + stdout); // command output 
};

childProcess.exec('node removefriend.js NORMAL', cmdHandler);
childProcess.exec('node removephoto.js NORMAL', cmdHandler);
childProcess.exec('node removevideo.js NORMAL', cmdHandler);