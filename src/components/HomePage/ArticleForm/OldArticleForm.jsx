// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import './ArticleForm.css';
// import * as api from '../../api';

// class ArticleForm extends Component {
//   state = {
//     title: '',
//     topic: '',
//     body: '',
//     err: null
//   };

//   handleSelect = (e) => {
//     this.setState({ topic: e.target.value });
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     const { updateArticlesList, user, handleClose } = this.props;
//     e.preventDefault();
//     const { err, ...restOfState } = this.state;

//     if (err) this.setState({ err: null });
//     api
//       .postArticleData(restOfState, user)
//       .then((article) => {
//         updateArticlesList(article);
//         if (this.state.topic) {
//           handleClose();
//         }
//         this.setState({
//           title: '',
//           topic: '',
//           body: ''
//         });
//       })
//       .catch((err) => {
//         const { status, data } = err.response;
//         this.setState({
//           err: { status, msg: data.msg },
//           title: '',
//           topic: '',
//           body: ''
//         });
//       });
//   };

//   render() {
//     const { title, topic, body, err } = this.state;
//     const { topics } = this.props;

//     return (
//       <div>
//         {err && <p className="selectTopic">Please Select Topic!</p>}
//         <Form id="articleInput" onSubmit={this.handleSubmit}>
//           <Form.Group controlId="exampleForm.ControlInput1">
//             <Form.Label>Article Title: </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Article Title"
//               name="title"
//               onChange={this.handleChange}
//               value={title}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Select Topic</Form.Label>
//             <Form.Control as="select" onChange={this.handleSelect} value={topic}>
//               <option>Select Topic</option>
//               {topics.map((topic) => {
//                 return <option key={topic.slug}>{topic.slug}</option>;
//               })}
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Article body: </Form.Label>
//             <Form.Control
//               as="textarea"
//               rows="3"
//               name="body"
//               placeholder="Enter Article body"
//               onChange={this.handleChange}
//               value={body}
//               required
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default ArticleForm;
