import React, { useState } from 'react';
import { getProfessor,addReview } from '../services/api';
// import '../styles/ShowProfessor.css'; // Assuming you have a CSS file for styles







// const ShowProfessor = () => {
//     const [name, setName] = useState('');
//     const [subject, setSubject] = useState('');
//     const [professorData, setProfessorData] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         const data = await getProfessor(name, subject);
//         setProfessorData(data);
//         setErrorMessage(''); // Clear any previous error messages
//       } catch (error) {
//         const errorResponse = error.response ? error.response.data.message : 'Error retrieving professor data. Please try again.';
//         setErrorMessage(errorResponse);
//         setProfessorData(null); // Clear any previous professor data
//       }
//     };
  
//     return (
//       <div>
//         <h2>Show Professor Ratings</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input 
//               type="text" 
//               id="name" 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//               required 
//             />
//           </div>
//           <div>
//             <label htmlFor="subject">Subject:</label>
//             <input 
//               type="text" 
//               id="subject" 
//               value={subject} 
//               onChange={(e) => setSubject(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit">Show Ratings</button>
//         </form>
//         {errorMessage && <p>{errorMessage}</p>}
//         {professorData && (
//           <div>
//             <h3>{professorData.name} - {professorData.subject}</h3>
//             <h4>Reviews:</h4>
//             <ul>
//               {professorData.reviews.map((review) => (
//                 <li key={review._id}>
//                   <p><strong>Comment:</strong> {review.comment}</p>
//                   <p><strong>Rating:</strong> {review.rating}</p>
//                   <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default ShowProfessor;





const ShowProfessor = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [professorData, setProfessorData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [reviewComment, setReviewComment] = useState('');
    const [reviewRating, setReviewRating] = useState('');
    const [showReviewForm, setShowReviewForm] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const data = await getProfessor(name, subject);
        setProfessorData(data);
        setErrorMessage(''); // Clear any previous error messages
      } catch (error) {
        const errorResponse = error.response ? error.response.data.message : 'Error retrieving professor data. Please try again.';
        setErrorMessage(errorResponse);
        setProfessorData(null); // Clear any previous professor data
      }
    };
  
    const handleReviewSubmit = async (event) => {
      event.preventDefault();
      try {
        if (professorData) {
          const data = await addReview(professorData.name, reviewComment, reviewRating);
          setProfessorData(data.professor); // Update the professor data with the new review
          setReviewComment('');
          setReviewRating('');
          setShowReviewForm(false);
          setErrorMessage('');
        }
      } catch (error) {
        const errorResponse = error.response ? error.response.data.message : 'Error adding review. Please try again.';
        setErrorMessage(errorResponse);
      }
    };
  
    return (
      <div>
        <h2>Show Professor Ratings</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              id="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Show Ratings</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {professorData && (
          <div>
            <h3>{professorData.name} - {professorData.subject}</h3>
            <h4>Reviews:</h4>
            <ul>
              {professorData.reviews.map((review) => (
                <li key={review._id}>
                  <p><strong>Comment:</strong> {review.comment}</p>
                  <p><strong>Rating:</strong> {review.rating}</p>
                  <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
            <button onClick={() => setShowReviewForm(true)}>Add Review</button>
            {showReviewForm && (
              <form onSubmit={handleReviewSubmit}>
                <div>
                  <label htmlFor="reviewComment">Comment:</label>
                  <input 
                    type="text" 
                    id="reviewComment" 
                    value={reviewComment} 
                    onChange={(e) => setReviewComment(e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="reviewRating">Rating:</label>
                  <input 
                    type="number" 
                    id="reviewRating" 
                    value={reviewRating} 
                    onChange={(e) => setReviewRating(e.target.value)} 
                    required 
                    min="1" 
                    max="5"
                  />
                </div>
                <button type="submit">Submit Review</button>
              </form>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default ShowProfessor;