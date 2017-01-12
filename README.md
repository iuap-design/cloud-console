# 运维开发者中心

## HOW TO

```
"precommit": "npm run lint",
"commitmsg": "npm run lint:msg",
"lint": "eslint 'app/**/*.@(js|jsx)'",
"lint:msg": "validate-commit-msg",
"build": "webpack",
"start": "webpack-dev-server --devtool eval --progress --hot --content-base app",
"deploy": "NODE_ENV=production webpack --config webpack.production.config.js",
"deploy-windows": "SET NODE_ENV=production & webpack --config webpack.production.config.js",
"validate": "npm ls",
"commit": "git cz",
"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 1"
```

## app 下各目录说明

| # | 描述 |
| --- | --- |
| assets | 图片，公共的css，音频等静态资源 |
| components | 展示型组件  |
| containers | 容器型组件，和redux的store通讯 |
| layouts | 应用的布局类组件，比如Nav,header,footer等 |
| routers | 路由相关的配置 |
| utils | 一些公共的方法API等 |
| views | 和路由对应的页面级组件 |
| redux | redux的store和reducer整体配置 |
