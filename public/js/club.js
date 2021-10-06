const newFormClubHandler = async (event) => {
    event.preventDefault();
    console.log("testing")
    const name = document.querySelector('#clubName').value.trim();
    const description = document.querySelector('#clubDescription').value.trim();
    console.log(description)
    if (name && description) {
      const response = await fetch(`/api/clubs`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create club');
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/clubs/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };
  
  document
    .querySelector('#blog-form')
    .addEventListener('submit', newFormClubHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);