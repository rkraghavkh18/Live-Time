console.log("Live Time Chrome Extension");

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse)
{
  console.log(message.txt);
  // if(message.txt==="hello"){
  //   ///the function which we want to  happen to the content section
  // }
}
