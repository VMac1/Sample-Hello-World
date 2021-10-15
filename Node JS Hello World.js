'use strict';

console.log('Hello world');

console.log('Press any key to continue.');
process.stdin.once('data', function () {
    continueProcess();
});