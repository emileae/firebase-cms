import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import {Link, IndexLink} from 'react-router';

// ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from 'material-ui/svg-icons/navigation/menu';


export var Layout = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  handleToggle() {
    var {dispatch, ui} = this.props;
    dispatch(actions.setDrawer(!ui.open))
    //this.setState({active: !this.state.active});
  },
  render() {
    var {ui} = this.props;
    return (
      <div>

        <AppBar
          title="Dashboard"
          iconElementLeft={<IconButton onTouchTap={this.handleToggle}><Menu /></IconButton>}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" onTouchTap={this.onLogout}/>
            </IconMenu>
          }
        />

        {this.props.children}

        <Drawer open={ui.open}>
          <MenuItem rightIcon={<NavigationClose />} onTouchTap={this.handleToggle}>Close</MenuItem>
          <MenuItem>
            <Link to='/dashboard/post'>
              Posts
            </Link>
          </MenuItem>
          <MenuItem>Pages</MenuItem>
          <MenuItem>Media</MenuItem>
        </Drawer>
      </div>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(Layout);
