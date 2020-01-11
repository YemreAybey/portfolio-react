import React, { useState } from 'react';
import Modal from './Modal';

const Project = props => {
  const [isHovered, setIsHovered] = useState(false);
  const showOrHideStacks = () => {
    if (isHovered) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  };

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

  if (!isHovered) {
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
            onMouseEnter={() => showOrHideStacks()}
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
  } else {
    return (
      <article
        className="project show-modal"
        style={{ backgroundImage: `${props.bgc}` }}
      >
        <p className="project_title">{title}</p>
        <div
          className={'img-area ' + isMobile}
          style={{ width: `${width}`, height: `${height}` }}
          onMouseLeave={() => showOrHideStacks()}
        >
          <Modal stacks={stacks} />
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
  }
};

export default Project;
