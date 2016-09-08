import React from 'react';
import * as Redux from 'react-redux';

//var TodoList = require('TodoList');
import TodoList from 'TodoList';
import TodoForm from 'TodoForm';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

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


export var TodoApp = React.createClass({
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

        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
          style={{
            float: 'right'
          }}
        />

        <Drawer open={ui.open}>
          <MenuItem rightIcon={<NavigationClose />} onTouchTap={this.handleToggle}>Close</MenuItem>
          <MenuItem>Posts</MenuItem>
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
)(TodoApp);


// old Foundation code

// <div>
//
//   <div className="off-canvas-wrapper">
//     <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
//       <div className="off-canvas position-left" id="offCanvas" data-off-canvas>
//
//         <!-- Close button -->
//         <button className="close-button" aria-label="Close menu" type="button" data-close>
//           <span aria-hidden="true">&times;</span>
//         </button>
//
//         <ul className="vertical menu">
//           <li><a href="#">Foundation</a></li>
//           <li><a href="#">Dot</a></li>
//           <li><a href="#">ZURB</a></li>
//           <li><a href="#">Com</a></li>
//           <li><a href="#">Slash</a></li>
//           <li><a href="#">Sites</a></li>
//         </ul>
//
//       </div>
//
//       <div className="off-canvas-content" data-off-canvas-content>
//
//         <div className="title-bar">
//           <div className="title-bar-left">
//             <button className="menu-icon" type="button" data-open="offCanvasLeft"></button>
//             <span className="title-bar-title">Foundation</span>
//           </div>
//         </div>
//
//         <div className="page-actions">
//           <a href="#" onClick={this.onLogout}>Logout</a>
//         </div>
//
//         <h1 className="page-title">Todo App</h1>
//
//         <div className="row">
//           <div className="column small-centered small-11 medium-6 large-5">
//             <div className="container">
//               <TodoSearch/>
//               <TodoList/>
//               <TodoForm/>
//             </div>
//           </div>
//         </div>
//
//       </div>
//     </div>
//   </div>
//
//
// </div>
