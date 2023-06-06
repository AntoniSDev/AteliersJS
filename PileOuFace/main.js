const btn = document.getElementById('btn');
let result = document.getElementById('result');

function headsOrTails() {
  // random number 1 or 0
  let random = Math.random();
  let randomNumber = Math.floor(random * 2);

  // heads if 0 , tails !if 
  return randomNumber === 0 ? 'Heads' : 'Tails';
}

btn.addEventListener('click', function() {
  // function result in div
  result.textContent = headsOrTails();

  // result in consolelog
  console.log(headsOrTails());
});
