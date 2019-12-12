import portfolio from '../api/axios';

const FETCH_PROJECTS = 'FETCH_PROJECTS';
const FETCH_ARTICLES = 'FETCH_ARTICLES';

const fetchProjects = () => async dispatch => {
  const response = await portfolio.get('/projects.json');
  dispatch({ type: FETCH_PROJECTS, projects: response.data.projects });
};

const fetchArticles = () => async dispatch => {
  const response = await portfolio.get('/articles.json');
  dispatch({ type: FETCH_ARTICLES, articles: response.data.articles });
};

export { fetchProjects, fetchArticles };
