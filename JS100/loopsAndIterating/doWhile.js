let rlSync = require('readline-sync');


let response;
do {
    response = rlSync.question('"Do you want to repeat an action?"')

} while(response === 'y');