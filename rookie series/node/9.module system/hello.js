// method01
// exports.world=function(){
//     console.log('hello world');
// }

// method02
function hello() {
  this.world = function(){
    console.log("hello world");
  };
}

module.exports = hello;
