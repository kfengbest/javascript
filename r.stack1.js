define(function(){
	return Stack();
});


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.storage = {};
  extend(stackInstance, stackMethods);

  return stackInstance;
};

var stackMethods = {};


stackMethods.push = function (value) {
  this.storage[this.size()]= value;
}

stackMethods.pop = function () {
  var ret = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return ret;
}

stackMethods.size = function () {
  var count = 0;
  for(var key in this.storage){
    count++;
  }

  return count;
}



