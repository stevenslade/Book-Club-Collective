// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {

//         const isbn = document.querySelector('#isbn').value;
//       const response = await fetch(`/api/review/${isbn}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete review');
//       }
//     }
//   };
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('submit', delButtonHandler);