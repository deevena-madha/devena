import React, { Component } from "react";
class MovieDetails extends Component {
    state = {};
    handleBack = () => {
        this.props.history.push("/movies");
    };
    render() {
        return (
            <div>
                <h1 className="text-center">Movie Details</h1>
                <h2 className="text-center">
                    Selected Movie - {this.props.match.params.id}
                </h2>
                <h2 className="text-center text-primary">
                    {this.props.location.state.movie.title}
                </h2>
                <button className="btn btn-success center" onClick={this.handleBack}>
                    Back
        </button>
            </div>
        );
    }
}

export default MovieDetails;
