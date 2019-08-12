import React from 'react';
import Header from './Header/Header';
import Image from 'react-bootstrap/Image';
import './ErrorPage.css';

const ErrorPage = ({ msg = 'Page Not Found', status = '404' }) => {
  const errRef = {
    400: 'https://previews.123rf.com/images/mariusz_prusaczyk/mariusz_prusaczyk1205/mariusz_prusaczyk120500298/13700783-3d-error-400-crossword-on-white-background.jpg',
    404: 'https://image.freepik.com/free-vector/funny-error-404-background-design_1167-219.jpg',
    500: 'https://img.freepik.com/free-vector/500-error-cute-penguin-vector-illustration_81257-36.jpg?size=338&ext=jpg',
    undefined:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJthz4SmVOHGIi0YCVFz5p1cujZxye3VTGrBJverK3UArt9nGW'
  };

  return (
    <section>
      <Header route={'Error'} />
      <Image src={errRef[status]} fluid id="errImg" />
      <div id="errorSection">
        <p>
          <em>Oops! You landed on an Error!</em>
        </p>
        {msg && (
          <p>
            <em>Status: {status}</em>
          </p>
        )}
        {status && (
          <p>
            <em>{msg}...</em>
          </p>
        )}
      </div>
    </section>
  );
};

export default ErrorPage;
