// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const normalObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const vipObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/config.json`);
const restrictedObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/config.json`)

// Account type validation
var userType = process.argv[2];
if ((userType == 'RESTRICTED')) {
    object = restrictedObject
} else if (userType == 'VIP') {
    object = vipObject
} else {
    object = normalObject
};


const accountInfo = object.accountInfo();


if (accountInfo.numberOfFriends > 0 && (accountInfo.accountType == 'NORMAL'
    || accountInfo.accountType == 'VIP'
    || accountInfo.accountType == 'RESTRICTED')) {
    object.removeExistingFriend();
    console.log('NumberONLY added: ' + object.getAllFriends());
} else if (accountInfo.numberOfFriends == 0 && (accountInfo.accountType == 'NORMAL'
    || accountInfo.accountType == 'VIP'
    || accountInfo.accountType == 'RESTRICTED')) {
    console.log('You have 0 friends in your account!')
};



