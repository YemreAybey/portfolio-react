import React from 'react';

const Project = props => {
  const {
    title,
    href,
    githublink,
    livelink,
    width,
    height,
    isMobile,
    stacks,
  } = props;
  return (
    <article className="project" style={{ backgroundImage: `${props.bgc}` }}>
      <p className="project_title">{title}</p>
      <div
        className={'img-area ' + isMobile}
        style={{ width: `${width}`, height: `${height}` }}
      >
        <img
          title={stacks}
          src={href}
          alt="Project Screenshot"
          className="project_img"
        />
      </div>
      <div className="project_links">
        <a
          href={githublink}
          className="icon github prlink"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i> <span>GITHUB</span>
        </a>
        <a
          href={livelink}
          className="icon live prlink"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-desktop"></i> <span>DEMO</span>
        </a>
      </div>
    </article>
  );
};

export default Project;
