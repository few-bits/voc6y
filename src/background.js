import * as vocab from "./storage/persistence";

console.log("I'm going to help you to improve your vocabulary");

vocab.readAll().then(console.log);
