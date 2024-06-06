import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';


const HomePage = () => {
  const [files, setFiles] = useState([]);


  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const files = await ApiService.getAllFiles();
        setFiles(files);
      } catch (error) {
        console.error('There was an error fetching the files!', error);
      }
    };
    fetchFiles();
  }, []);



  return (
    <div className="home-container">
      <h1>All Images</h1>
      <div className='add-button-div'> 
        <a href='/add'>Add New Image</a>
      </div>
      <div className="image-row">
        {files.map(file => (
          <div key={file.id} className="image-item">
            <img src={file.fileUrl} alt={file.name} />
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
