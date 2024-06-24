// Data to Google Sheet
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbxx72V7JZrR6khWqHoCVIDkOkbytw7OaG1skKXA7VX2Kve6vrf-gfjbS5yPUD3f9Qlw/exec';
const form = document.forms['submit-to-google-sheet3'];
const loadingIndicator = document.querySelector('.loading2');

form.addEventListener('submit', e => {
  e.preventDefault();
  loadingIndicator.style.display = 'block';
  fetch(scriptURL1, { method: 'POST', body: new FormData(form) })
    .then(response => {
      loadingIndicator.style.display = 'none';
      alert("Thank you! your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
      loadingIndicator.style.display = 'none';
    });
});


function generateReferral() {
  var referralPersonName = document.getElementById('referralPersonName')?.value;
  var referralPersonDOB = document.getElementById('dob')?.value;

  if (!referralPersonName || !referralPersonDOB) {
    console.error('Name or DOB is missing.');
    return;
  }

  var nameInitials = referralPersonName.substring(0, 3).toUpperCase();

  var dobParts = referralPersonDOB.split('-');
  if (dobParts.length !== 3) {
    console.error('Invalid DOB format.');
    return;
  }

  var dob = dobParts.reverse().join('').substring(0, 8);

  var referralID = 'REF-' + nameInitials + dob + '-METRO';

  var referralIDElement = document.getElementById('referralID');
  if (referralIDElement) {
    referralIDElement.value = referralID;
  } else {
    console.error('Element with id "referralID" not found.');
  }
}
 
