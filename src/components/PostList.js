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
countUpdate(){
 // this.setState({ count: this.state.count + 1 })
 return 1;
}
  renderList() {
    return this.props.posts.map(post => {
      var rowNumber = this.countUpdate();
      return (
        <tr className="item" key={post.id}>
        <td><strong>{post.id - rowNumber}</strong></td>
        <td>{post.title}</td>
        <td>{post.id}</td>
        <td>{post.body}</td>
      </tr>
      );
      
    });
  }

  render() {
    return <div>
    <Table responsive bordered>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Id</th>
        <th>Body</th>
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
