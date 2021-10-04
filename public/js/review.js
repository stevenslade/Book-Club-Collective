const newFormHandler = async (event) => {
    event.preventDefault();
    // console.log("testing")
    const description = document.querySelector('#description').value.trim();
    const reviewTitle = document.querySelector('#reviewTitle').value;
    if (description) {
      const response = await fetch(`/review/${isbn}`, {
        method: 'POST',
        body: JSON.stringify({ description, reviewTitle }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  document
    .querySelector('.form-group')
    .addEventListener('submit', newFormHandler);