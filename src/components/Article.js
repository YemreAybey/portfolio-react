import React from 'react';

const Article = props => {
  return (
    <div className="articles_area_field">
      <i className="fab fa-medium"></i>
      <a href={props.href} className="articles_area_link link">
        {' '}
        {props.title}
      </a>
    </div>
  );
};

export default Article;
