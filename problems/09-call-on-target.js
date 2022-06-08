function callOnTarget(func, obj1, obj2) {
  // Your code here
  return func.apply(obj1, [obj2]);
  // return func.call(obj1, obj2);
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
