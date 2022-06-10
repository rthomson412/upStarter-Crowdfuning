async function signinFormHandler(e) {
  e.preventDefault()

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/projects');
      } else {
        alert(response.statusText);
      }
    }
};
console.log(document.querySelector('.login-form'))
document.querySelector('#login-form').addEventListener('submit', signinFormHandler);
