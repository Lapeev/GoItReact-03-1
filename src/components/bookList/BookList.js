import React from 'react';
import PropTypes from 'prop-types';
import style from './bookList.module.css';

const BookList = ({ articles }) => (
  <ul className={style.list}>
    {articles.map(article => (
      <li className={style.listItem} key={article.id}>
        <img
          className={style.img}
          src={article.volumeInfo.imageLinks.thumbnail}
          alt="Book"
        />
        <h2 className={style.title}>{article.volumeInfo.title}</h2>
        <p className={style.descr}>{article.volumeInfo.description}</p>
        {article.volumeInfo.authors && (
          <p className={StyleSheet.author}>
            Автор/a: {article.volumeInfo.authors.map(author => author)}
          </p>
        )}
        <p className={style.publisher}>
          Издатель: {article.volumeInfo.publisher}
        </p>
        <p>Год издания: {article.volumeInfo.publishedDate}</p>
        <p>К-во страниц: {article.volumeInfo.pageCount}</p>
        <p>
          Возрастной рейтинг:{' '}
          {article.volumeInfo.maturityRating === 'NOT_MATURE'
            ? 'Без возрастных ограничений'
            : '18+'}
        </p>
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      volumeInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        authors: PropTypes.array,
        publisher: PropTypes.string,
        publishedDate: PropTypes.string,
        pageCount: PropTypes.number,
        maturityRating: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
