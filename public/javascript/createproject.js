async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const description = document.querySelector('input[name="description"]').value.trim();
  const collaborators_required = document.querySelector('input[name="collaborators"]').value.trim();
  const fund_needed = document.querySelector('input[name="funding"]').value.trim();
  

  if (title && fund_needed && description) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({title, description, collaborators_required, fund_needed}),
      headers: {"Content-Type": "application/json"},
    });

    if (response.ok) {
      console.log(response);
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong!");
    }
  }
}

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
