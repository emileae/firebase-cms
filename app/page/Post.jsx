import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

// Layout
import Layout from 'Layout';

// ui
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';


export var Dashboard = React.createClass({
  getPosts() {

  },
  handlePostSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var {postTitle, postBody} = this.refs;
    console.log("postTitle", postTitle.getValue());
    console.log("postBody", postBody.getValue());

    var postData = {
      title: postTitle.getValue(),
      body: postBody.getValue()
    };

    dispatch(actions.startAddPost(postData));

    postTitle.setValue('');
    postBody.setValue('');

  },
  componentDidMount() {
    var {dispatch} = this.props;
    dispatch(actions.startAddPosts());
  },
  render() {
    var {ui, posts} = this.props;

    var renderPosts = () => {
      return posts.map((post) => {
        return (
          <ListItem primaryText={post.title} key={post.id} {...post} />
        );
      })
    };

    return (
      <Layout>
        <form onSubmit={this.handlePostSubmit}>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <TextField
                ref="postTitle"
                floatingLabelText="Post Title"
              />
            </div>
            <div className="col-xs-10 col-xs-offset-1">
              <TextField
                ref="postBody"
                floatingLabelText="Post Body"
                multiLine={true}
              />
            </div>
            <div className="col-xs-10 col-xs-offset-1">
              <FlatButton label="Save" type="submit" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Posts</h1>
            <List>
              {renderPosts()}
            </List>
          </div>
        </div>

      </Layout>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(Dashboard);
