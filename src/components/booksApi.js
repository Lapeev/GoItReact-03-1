import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import genres from './genres.json';
import SearchBar from './searchBar/SearchBar';
import Options from './optionsBar/OptionsBar';
import * as fetchArticles from '../services/article-api';
import BookList from './bookList/BookList';
import ErrorNotification from './errorNotification/ErrorNotification';
import style from './booksApi.module.css';

export default class BookApi extends Component {
  state = {
    articles: [],
    isLoading: false,
    title: '',
    genre: '',
    error: null,
  };

  onHandleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  fetchBooks = (title, genre) => {
    this.setState({ isLoading: true });
    fetchArticles
      .fetchArticles(title, genre)
      .then(({ data }) => this.setState({ articles: data.items }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, genre } = this.state;
    this.fetchBooks(title, genre);
    this.reset();
  };

  reset = () => {
    this.setState({
      title: '',
      genre: '',
      articles: [],
      error: null,
    });
  };

  render() {
    const { title, genre, articles, isLoading, error } = this.state;
    return (
      <div className={style.wrapper}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <SearchBar
            name="title"
            value={title}
            onChange={this.onHandleChange}
          />
          <Options
            name="genre"
            value={genre}
            onChange={this.onHandleChange}
            genres={genres}
          />
          <button className={style.button} type="submit">
            Поиск
          </button>
        </form>
        {isLoading && (
          <div className={style.spinner}>
            <Spinner name="circle" />
          </div>
        )}
        {articles.length > 0 && <BookList articles={articles} />}
        {error && <ErrorNotification text={error.message} />}
      </div>
    );
  }
}
