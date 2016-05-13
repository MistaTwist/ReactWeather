var names = ['Fred', 'Barney', 'Wilma', 'Betty'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => myFunc(name));

function myFunc(name){
  console.log(name + "!");
}

//arrows take on the parents this, which helps to avoid undefined this values.

function add (a, b) {
  return a + ;
}

function addStatement = (a + b) => {
  return (a + b);
}

function addExpression(a + b) => a + b;

console.log(add(1,3));
