# node-end
提供接口
#vscode node工程调试环境配置 是node得源文件支持debug
https://www.v2ex.com/t/391485#reply11
https://github.com/Monsoir/Notes/blob/master/Visual%20Studio%20Code/Visual%20Studio%20Code%20%E4%B8%AD%E8%B0%83%E8%AF%95%E4%BD%BF%E7%94%A8%20ES6%20%E7%89%B9%E6%80%A7%E7%9A%84%20Node.js.md

https://babeljs.io/docs/usage/cli/#babel-compile-with-source-maps

## 文件目录
`exercises`文件夹存放node.js练习文件

## Node运行和调试
1.以CLI的方式运行
    
    $ node 
2.执行脚本文件,例如hello_world.js
    
    $ node hello_world.js
## Babel转码器
### 配置文件.babelrc
存放在项目的根目录下，使用babel的第一步就是配置这个文件。该文件用来设置**转码规则和插件**，基本规则如下：
    
    {
        "presents":[], 
        "plugins":[]
    }   

`presents`字段设定转码规则。

### 命令行转码babel-cli
### babel-none
babel-cli工具自带的babel-node命令，提供一个支持es6的REPL环境。   
执行`babel-node`可以进入REPL环境：

    $babel-node
    >(x=>x*2)(1)
    2

babel-node命令可以直接运行es6脚本，将上面的脚本放入es6.js，然后直接运行：

    $babel-node es6.js

### babel-register
实时转码，只适合在开发环境中使用
### babel-core
某些代码需要调用babel的API进行转码，就需要使用babel-core模块




