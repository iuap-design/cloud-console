import React,{Component} from 'react';
import {Navbar,FormControl,Badge,Con,Col,Tile,Icon,Dropdown,Button,InputGroup} from 'tinper-bee';

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

import styles from './index.css'

class SideNav extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: '1',
            openKeys: []
        }
        this.myfilter = this.myfilter.bind(this);
    }
    handleClick(e) {
        console.log('Clicked: ', e);
        this.setState({current: e.key});
    }
    onOpenChange(openKeys) {
        const state = this.state;

        const latestOpenKey = this.myfilter(openKeys,state.openKeys);
        const latestCloseKey = this.myfilter(state.openKeys,openKeys);

         /*   const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
            const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));*/

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({openKeys: nextOpenKeys});
    }
    //IE下 array.find（）方法不可用
    myfilter(arr1,arr2) {
        if(arr2.length == 0 || !arr2) {
            return arr1[0];
        }

        for(var i=0;i<arr1.length;i++)
        {
          if(arr2.indexOf(arr1[i].toString())==-1)
          {
                return arr1[i];
          }
        }
        return false;
    }
    getAncestorKeys(key) {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
    render() {
        return (
          <div className="">
          	<SideContainer>
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                onOpenChange={this.onOpenChange.bind(this)}
                onClick={this.handleClick.bind(this)} >
                  <SubMenu key="sub1" title={<span>BAE 专业版</span>}>
                      <Menu.Item key="1">部署列表</Menu.Item>
                      <Menu.Item key="2">扩展服务</Menu.Item>
                      <Menu.Item key="3">自动测试</Menu.Item>
                      <Menu.Item key="4">配额管理</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span>BAE 基础班</span>}>
                      <Menu.Item key="5"><a href="#list">部署列表</a></Menu.Item>
                      <Menu.Item key="6">扩展服务</Menu.Item>
                      <Menu.Item key="7">自动测试</Menu.Item>
                      <Menu.Item key="8">配额管理</Menu.Item>
                  </SubMenu>
              </Menu>
              </SideContainer>
          </div>
        )
    }
}

export default SideNav;
