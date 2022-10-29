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
   let matchNumber = numberHolder[1] * 1; //convert variable to integer
   console.log(`Current number of friends: ` + matchNumber);
   //---------------------------------
   if (userType == "NORMAL" && matchNumber < 151) {
      console.log(testSuccessfull);
   } else if (userType == "NORMAL") {
      console.log(testFailed);
   }
   //---------------------------------
   if (userType == "VIP" && matchNumber == 2) {
      console.log(testSuccessfull);
   } else if (userType == "VIP") {
      console.log(testFailed);
   }
   //---------------------------------   
   if (userType == "RESTRICTED" && matchNumber < 51) {
      console.log(testSuccessfull);
   } else if (userType == "RESTRICTED") {
      console.log(testFailed);
   }
   //validation logic END 
   // command output 
};

let userType = "NORMAL"
childProcess.exec(`node ../addfriend.js ${userType}`, cmdHandler);

setTimeout(VipTimeout, 1000);
function VipTimeout() {
   userType = 'VIP';
   childProcess.exec(`node ../addfriend.js ${userType}`, cmdHandler);
};

setTimeout(RestrictedTimeout, 2500);
function RestrictedTimeout() {
   userType = 'RESTRICTED';
   childProcess.exec(`node ../addfriend.js ${userType}`, cmdHandler);
};
