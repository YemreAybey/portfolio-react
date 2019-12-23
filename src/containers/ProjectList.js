import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import Project from '../components/Project';

class ProjectList extends Component {
  componentDidMount() {
    const { fetchProjects } = this.props;
    fetchProjects();
  }

  renderList = () => {
    const bgs = [
      'linear-gradient(rgb(244, 185, 61), rgb(183, 147, 73))',
      'linear-gradient(180deg, #005ba9, #005ba9)',
      'linear-gradient(rgb(142, 228, 165), rgb(50, 97, 62))',
      'linear-gradient(rgb(26, 23, 29), rgb(151, 158, 162))',
      'linear-gradient(rgb(226, 137, 211), rgb(121, 58, 125))',
      'linear-gradient(rgb(232, 126, 108), rgb(179, 42, 42))',
      'linear-gradient(rgb(68, 73, 78), rgb(51, 55, 60))',
      '#eabad8',
    ];
    const { projects } = this.props;
    return projects.map(pr => {
      let ind = parseInt(pr.title[1]) - 1;
      const isMobile = [0, 4].includes(ind) ? 'mobile' : 'web';
      return (
        <Project
          bgc={bgs[ind]}
          key={pr.title}
          title={pr.title}
          href={pr.href}
          githublink={pr.githublink}
          livelink={pr.livelink}
          width={pr.width}
          height={pr.height}
          isMobile={isMobile}
        />
      );
    });
  };
  render() {
    return <section className="projectList">{this.renderList()}</section>;
  }
}
const mapStateToProps = ({ projects }) => ({ projects });
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
