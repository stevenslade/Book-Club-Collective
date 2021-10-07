// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {

//     const isbn = event.target.getAttribute('data-id').value;
//     const response = await fetch(`/api/review/${isbn}`, {
//         method: 'DELETE',
//       });
//       console.log(isbn)
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete review');
//       }
//     }
//   };
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
