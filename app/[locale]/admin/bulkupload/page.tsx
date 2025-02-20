'use client';

import React, { useState } from 'react';

const DashboardPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a CSV file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload-csv', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload CSV');

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error(error);
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Upload CSV to MongoDB</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit">Upload CSV</button>
      </form>
    </div>
  );
};

export default DashboardPage;

