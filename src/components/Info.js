import React from 'react';

const Info = () => {
  return (
    <section className="info">
      <article className="info_details">
        <h1 className="info_details_header">
          {' '}
          DEVELOPER.
          <br />
          REACT FAN.
          <br />
          HUSBAND. <br />& FEMINIST.
        </h1>
        <p className="info_details_para">
          Currently mentor{' '}
          <a href="https://www.microverse.org/"> @Microverse</a>. Formerly
          officer <a href="https://www.hvkk.tsk.tr/"> @TUAF</a>. Follow my work,
          words and projects below. Need a developer? Just say hi.{' '}
        </p>
        <div className="info_details_links">
          <a href="https://github.com/YemreAybey" className="icon github">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yemreaybey/"
            className="icon linked-in"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://angel.co/yunus-emre-aybey" className="icon angel">
            <i className="fab fa-angellist"></i>
          </a>
          <a href="https://twitter.com/YunusAybey" className="icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="button-holder">
          <a
            href="mailto:aybey77@gmail.com?subject=Website%20Inquiry"
            className="info_details_button"
          >
            {' '}
            Say Hello{' '}
          </a>
        </div>
      </article>
    </section>
  );
};

export default Info;
