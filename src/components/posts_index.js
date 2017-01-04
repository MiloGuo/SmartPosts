import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {


    componentWillMount() {
        //console.log('This would be a good time to call an action creators to fetch posts');
        this.props.fetchPosts();
    }
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <div>
                            <span className="pull-xs-right">{post.categories}</span>
                        </div>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
                );
        });
    }

    render() {
        return (
            <div>
                <div style={{float:'right', marginTop:'5px'}}>
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>posts</h3>
                <ul className="list-group" style={{marginTop:'30px'}}>
                    {this.renderPosts()}
                </ul>
            </div>
            );
    }
}

/**function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPosts}, dispatch);
}*/
function mapStateToProps(state) {
    return { posts: state.posts.all};
}

//export default connect(null, mapDispatchToProps)(PostIndex);
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostIndex);
// export default connect(null, {fetchPosts})(PostIndex);