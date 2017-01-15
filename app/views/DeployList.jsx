import React from 'react'
import {Button,InputGroup,Dropdown,FormControl,Table} from 'tinper-bee'
import Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menu';
const { ColumnGroup, Column } = Table;

function onSelect({ key }) {
    console.log(`${key} selected`);

}

function onVisibleChange(visible) {
    console.log(visible);
}

const data3 = [
  { a: {name: 'wwwwww', id: 'appid73f05062ye'}, b: '正常', c: 'wwwwww.duapp.com', d: '打包上传',e: '1 (修改)', f: '	快捷发布更多操作', key: '1' },
];

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

const header1 = (
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
);

const render = (text, record, index) => {

  return (
  <div>
  <input type="checkbox" />
  <a href="#/bae/env/detail~appid=appid73f05062ye&amp;createType=web" >{text.name}</a>
  <span className="instance-id">{text.id}</span>
  </div>
  );
};

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
                           <Button shape="border" style={{ lineHeight: 1 }}>域名 <span className="uf uf-arrow-down"> </span></Button>
                         </Dropdown>
                    </InputGroup.Button>
                    <FormControl type="text" />
                    <InputGroup.Addon>
                        <span className="uf uf-search"> </span>
                    </InputGroup.Addon>
                </InputGroup>
            </div>
        </div>
        <Table data={data3} className='bordered'>
          <ColumnGroup title={header1}>
            <Column
              title="名称/APPID"
              dataIndex="a"
              key="a"
              width={255}
              render={ render }
            />
            <Column
              id="123"
              title="状态"
              dataIndex="b"
              key="b"
              width={255}
            />
            <Column
              title="域名"
              dataIndex="c"
              key="c"
              width={255}
            />
            <Column
              title="代码管理方式"
              dataIndex="d"
              key="d"
              width={255}
            />
            <Column
              title="资源数"
              dataIndex="e"
              key="e"
              width={255}
            />
            <Column
              title="操作"
              dataIndex="f"
              key="f"
              render={(text, record, index) => {
                return (
                <div>
                    <Button size="sm" colors="info" style={{ minWidth: 50 }}>快捷发布</Button>
                    <Button size="sm" colors="info" style={{ minWidth: 50 }}>更多操作</Button>
                </div>
                );
              }}
            />
          </ColumnGroup>
        </Table>
    </div>
)
