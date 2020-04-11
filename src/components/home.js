import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesByRating, getTVShowsByRating, selectType, searchMovies, searchTVShows } from '../actions/home_actions';
import '../assets/home.css';
import Item from '../containers/Item/item';


class Home extends Component {
    constructor(props) {
        super(props);
        this.timeout = 0;
        this.searchText ="";
    }

    doSearch(evt) {
        this.searchText = evt.target.value;
        const { type } = this.props.movies;
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (type === "Movies") {
                if (this.searchText.length > 2) {
                    this.props.searchMovies(this.searchText);
                }
                this.props.getMoviesByRating();
            }
            else if (type === "TV") {
                if (this.searchText.length > 2) {
                    this.props.searchTVShows(this.searchText);
                }
                this.props.getTVShowsByRating();
            }
        }, 1000);
    }


    componentDidMount() {
        const { type } = this.props.movies;
        if (type === "Movies") {
            this.props.getMoviesByRating();
        }
        else {
            this.props.getTVShowsByRating();
        }

    }


    renderLoader() {
        const { loading } = this.props.movies;

        if (loading) {
            return (
                <div className="loader">Loading...</div>
            );
        }
    }

    getMovies() {
        this.props.selectType("Movies");
        this.props.getMoviesByRating();
        if (this.searchText.length > 2) {
            this.props.searchMovies(this.searchText);
        }
    }

    getTVShows() {
        this.props.selectType("TV")
         this.props.getTVShowsByRating();
         if (this.searchText.length > 2) {
             this.props.searchTVShows(this.searchText);
         }

    }

    renderContainer() {
        const { error } = this.props.movies;
        const { type } = this.props.movies;

        if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <>
                <div className="header">
                    <div>
                        <button className={type === "Movies" ? "selected" : ""} onClick={() => this.getMovies()}>Movies</button>
                        <button className={type === "TV" ? "selected" : ""} onClick={() => this.getTVShows()}>TV Shows</button>
                    </div>
                    <div className="search">
                        <input ref="searchInput" type="text" className="searchInput" onChange={evt => this.doSearch(evt)} />
                    </div>
                </div>
                <div className="flexContainer">
                    {this.renderItem()}
                </div>
            </>
        );
    }

    renderItem() {
        const { list } = this.props.movies;
        const { type } = this.props.movies;
        if (type === "Movies") {
            return (
                <Item list={list} content="title" />
            );
        }
        return (
            <Item list={list} content="original_name" />
        );

    }


    render() {
        return (
            <div className="containerr">
                <div className="row">
                    {this.renderLoader()}
                </div>
                {this.renderContainer()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
    };
}

export default connect(mapStateToProps, { getMoviesByRating, getTVShowsByRating, selectType, searchMovies, searchTVShows })(Home);