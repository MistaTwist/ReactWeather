function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('London', function(err, temp) {
  if(err){
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject){
    setTimeout (function(){
      resolve(79);
      reject('City not found either.');
    }, 2000);
  });
}

getTempPromise('London').then(function(temp){
  console.log('success', temp);
}, function (err) {
  console.log('promise error', err);
})

function addPromise(a, b){
  return new Promise(function (resolve, reject){
    if(typeof a ==='number' && typeof b ==='number'){
      resolve(a+b);
    } else {
      reject('a and b need to be numbers');
    }
  });
}

addPromise(2, 3).then(function(sum){
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
})

addPromise('c', 3).then(function(sum){
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
})
