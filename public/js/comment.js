// const newCommentHandler = async (event) => {
//     event.preventDefault();
//     console.log("testing")
//     const comment_text = document.querySelector('#comment_text').value.trim();
//     const club_id = document.querySelector('#projectId').value;
//     if (comment_text) {
//       const response = await fetch(`/api/comments`, {
//         method: 'POST',
//         body: JSON.stringify({ comment_text, club_id }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.reload();
//       } else {
//         alert('Failed to create comment');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-comment-form')
//     .addEventListener('submit', newCommentHandler);