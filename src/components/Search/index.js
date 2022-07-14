import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        //console.log(event.target.value);
        this.props.inputText(event.target.value);
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange} className="col-lg-3 offset-lg-6" type="search" name="main-search" id="main-search" placeholder="Search here..."/>
            </>
        );
    }
}

export default Search;