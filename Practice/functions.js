function logMessage() {
    console.log('Hello world!');
  }
   
  logMessage();

  logMessage();

  logMessage();
  //let's compare two ways to create functions.
  
  function logMessageOne() {
    console.log('How are you?');
  }
   
  const logMessageTwo = function() {
    console.log('Great, thanks!');
  }
   
  logMessageOne();
   
  logMessageTwo();

 // They are similar to each other
 
function func() {
    return 5;
  }
   
const output = func();
 
  console.log(output);
//expected value is 5

    function func() {
    const num = 5;
}
const result = func();
  console.log(result);
 //undefined  