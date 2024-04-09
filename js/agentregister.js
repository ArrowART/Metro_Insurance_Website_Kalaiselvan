// Data to Google Sheet
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbwRJcnEqr6Rd-WlYi_Z5rcXWCDk9NH0il5YdpgUF5NMfLyGAef48VTXuHWF6OVXkyNTMw/exec';
const form = document.forms['submit-to-google-sheet4'];
const loadingIndicator = document.querySelector('.loading2');

form.addEventListener('submit', e => {
  e.preventDefault();
  loadingIndicator.style.display = 'block';

  // Generate customer ID
  const customerid = generateCustomerId();

  // Append customer ID to script URL
  const scriptURLWithParams = scriptURL1 + '?customerid=' + encodeURIComponent(customerid);

  // Send form data to Google Sheets script
  fetch(scriptURLWithParams, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      loadingIndicator.style.display = 'none';
      alert("Thank you! Your form is submitted successfully.");
      // Open new page with customer ID
      window.open("referrals.html?customerid=" + customerid, "_blank");
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
    return customerid; // Return the generated customer ID
  }