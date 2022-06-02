async function editProjectHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const description = document.querySelector('input[name="description"]').value.trim();
    const collaborators_required = document.querySelector('input[name="collaborators"]').value.trim();
    const fund_needed = document.querySelector('input[name="funding"]').value.trim();

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