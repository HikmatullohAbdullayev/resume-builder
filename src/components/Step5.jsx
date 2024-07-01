import React from 'react';

function Step5({ handleChange, data }) {
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = data.projects.map((project, idx) =>
      idx === index ? { ...project, [field]: value } : project
    );
    handleChange({ target: { name: 'projects', value: updatedProjects } });
  };

  return (
    <div>
      <p>Qilgan ishlaringiz</p>

      {data.projects.map((project, index) => (
        <div key={index}>
          <div className="">
            <label htmlFor={`project-name-${index}`}>Project {index + 1} Name</label>
            <input
              type="text"
              name={`project-name-${index}`}
              id={`project-name-${index}`}
              value={project.name}
              onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
              placeholder="Masalan: e-commerce..."
            />
          </div>

          <div className="">
            <label htmlFor={`project-link-${index}`}>Project {index + 1} Link</label>
            <input
              type="text"
              name={`project-link-${index}`}
              id={`project-link-${index}`}
              value={project.link}
              onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
              placeholder="URL manzilni qoldiring"
            />
          </div>

          <div className="">
            <label htmlFor={`project-info-${index}`}>Project {index + 1} Info</label>
            <textarea  type="text"
              name={`project-info-${index}`}
              id={`project-info-${index}`}
              value={project.info}
              onChange={(e) => handleProjectChange(index, 'info', e.target.value)}
              placeholder="Loyiha haqida malumot yozing"> </textarea>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Step5;
