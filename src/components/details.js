import React, { Component } from 'react';
import { getMovieDetails, getTVShowDetails } from '../actions/details_actions';
import { connect } from 'react-redux';
import DetailItem from '../containers/DetailItem/detail_item';


class Details extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        const type = this.props.type;
        if (type === "Movies") {
            this.props.getMovieDetails(id);
        }
        else {
            this.props.getTVShowDetails(id);
        }
    }

    renderLoader() {
        const { loading } = this.props.details;

        if (loading) {
            return (
                <div className="loader">Loading...</div>
            );
        }
    }

    renderContainer() {
        const { error } = this.props.details;

        if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }
        return (
            <>
                <div className="flexContainer">
                    {this.renderDetailsItem()}
                </div>
            </>
        );
    }

    renderDetailsItem() {
        const { list } = this.props.details;
        const type = this.props.type;
        console.log(list, type);
        if (type === "Movies") {
            return (
                <DetailItem list = {list} content ={"original_title"} />
            );
        }
        return(
            <DetailItem list = {list} content = {"original_name"} />
        )
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
        details: state.details,
        type: state.movies.type
    };
}

export default connect(mapStateToProps, { getMovieDetails, getTVShowDetails })(Details);