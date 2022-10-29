// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');
const normalObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const vipObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/vip/config.json`);
const restrictedObject = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/restricted/config.json`)


// Account type validation
let accountType = process.argv[2];
if ((accountType == 'NORMAL')) {
    object = normalObject
} else if (accountType == 'VIP') {
    object = vipObject
} else {
    object = restrictedObject
};

const accountInfo = object.accountInfo();

// ---

// IF NORMAL
if (accountInfo.numberOfFriends <= 149 && accountInfo.accountType == 'NORMAL') {
    object.addNewFriend();
    console.log(object.getAllFriends());
} else if (accountInfo.numberOfFriends >= 150 && accountInfo.accountType == 'NORMAL') {
    console.log(`You have reached the limit of the normal account!
    You have ${accountInfo.numberOfFriends} in your account!`)
};
// IF VIP
if (accountInfo.accountType == 'VIP') {
    let iCount;
    object.addNewFriend();
    object.addNewFriend()
    console.log(`2 new friends were added to your account and ` + object.getAllFriends());
};
// --- 
// IF RESTRICTED
if (accountInfo.accountType == 'RESTRICTED' && accountInfo.numberOfFriends <= 49) {
    object.addNewFriend();
    console.log('You now have : ' + object.getAllFriends());
} else if (accountInfo.numberOfFriends >= 49 && accountInfo.accountType == 'RESTRICTED') {
    console.log(`You have reached the limit of the RESTRICTED account!
    You have ${accountInfo.numberOfFriends} in your account!`)
};


//---