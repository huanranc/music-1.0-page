import React, { Component } from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import './Navbar.css';

class ButtonGroup extends Component {

  render(){
    const ButtonGroup = Button.Group;
    return(
      <ButtonGroup className="button-group">
        <Button><Icon type="left" /></Button>
        <Button><Icon type="right" /></Button>
      </ButtonGroup>
    );
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state={search:''};
  }

  emitEmpty = () => {
    this.searchInput.focus();
    this.setState({search:''});
  }
  handleChange = (e) => {
    this.setState({search: e.target.value});
  }
  render(){
    const {search} = this.state;
    const suffix= search ?<Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return(
      <div className="search-box">
        <Input 
          placeholder="Search..." 
          className="search-box-body" 
          prefix={<Icon type="search" />}
          suffix={suffix} 
          value={search}
          onChange={this.handleChange}
          ref={node => this.searchInput=node}
        />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" style={{ position: 'fixed', width: '100%' }}>
        <ButtonGroup />
        <SearchBox />
      </nav>
    );
  }
}

export default Navbar;
