async function editProjectHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#project-title').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description
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