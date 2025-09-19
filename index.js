function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i], i, collection);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const newArr = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      newArr.push(callback(collection[i], i, collection));
    }
  } else {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      newArr.push(callback(values[i], i, collection));
    }
  }
  return newArr;
}

function myReduce(collection, callback, acc) {
  let startingIndex = 0;
  let values = Array.isArray(collection) ? collection : Object.values(collection);

  if (acc === undefined) {
    acc = values[0];
    startingIndex = 1;
  }

  for (let i = startingIndex; i < values.length; i++) {
    acc = callback(acc, values[i], i, values); // fixed
  }
  return acc;
}

function myFind(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (callback(values[i], i, collection)) return values[i];
  }
  return undefined;
}

function myFilter(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (callback(values[i], i, collection)) result.push(values[i]);
  }
  return result;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(array.length - n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

// module.exports = {
//   myEach,
//   myMap,
//   myReduce,
//   myFind,
//   myFilter,
//   mySize,
//   myFirst,
//   myLast,
//   myKeys,
//   myValues
// };
