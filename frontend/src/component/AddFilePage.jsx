import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../service/ApiService';




const AddFilePage = () => {
   const [file, setFile] = useState(null);
   const [name, setName] = useState('');
   const [message, setMessage] = useState('');
   const navigate = useNavigate();


   const handleFileChange = (event) => {
       setFile(event.target.files[0]);
   };


   const handleNameChange = (event) => {
       setName(event.target.value);
   };


   const handleSubmit = async (event) => {
       event.preventDefault();
       if (!file || !name) {
           setMessage('File and Name are required');
           return;
       }


       const formData = new FormData();
       formData.append('file', file);
       formData.append('name', name);


       try {
           const response = await ApiService.addFile(formData);
           console.log(response)
           if (response.id) {
               setMessage('Image uploaded successfully!');
               setTimeout(() => {
                   navigate('/');
               }, 5000);
           } else {
               setMessage(JSON.stringify(response));
               setTimeout(() => {setMessage('');}, 5000);
           }
       } catch (err) {
               setMessage('There was an error uploading the image!' + err);
               setTimeout(() => {setMessage('');}, 5000);
       }
   };


   return (
       <div className="file-container">
           <h1>Add New Image</h1>
           {message && <p className="message">{message}</p>}
           <form onSubmit={handleSubmit}>
               <div className='form-group'>
                   <label>File:</label>
                   <input type="file" onChange={handleFileChange} />
               </div>
               <div className='form-group'>
                   <label>Name:</label>
                   <input type="text" value={name} onChange={handleNameChange} />
               </div>
               <button type="submit">Upload</button>
           </form>
       </div>
   );
};


export default AddFilePage;





