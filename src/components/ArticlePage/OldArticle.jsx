// import React, { Component } from 'react';
// import * as api from '../api';
// import './Article.css';
// import ErrorPage from '../ErrorPage';
// import CommentListByArticleId from './CommentListByArticleId';
// import ArticleData from './ArticleData';
// import Loader from '../partials/Loader/Loader';
// import DeleteModal from '../partials/DeleteModal/DeleteModal';

// class Article extends Component {
//   state = {
//     article: null,
//     err: null
//   };

//   componentDidMount() {
//     this.fetchArticleDataByArticleId();
//   }

//   fetchArticleDataByArticleId = () => {
//     api
//       .getArticleDataByArticleId(this.props.article_id)
//       .then((article) => {
//         this.setState({ article });
//       })
//       .catch((err) => {
//         const { status, data } = err.response;
//         this.setState({ err: { status, msg: data.msg } });
//       });
//   };

//   handleClick = (e) => {
//     const { article_id } = this.props;
//     api.deleteArticleByArticleId(article_id);
//   };

//   render() {
//     const { article, err } = this.state;
//     const { user, article_id } = this.props;

//     if (err) return <ErrorPage {...err} />;
//     return !article ? (
//       <Loader />
//     ) : (
//       <section id="articleSection">
//         <div className="articleDivider">
//           <ArticleData {...article} user={user} />
//           {user === article.author && <DeleteModal handleClick={this.handleClick} />}
//         </div>
//         <CommentListByArticleId article_id={article_id} user={user} />
//       </section>
//     );
//   }
// }

// export default Article;
