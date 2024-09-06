function validateForm() {
  let company = document.getElementById('company').value;
  let firstName = document.getElementById('first_name').value;
  let lastName = document.getElementById('last_name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let productInterest = document.getElementById('00NdM000004ynAI').value;

  console.log(company, firstName, lastName, email, phone, productInterest); // Debugging line

  if (company === "" || firstName === "" || lastName === "" || email === "" || phone === "" || productInterest === "") {
      alert("All fields must be filled out");
      return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
  }

  let phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (10 digits)");
      return false;
  }

  return true;
}
