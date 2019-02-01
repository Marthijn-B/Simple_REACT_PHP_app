import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import LeftNav from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
 export class AppBarExampleIcon extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             open: false
         };
     }

     openNav() {
        this.setState({
            open: true
          });
     }

     render () {
       return (
         <header>

               <LeftNav
                 docked={false}
                 open={this.state.open}
                 onRequestChange={() => this.setState({open})}
                 >

                 <MenuItem>Menu Item 1</MenuItem>
                 <MenuItem>Menu Item 2</MenuItem>
                 <MenuItem>Menu Item 3</MenuItem>
               </LeftNav>

                <AppBar
                  title="Marthijn Batlajeri"
                  iconElementRight={
                      <FlatButton label="Home"/>
                    }
                />
            </header>

       );
     }
  }

export default AppBarExampleIcon;
