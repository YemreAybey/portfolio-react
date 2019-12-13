import React from 'react';

const Project = props => {
  const { title, href, githublink, livelink, width, height, isMobile } = props;
  return (
    <article className="project" style={{ backgroundImage: `${props.bgc}` }}>
      <p className="project_title">{title}</p>
      <div
        className={'img-area ' + isMobile}
        style={{ width: `${width}`, height: `${height}` }}
      >
        <img src={href} alt="Project Screenshot" className="project_img" />
      </div>
      <div className="project_links">
        <a href={githublink} className="icon github prlink">
          <i className="fab fa-github"></i> <span>GITHUB</span>
        </a>
        <a href={livelink} className="icon live prlink">
          <i className="fas fa-desktop"></i> <span>DEMO</span>
        </a>
      </div>
    </article>
  );
};

export default Project;
