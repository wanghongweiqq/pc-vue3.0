# vue3.0的demo6

## 创建步骤
1. sudo npm install -g @vue/cli  //vue -V，如果cli已安装需要注意其版本应该高于cli4.x，没有sudo可能会报权限问题，Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
2. vue create vue-demo   //vue ui 命令可以图形化界面创建和管理项目

## 问题汇总
1. sass-loader不要安装最新版本（11及以上），否则会报错，有人说webpack升级到5及以上可以使用最新版本的sass-loader，但尝试并没有用，现在用的10版本的
2. node版本：14.16.0，不要使用最新的16.0.0，npm install会报错，尽量不要使用cnpma安装，会运行报错，有可能淘宝是淘宝镜像同步的问题，也不要使用10版本的，serve的时候会报错
3. element-ui使用兼容vue3.0版本的[Element Plus](https://element-plus.gitee.io/)
4. css公共变量引入，对sass-loader版本有要求，属性：loaderOptions 版本11:有兼容性问题（this.getOptions is not a function）； 版本9-10：additionalData； 版本8：prependData，更早的版本使用：data