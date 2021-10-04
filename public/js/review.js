// const newFormHandler = async (event) => {
//     event.preventDefault();
//     console.log("testing")
//     const description = document.querySelector('#description').value;
//     const reviewTitle = document.querySelector('#reviewTitle').value;
//     // const isbn = window.location.search
//     if (description) {
//       const response = await fetch(`api/reviews`, {
//         method: 'POST',
//         body: JSON.stringify({ description, reviewTitle }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.reload();
//       } else {
//         alert('Failed to create review');
//       }
//     }
//   };
  
//   document
//     .querySelector('.form-group')
//     .addEventListener('submit', newFormHandler);

console.log("testing")

const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("testing")
  const title = document.querySelector('#reviewTitle').value;
  const stars = document.querySelector('#stars').value;
  const description = document.querySelector('#reviewDescription').value;
  const isbn = document.querySelector('#isbn').value;
  console.log(description)
  if (description) {
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({ description, title, stars, isbn  }),
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
  .querySelector('#new-comment-form')
  .addEventListener('submit', newFormHandler);