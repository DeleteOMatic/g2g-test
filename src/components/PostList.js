import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { Table } from 'react-bootstrap';
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  constructor(props){
    super(props);
    this.state={ count: 0}
}

  renderList() {
    
    return this.props.posts.map(post => {
      return (
        <tr className="item" key={post.id}>
        <td> {this.state.count + 1}</td>
        <td>{post.title}</td>
        <td>{post.id}</td>
        <td>{post.body}</td>
      </tr>
      );
    });
  }

  render() {
    return <div>
    <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>id</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    {this.renderList()}
    </tbody>
  </Table>
  </div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
