async function editProjectHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#pro_title").value.trim();
    const description = document.querySelector("#pro_desc").value.trim();
    const collaborators_required = document.querySelector("#col_req").value.trim();
    const fund_needed = document.querySelector("#fund_needed").value.trim();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            collaborators_required,
            fund_needed
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-project-form').addEventListener('submit', editFormHandler);