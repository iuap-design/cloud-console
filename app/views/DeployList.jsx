import React from 'react'
import {Button,InputGroup,Dropdown,FormControl} from 'tinper-bee'
import Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menu';

function onSelect({ key }) {
    console.log(`${key} selected`);

}

function onVisibleChange(visible) {
    console.log(visible);
}

const menu1 = (
 <Menu
   multiple
   onSelect={onSelect}>
   <MenuItem key="1">借款合同</MenuItem>
   <MenuItem key="2">抵/质押合同</MenuItem>
   <MenuItem key="3">担保合同</MenuItem>
   <MenuItem key="4">联保合同</MenuItem>
   <Divider />
   <MenuItem key="5">合同审批</MenuItem>
   <MenuItem key="6">抵/质押合同跟踪</MenuItem>
 </Menu>
);

export default (props) => (
    <div>
        <h3> 部署列表 </h3>

        <div className="top">
            <div className="hint">
                注意：自定义应用休眠或重启后本地临时文件将被自动清理。
                <a target="_blank" href="http://bce.baidu.com/doc/BAE/Nodejs.html#.E5.BC.80.E5.8F.91.E8.80.85.E4.BD.BF.E7.94.A8.E6.B3.A8.E6.84.8F">查看详情</a>
            </div>
            <div className="filter-wrap">
                <InputGroup>
                    <InputGroup.Button shape="border">
                        <Dropdown
                           trigger={['click']}
                           overlay={menu1}
                           animation="slide-up"
                           onVisibleChange={onVisibleChange}
                         >
                           <Button shape="border">域名 <span className="uf uf-arrow-down"> </span></Button>
                         </Dropdown>
                    </InputGroup.Button>
                    <FormControl type="text" />
                    <InputGroup.Addon>
                        <span className="uf uf-search"> </span>
                    </InputGroup.Addon>
                </InputGroup>
            </div>
        </div>
        <div className="buttons-wrap">
            <Button size="sm" colors="primary" >+ 添加部署</Button>
            <Button size="sm" colors="primary" >+ 部署微信公众号</Button>
            <Button size="sm" disabled shape="border">休眠</Button>
            <Button size="sm" disabled shape="border">开启</Button>
            <Button size="sm" disabled shape="border">删除</Button>

            <div className="buttons-right">
                <Button size="sm" shape="border"><span className="uf uf-settings"></span></Button>
                <Button size="sm" shape="border"><span className="uf uf-sync-c-o"></span></Button>
            </div>
        </div>
        <div>
            <table className="ui-table-head">
                <tbody>
                <tr>
                    <th>
                        <input type="checkbox" />
                        名称/APPID
                    </th>
                    <th>状态</th>
                    <th>域名</th>
                    <th>代码管理方式</th>
                    <th>资源数</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                        <a href="#/bae/env/detail~appid=appid73f05062ye&amp;createType=web" >wwwwww</a>
                        <span className="instance-id">    appid73f05062ye</span>
                    </td>
                    <td>
                        <span className="status normal">正常</span>
                    </td>
                    <td>
                        <a target="_blank" className="app-list-copy-item" href="http://wwwwww.duapp.com">wwwwww.duapp.com</a>
                    </td>
                    <td>
                        <a href="#/bae/env/option~appid=appid73f05062ye&amp;createType=web">打包上传</a>
                    </td>
                    <td>
                        1
                        <a href="#/bae/app/resource~appid=appid73f05062ye&amp;createType=web">     (修改)   </a>
                    </td>
                    <td>
                        <span >快捷发布</span>
                        <span >更多操作</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)
