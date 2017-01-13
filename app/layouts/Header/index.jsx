import React,{Component} from 'react';
import {Navbar,FormControl,Badge,Con,Col,Tile,Icon,Dropdown,Button,InputGroup} from 'tinper-bee';

import logo from "../../assets/img/logo.png";

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;
const SideContainer = Navbar.SideContainer;

class ConsoleHeader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: 1
        }
    }

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <Navbar
              fluid={true}
              className="console-navbar">
                <Header>
                    <Brand>
                        <a href="#"><img style={{width:70}} src={logo} /></a>
                    </Brand>
                </Header>
                <Nav className="console-nav">
                    <Menu mode="horizontal" className="dropdown">
                    	<SubMenu key="1.1" title={<span>华北-北京<Icon type="uf-arrow-down"></Icon></span>}>
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </SubMenu>
                    	<Menu.Item key="1.2">
		                    管理控制台
		                  </Menu.Item>
                      <SubMenu key="1.3" title={<span>产品服务<Icon type="uf-arrow-down"></Icon></span>}>
                          <Menu.Item key="setting:1.3.1">Option 1</Menu.Item>
                          <Menu.Item key="setting:1.3.2">Option 2</Menu.Item>
                          <Menu.Item key="setting:1.3.3">Option 3</Menu.Item>
                          <Menu.Item key="setting:1.3.4">Option 4</Menu.Item>
                      </SubMenu>
                      <SubMenu key="1.4" title={<span>文档与工具<Icon type="uf-arrow-down"></Icon></span>}>
                          <Menu.Item key="setting:1.4.1">Option 1</Menu.Item>
                          <Menu.Item key="setting:1.4.2">Option 2</Menu.Item>
                          <Menu.Item key="setting:1.4.3">Option 3</Menu.Item>
                          <Menu.Item key="setting:1.4.4">Option 4</Menu.Item>
                      </SubMenu>
                    </Menu>
                </Nav>
                <Nav pullRight>
                	 <NavItem className="form-item">
                	 	<InputGroup simple>
      					        <FormControl style={{width:230}} type="text" />
      					        <InputGroup.Button shape="border">
          					 			<span className="uf uf-search"> </span>
          					 		</InputGroup.Button>
      					    </InputGroup>
                	</NavItem>
                  <NavItem>
                  	单位
                  </NavItem>
                  <NavItem>
                  	站内信<Badge className="danger">133</Badge>
                  </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default ConsoleHeader;
