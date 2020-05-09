function stringBender(myStr) {
    if (myStr.length > 10) {
        console.log(myStr.toUpperCase())
        return myStr.toUpperCase();
    } else {
        console.log(myStr);
        return myStr
    }
}

stringBender("Sue Smith");     // 'Sue Smith'
stringBender("Sue Robertson"); // 'SUE ROBERTSON'
stringBender("Joe Thomas");    // 'Joe Thomas'
stringBender("Joe Stevens");   // 'JOE STEVENS'