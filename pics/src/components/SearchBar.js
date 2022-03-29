import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // onInputClick() {
    //     console.log('input was clicked.')
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        // pass back to App
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                        {/* same as: */}
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;