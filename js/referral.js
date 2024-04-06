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

// Function to generate referral ID and display
function generateReferral() {
    var referralPersonName = document.getElementById('referralPersonName').value;
    var referralPersonDOB = document.getElementById('referralPersondob').value;
  
    // Extract first 3 letters of the name
    var nameInitials = referralPersonName.substring(0, 3).toUpperCase();
  
    // Extract DOB in the format DDMMYYYY
    var dob = referralPersonDOB.split('-').reverse().join('').substring(0, 8);
  
    // Generate referral ID in the custom format
    var referralID = 'REF-' + nameInitials + dob + '-METRO';
    
    document.getElementById('referralID').value = referralID;
  }
  