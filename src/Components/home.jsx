import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        posts: [],
        isLoaded: false
    };
    componentDidMount() {
        axios.get('https://api.unsplash.com/photos?client_id=ff495689b361190a0972ecc2b87f242a3bf8bd377ce6ae0323a601dc716547b0')
            .then(res => {
                console.log(this.props)
                this.setState({
                    posts: res.data,
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
                        <img className="card-img-top" src={post.urls.thumb} alt="{post.id}"></img>
                        <div className="card-body">
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

export default Home;
