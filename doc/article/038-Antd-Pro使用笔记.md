antd-pro 使用笔记

## 添加路由

需要在 `/config/routerConfig`页面添加路由配置

## 使用iconfont作为菜单的图表

关键代码

```javascript
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1518170_y303tp23nz.js',
});

const getIcon = icon => {
  console.log(icon, isMenuIcon(icon))
  if (typeof icon === 'string' && isUrl(icon)) {
    return <img src={icon} alt="icon" className={styles.icon} />;
  }
  // isMenuIcon 在/utils/utils.js中声明 
  if (isMenuIcon(icon)) {
    return <IconFont type={'icon-' + icon} />
  }
  if (typeof icon === 'string') {
    return <Icon type={icon} />;
  }
  return icon;
};
```

## 添加webpack配置

需要在 `/config/webpackConfig`中使用 `webpack-chain`  添加 `webpack` 配置

举个例子  给 `webpakc` 添加一个新的 `alias`配置

```javascript
const path = require('path')
const { resolve } = path
export const webpackChain = (config, { webpack }) => {
  config.resolve.alias
    .set('config', resolve('./config'))
}
```

## 解决菜单选中项图标不变色问题

解决方法：

通过 iconfont 将字体图标批量去色

​    ![18](./../../assets/image/18.png)

> [关于symbol引用](https://github.com/thx/iconfont-plus/issues/350#issuecomment-278269496)
>
> [SVG 图标制作指南](https://zhuanlan.zhihu.com/p/20753791?refer=FrontendMagazine)

## 添加区块模板

在很多时候可以直接使用 `Antd Pro`内建的模板去搭建页面

1. 通过 `http://localhost:3000/`打开 `Umi UI`
2. 选择你正在开发项目
3. 资产 => 模板，选择需要的模板添加即可
​    ![19](./../../assets/image/19.png)

## 登录状态的维护和拦截

1. 修改`/src/layouts/SecurityLayout.jsx`把 isLogin 的判断逻辑替换成自己的认证规则

   ```jsx
   render() {
       const { isReady } = this.state;
       const { children, loading, currentUser } = this.props; 
       // 关键代码 start
       const isLogin = sessionStorage.getItem('isLogin') === '1' ? true : false;
       // 关键代码 end
       const queryString = stringify({
         redirect: window.location.href,
       });
       if ((!isLogin && loading) || !isReady) {
         return <PageLoading />;
       }
       if (!isLogin) {
         return <Redirect to={`/user/login?${queryString}`}></Redirect>;
       }
   	return children;
     }
   ```

2. 修改 `/src/models/login.js` 

   ```js
   effects : {
       *login({ payload }, { call, put }) {
           const response = yield call(fakeAccountLogin, payload);
           yield put({
               type: 'changeLoginStatus',
               payload: response,
           }); 
           // Login successfully
           if (response.status === 'ok') {
               // 设置登录状态
               sessionStorage.setItem('isLogin', '1')
           }
       },
       *logout(_, { put }) {
           // 清除登录状态
           sessionStorage.clear();
       }
   },
   ```

## 使用iconfont的最新方法

1. 在 `/config/defaultSettings.js`中设置`iconfontUrl`

2. 在配置路由的时候要注意每个路由在配置 `icon`属性的时候，值都是形如`icon-`这样的 

   ```javascript
   {
       path: '/xxx',
       name: 'XXXPage',
       icon: 'icon-xxx'
   }
   ```

## 集成 Unity TODO

## Unity3D开发之 webgl 键盘事件监听和其他js输入冲突问题

https://blog.csdn.net/qq_33994566/article/details/103304752

## 关闭Umi ui可视化编程辅助工具 

https://github.com/ant-design/ant-design-pro/issues/5411

## Adjust On Window Resize 自适应

https://github.com/elraccoone/react-unity-webgl/wiki/Unity-Config