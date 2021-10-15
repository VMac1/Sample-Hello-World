// Standard "Hello World"

'use strict';

console.log("Hello world");

console.log("Ctrl+C to exit or type any key and press enter to exit."); // This section waits for an input before continuing so the hello world is readable
process.stdin.once("data", function () {
    continueProcess();
});