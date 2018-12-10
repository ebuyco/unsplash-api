import React, {Component} from 'react';


class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    storeHistory(event){
        sessionStorage.setItem("lastsearch", event);
    }

    render(){
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <div className="container">
                    <a className="navbar-brand">Logo</a>
                    <form className="form-inline">
                        <input style={{borderRadius:"2rem", width:"18rem"}} className="form-control md-sm-8" value={this.state.value} onChange={this.handleChange} />
                        <a href={`/${this.state.value}`} className="btn btn-outline-success my-2 my-sm-0">
                            Search
                        </a>
                     
                    </form>
                </div>

            </nav>
        )
    }
}

export default Navigation