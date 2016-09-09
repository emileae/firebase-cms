import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

// Layout
import Layout from 'Layout';

// ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export var Dashboard = React.createClass({
  render() {
    var {ui} = this.props;
    return (
      <Layout>
        <div className="row">

          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Number of Posts"
                subtitle="123"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Add Post" />
                <FlatButton label="Edit something" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <Card>
              <CardHeader
                title="Number of Images"
                subtitle="123"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Add Image" />
                <FlatButton label="Edit something" />
              </CardActions>
              <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
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
