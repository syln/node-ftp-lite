## node-ftp-lite

> a wrapeer for the node-ftp-client and node-ftp

### Install

```js

npm install ftp-lite

```

### Usage

create a new `ftp.conf.json` in your root dir, it should be like this:

```js
{
    "host":"your ftp host",
    "user":"username",
    "port":21, //default port
    "source":"source", //support file or directories as 'abc.txt' or 'dir/**'.
    "remote":"Directory/", //remote path.
    "baseDir":"ftp-test"  //the base-dir of remote dir,if your remote directory have sub dir.
}

```

then add option in your package.json:

```js

"scripts": {
    "push":" your compile task && ftplite " //upload files automatically after compiling.
  },


```

### 用法

在项目根目录创建`ftp.conf.json`:

```js
{
    "host":"your ftp host",   //服务器地址
    "user":"username", //用户名
    "port":21, //默认端口
    "source":"source", //可以上传目录或文件
    "remote":"Directory/", // 服务器中的目录
    "baseDir":"ftp-test"  //如果上传到嵌套目录中，需要设置相应目录
}

```

在`package.json`中脚本配置相应的动作

```js

"scripts": {
    "push":" your compile task && ftplite " //主要用于前端项目打包后自动上传到ftp服务器
  },


```



