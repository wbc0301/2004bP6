# vue-cli 

1. 安装 vue-cli：
    在终端中执行： `npm install -g @vue/cli`  `yarn global add @vue/cli`

2. 创建项目过程：
    `vue create my-project`     // my-project 是项目名字， 可自定义
        以下为选项：

        manually select features

        Babel
        CSS Pre-processors

        Sass/Scss (with node-sass)

        In package.json

4. 项目创建成功后会出现两个命令
    `cd 项目名称`
    `npm run serve` 或者 `yarn serve`

5. 脚手架项目目录介绍：
    1. package.json  // 项目描述文件
    2. public        // 项目公共静态资源文件夹
    3. src           // 项目源码文件夹   （在这个文件夹中开发）
    4. main.js       // 项目入口文件
    5. App.vue       // 项目根组件

    开发中需要的 webpack 配置 脚手架工具已经帮我们配置好了，所以开发人员只需把精力放在业务开发上就好了。

6. .vue 文件介绍：
    一个 .vue 文件就是一个 Vue 的实例。
    一个 .vue 文件就是一个 vue 的组件。
    每个组件是在 HTML CSS JS 层的综合封装。 （我们之前学的 js 模块化仅仅是在 JS 层的封装）
    所以每个组件可以有自己的 HTML 模板，CSS 样式和 JS 逻辑。

    分别对应文件中的三块内容：
    ```html
        <!-- 模板 -->
        <template>
            <div>
                <span>hello</span>
            </div>
        </template>

        <!-- 数据 逻辑 -->
        <script>
        export default {

        }
        </script>

        <!-- 样式 -->
        <style>

        </style>
    ```
        注意：
        1：组件选项中没有 `el` 选项
        2：组件的 `data` 选项必须是函数
        3：组件必须是单个根元素

5. 在父组件中使用子组件：
    ```js
        // 1: 引 入组件
        import One from './components/one';
        import Two from './components/two';

        // 2：注册组件
        components: {
            One,
            Two
        }

        // 3: 使用组件
        <one></one>
        <two></two>
    ```
    
6. 组件的生命周期：
    Vue 把组件从开始创建到最终销毁的整个过程中分为一个个的阶段，
    在每个阶段 Vue 都会调用相应的函数（就是所谓的：生命周期钩子函数），
    我们要做的仅仅是把我们要执行的代码放在正确的钩子函数中，vue会帮我们调用。

