const myForm = document.querySelector('form');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const getHeight = parseInt(document.querySelector('#height').value);
  const getWeight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (getHeight === '' || getHeight < 0 || isNaN(getHeight)) {
    results.textContent = `Please give a valid height`;
  } else if (getWeight === '' || getWeight < 0 || isNaN(getWeight)) {
    results.textContent = `Please give a valid Weight`;
  } else {
    const bmi = (getWeight / ((getHeight * getHeight) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      results.innerHTML += '<span> Person is Underweight</span>';
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML += '<span> Person is in Normal Weight Range</span>';
    } else if (bmi > 24.9) {
      results.innerHTML += '<span> Person is Overwight</span>';
    }
  }
});
