// Data to Google Sheet
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbwRJcnEqr6Rd-WlYi_Z5rcXWCDk9NH0il5YdpgUF5NMfLyGAef48VTXuHWF6OVXkyNTMw/exec';
const form = document.forms['submit-to-google-sheet4'];
const loadingIndicator = document.querySelector('.loading2');

form.addEventListener('submit', e => {
  e.preventDefault();
  loadingIndicator.style.display = 'block';
  const customerid = generateCustomerId();
  const scriptURLWithParams = scriptURL1 + '?customerid=' + encodeURIComponent(customerid);
  fetch(scriptURLWithParams, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      loadingIndicator.style.display = 'none';
      alert("Thank you! Your form is submitted successfully.");
      window.location.href = "referrals.html?customerid=" + customerid; 
      // window.open("referrals.html?customerid=" + customerid, "_blank");
    })
    .catch(error => {
      console.error('Error!', error.message);
      loadingIndicator.style.display = 'none';
    });
});


function generateCustomerId() {
    var FullName = document.getElementById('FullName').value;
    var dob = document.getElementById('dob').value;
    var nameInitials = FullName.substring(0, 3).toUpperCase();
    var dobReversed = dob.split('-').reverse().join('').substring(0, 8);
    var customerid = nameInitials + dobReversed + '-METRO';
    document.getElementById('customerid').value = customerid; // Update the input field
    return customerid;
  }


function validateAadharFormat(aadharNumber) {
  var aadharRegex = /^\d{0,4}-?\d{0,4}-?\d{0,4}$/;
  return aadharRegex.test(aadharNumber);
}
function formatAadharNumber(input) {
  var value = input.value.replace(/\D/g, '');
  var formattedValue = value.slice(0, 12).replace(/(\d{4})(\d{0,4})?(\d{0,4})?/, function(match, p1, p2, p3) {
    return [p1, p2 ? '-' + p2 : '', p3 ? '-' + p3 : ''].join('');
  });
  input.value = formattedValue;
}
document.getElementById('aadharnumber').addEventListener('input', function(event) {
  var input = event.target;
  formatAadharNumber(input);
  if (!validateAadharFormat(input.value)) {
    input.setCustomValidity('Please enter a valid Aadhar number in the format 0000-0000-0000');
  } else {
    input.setCustomValidity('');
  }
});