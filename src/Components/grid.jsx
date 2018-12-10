import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        key: null,
        posts: [],
        isLoaded: false
    };
    componentDidMount() {
        let key = this.props.match.params.key;
        axios.get('https://api.unsplash.com/search/photos?client_id=ff495689b361190a0972ecc2b87f242a3bf8bd377ce6ae0323a601dc716547b0&page=1&query=' + key)
            .then(res => {
                console.log(this.props)
                this.setState({
                    posts: res.data.results,
                    key: key,
                    isLoaded: true
                })
            })
    }
    render() {
        var { isLoaded } = this.state;
        if (!isLoaded) {
            return <div className="text-center"><h2>Loading...</h2></div>;
        }
        const {posts} = this.state;
        const postList = !posts.lenght ? (
            posts.map(post => {
                return (
                    <div style={{border:"none"}} className="card col-md-4" key="{post.id}">
                        <img class="card-img-top" src={post.urls.thumb} alt="{post.id}"></img>
                        <div class="card-body">
                           
                            <a href={post.urls.raw} class="btn btn-primary">Full image</a>
                        </div>
                    </div>)
            })
        ) : (<div>No posts find</div>)

        return (
                <section className="container">
                    <h4>{this.state.key}</h4>
                    <div className="row text-center">
                        {postList}
                    </div>
                </section>
        )
    }
}

export default App;
