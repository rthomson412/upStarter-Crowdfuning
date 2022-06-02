async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#pro_title").value.trim();
  const description = document.querySelector("#pro_desc").value.trim();
  const collaborators_required = document.querySelector("#col_req").value.trim();
  const fund_needed = document.querySelector("#fund_needed").value.trim();
  

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
