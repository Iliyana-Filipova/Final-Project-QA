const testSuccessfull = ('Test Passed!');
const testFailed = ('Test Failed!');
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

   //validation logic START
   console.log("user type:" + userType + "");
   let numberHolder = stdout.match(/(\d+)/); //get number from string
   matchNumber = numberHolder[1] * 1; //convert variable to integer
   //---------------------------------
   if (userType == "NORMAL" && matchNumber < 51) {
      console.log(testSuccessfull)
   } else if (userType == "NORMAL") {
      console.log(testFailed)
   }
   //---------------------------------
   if (userType == "VIP" && matchNumber[1] != 2) {
      console.log(testSuccessfull)
   } else if (userType == "VIP") {
      console.log(testFailed)
   }

   //validation logic END 
   // command output 
};

let userType = "NORMAL"
childProcess.exec(`node ../addvideo.js ${userType}`, cmdHandler);

setTimeout(VipTimeout, 1000);
function VipTimeout() {
   userType = 'VIP';
   childProcess.exec(`node ../addvideo.js ${userType}`, cmdHandler);
};

setTimeout(RestrictedTimeout, 1500);
function RestrictedTimeout() {
   //     userType = 'RESTRICTED';
   //     childProcess.exec(`node ../addvideo.js ${userType}`, cmdHandler);
   console.log('user type: RESTRICTED');
   console.log(testFailed + ' not implemented');
};