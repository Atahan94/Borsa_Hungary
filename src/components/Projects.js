import constructionImageUrls from "./Images";
import { useEffect } from 'react';

const Projects = (props) => {
  useEffect(() => {
    const section = document.getElementById("projects")
    props.scroll(section.offsetTop);
  }, []);
  return (
    <div className="projects" id="projects">
      {constructionImageUrls.map((imageUrl, index) => (
        <div className="construction-box" key={index}>
          <img src={imageUrl} alt={`Construction + ${index}`} className="construction-image" />
          <p className="dummy-name">Dummy Name {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;