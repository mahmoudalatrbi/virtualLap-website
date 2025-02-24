// Register user
document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.alert').classList.add("hide");
  document.querySelector('.alert').classList.remove("show");
});
document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  // Get form values
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  const passwordConfirmation = document.getElementById('regPasswordConfirm').value;
  var span = document.getElementById('mySpan');

  // Validate if password and confirmation match
  if (password !== passwordConfirmation) {
   
  
    // Rewrite the text content of the span
    span.textContent = "Your password UnMatch";

    document.querySelectorAll('.alert').forEach(function(element) {
      // Remove the 'hide' class
      element.classList.remove('hide');
      
      // Add the 'show' class
      element.classList.add('show');

      element.classList.add('showAlert');
      setTimeout(function(){
        document.querySelector('.alert').classList.add("hide");
        document.querySelector('.alert').classList.remove("show");
      },7000)// hide alert automatically after 5sec 
  });

      return;
  }

  // Validate email using regular expression
  function validateEmail(email) {
      // Regular expression for email validation
      var emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com|hotmail\.com)$/;
      return emailPattern.test(email);
  }

  // Validate password using regular expression
  function validatePassword(password) {
      // Regular expression for password validation
      var passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      return passwordPattern.test(password);
  }

  // Perform email and password validation
  if (!validateEmail(email)) {
      
    span.textContent = "Warning: invalid Email address ";
      document.querySelectorAll('.alert').forEach(function(element) {
        // Remove the 'hide' class
        element.classList.remove('hide');
        
        // Add the 'show' class
        element.classList.add('show');

        element.classList.add('showAlert');
        setTimeout(function(){
          document.querySelector('.alert').classList.add("hide");
          document.querySelector('.alert').classList.remove("show");
        },7000)// hide alert automatically after 5sec 
    });
     
      return;
  }


  if (!validatePassword(password)) {
    span.textContent = "Warning: invalid password ";
    document.querySelectorAll('.alert').forEach(function(element) {
      // Remove the 'hide' class
      element.classList.remove('hide');
      
      // Add the 'show' class
      element.classList.add('show');

      element.classList.add('showAlert');
      setTimeout(function(){
        document.querySelector('.alert').classList.add("hide");
        document.querySelector('.alert').classList.remove("show");
      },7000)// hide alert automatically after 5sec 
  });
      return;
  }

  try {
      // Send registration request
      const res = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, password_confirmation: passwordConfirmation }),
      });

      const data = await res.json();

      if (res.ok) {
          alert('Registration successful!');
      } else {
          // Handle server-side validation errors
          console.log('Registration Error:', data.error);
          alert(JSON.stringify(data.error));
      }
  } catch (error) {
      // Handle any network errors
      alert('An error occurred during registration. Please try again.');
      console.error('Registration Error:', error);
  }
});

// Login user
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  var span = document.getElementById('mySpan');
  

  try {
      // Send login request
      const res = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });

      console.log('HTTP Status Code:', res.status);  // Log the status code for debugging
      const data = await res.json();
      console.log('Response Data:', data);  // Log the full response for debugging

      // Check if a token was returned
      if (data.access_token) {
          localStorage.setItem('token', data.access_token); // Store token for future authentication
          window.location.assign('/final%20grade/home.html');  // Redirect to home page
      } else {
        span.textContent = "Warning: invalid Email address or Password ";
        document.querySelectorAll('.alert').forEach(function(element) {
          // Remove the 'hide' class
          element.classList.remove('hide');
          
          // Add the 'show' class
          element.classList.add('show');
  
          element.classList.add('showAlert');
          setTimeout(function(){
            document.querySelector('.alert').classList.add("hide");
            document.querySelector('.alert').classList.remove("show");
          },7000)// hide alert automatically after 5sec 
      });
       
      }
  } catch (error) {
      // Handle any network errors
      console.error('Login Error:', error);
  }
});