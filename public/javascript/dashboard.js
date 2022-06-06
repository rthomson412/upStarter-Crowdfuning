async function createHandler(event) {
  event.preventDefault();
  document.location.replace('/projects/create');
};

async function allProjectHandler(event) {
  event.preventDefault();
  document.location.replace('/projects/');
};

document.querySelector('.create-button').addEventListener('click', createHandler);

document.querySelector('.view-all').addEventListener('click', allProjectHandler);
