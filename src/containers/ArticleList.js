import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import Article from '../components/Article';

class ArticleList extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }
  renderList = () => {
    const { articles } = this.props;
    return articles.map(a => (
      <Article key={a.title} title={a.title} href={a.href} />
    ));
  };
  render() {
    return (
      <section className="articles">
        <h1 className="articles_header">ARTICLES</h1>
        <div className="articles_area">{this.renderList()}</div>
      </section>
    );
  }
}
const mapStateToProps = ({ articles }) => ({ articles });
export default connect(mapStateToProps, { fetchArticles })(ArticleList);
