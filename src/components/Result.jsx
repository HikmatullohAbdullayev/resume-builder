import React from 'react';

function Result({ data }) {
  return (
    <div>
      <h2>Ma'lumotlar</h2>
      <p><strong>Ism:</strong> {data.ism}</p>
      <p><strong>Familya:</strong> {data.familya}</p>
      <p><strong>Yosh:</strong> {data.yosh}</p>
      <p><strong>Jinsi:</strong> {data.jinsi}</p>
      <p><strong>Telefon:</strong> {data.telefon}</p>
      <p><strong>Kasbi:</strong> {data.kasbi}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Telegram:</strong> {data.telegram}</p>
      <p><strong>Instagram:</strong> {data.instagram}</p>
      <p><strong>Linkedin:</strong> {data.linkedin}</p>
      <p><strong>Skills:</strong> {data.skills}</p>
      <p><strong>Tajribasi:</strong> {data.tajribasi}</p>
      <p><strong>Talim:</strong> {data.talim}</p>
      <p><strong>Til:</strong> {data.til}</p>
      <p><strong>About:</strong> {data.about}</p>
      <p><strong>Qoshimcha:</strong> {data.qoshimcha}</p>
      <h3>Projects:</h3>
      {data.projects.map((project, index) => (
        <div key={index}>
          <p><strong>Project {index + 1} Name:</strong> {project.name}</p>
          <p><strong>Project {index + 1} Link:</strong> {project.link}</p>
          <p><strong>Project {index + 1} Info:</strong> {project.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;
