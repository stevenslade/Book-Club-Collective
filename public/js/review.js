const newFormHandler = async (event) => {
    event.preventDefault();
    console.log("testing")
    const description = document.querySelector('#description').value.trim();
    const book_id = document.querySelector('#projectId').value;
    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description, book_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);