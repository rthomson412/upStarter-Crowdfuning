
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#project-title').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const fund_needed = document.querySelector('#fund_needed').value.trim();
  

  if (title && fund_needed && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        fund_needed,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log(response);
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
}

document.querySelector('.new-project-form').addEventListener('submit', newFormHandler);