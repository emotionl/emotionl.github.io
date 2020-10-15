# 小程序与原生App

## 如何获取到相同的UnionID

如果开发者帐号下存在**同主体的**公众号或移动应用，并且该用户已经授权登录过该公众号或移动应用。开发者也可以直接通过 [`wx.login`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.login.html) + [`code2Session`](https://developers.weixin.qq.com/miniprogram/dev/api-backend/code2Session.html) 获取到该用户 UnionID ，无须用户再次授权。

> [UnionID 机制说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html)
>
> [微信开放平台](https://open.weixin.qq.com)
>
> [微信公众平台](https://mp.weixin.qq.com)

