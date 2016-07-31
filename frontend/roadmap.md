前端技能图谱详解：真正的从入门到放弃
---

> 本文可能会严重打击你的自信心，请做心里准备。。。

在完整APP的迁移之后，终于可以好好写这些内容了。第一篇就是对之前的前端技能图谱进行一些细致的解释。当然这些是个人的经验，所以可存在一些区别，不过总的来说还是差不多的。

### 入门

在我理解下的基础知识，就是我们可以写一些基本的样式，并能对页面的元素进行操作。举例来说，就是我们用Spring和JSP写了一个博客，然后我们可以用jQuery来对页面进行一些简单的操作，并可以调用一些API。因此，我们需要基本的HTML / CSS知识。只是要写好CSS并不是一件简单的事，这需要很多实战经验。随后，我们还需要有JavaScript的经验，要不怎么做前端呢？

同时，我们还需要对DOM有一些基础的了解，才能做一些基本的操作，如修改颜色等等。在这种情况下，最简单的方案就是使用jQuery这样的工具。不过，如果可以自己操作DOM是再好不过的了。

### 中级篇 

中级篇就更有意思了，现在我们就需要对页面进行更复杂的操作。Ajax和JSON这两个技能是必须的，当我们要动态的改变页面的元素时，我们就需要从远程获取最新的数据结果。并且我们也需要提交表单到服务器，RESTful就是必须要学会的技能。未来我们还需要Fetch API，ReactiveX这些技能。

除此我们还需要掌握好HTML的语义化，像DIV / CSS这也会必须会的技能，我们应该还会使用模板引擎和SCSS / SASS。而这个层面来说，我们开始使用Node.js来完成前端的构建等等的一系列动作，这时候必须学会使用命令行这类工具。并且，在这时候我们已经开始构建单页面应用了。

### 高级篇

JavaScript是一门易上手的语言，也充满了相当多的糟粕的用法。几年前人们使用CoffeeScript编成成JavaScript来编写更好的前端代码，现在人们有了ES6、TypeScript和WebPack来做这些事。尽管现在浏览器支持不完善，但是他们是未来。同样的还有某些CSS3的特性，其对于某些浏览器来说也是不支持的。而这些都是基于语言本来说的，要写好代码，我们还需要掌握面向对象编程、函数式编程、MVC / MVVM / MV*这些概念。作为一合格的工程师，我们还需要把握好安全性（如跨域），做好 授权（如HTTP Basic、JWT等等）。

### 工程化

   * 代码质量（如JSLint / ESLint / TSLint / CSLint）
   * 代码分析（如Code Climate）
   * 测试覆盖率
   * 构建系统（gulp、grunt、webpack等等）
   * 自动构建（脚本）
 - 兼容性
   *  跨浏览器测试 （Chrome，IE，Firefox，Safari等等）
   *  跨平台测试（Windows、GNU/Linux，Mac OS等等）
   *  跨设备测试（Desktop，Android，iOS，Windows Phone）
   *  跨版本测试（同一个浏览器的不同版本）
 - 前端特定
   * CSS / CSS3 动画
   * JavaScript 动画
   * Web字体嵌入
   * Icon 字体
   * 图形和图表
   *  CSS Sprite（如glue）
   * DOM操作（如jQuery、React等等）
   * 模板引擎（如JSX、Handlebars、JSP、Mustache等等）
 - 软件工程
   * 版本管理（如git、svn） 
   * 包管理（如npm、bower）
   * 依赖管理
   * 模块化（如CommonJS、WebPack）
 - 调试
   * 浏览器调试
   * Debug工具
   * Wireshark / Charles抓包
   * 远程设备调试（如Chrome Inspect Devices）
 - 测试
   * 单元测试
   * 服务测试
   * UI测试
   * 集成测试
 - 性能与优化
   * PageSpeed / Yslow 优化
   * 加载优化（如gzip压缩、缓存等等）
   * 性能测试（特别是移动Web）
   * 可用性
   * 压缩（如Minify、Uglify、CleanCSS等等）
 - 设计
   * 切页面
   * 线框图（Wireframe）
   * 响应式设计
   * 网格布局（Grid Layout）
   * Flexbox布局
 - SEO
   * Sitemap（站点地图）
   * 内部链接建设
   * MicroData / MicroFormat
   * 页面静态内容生成
   * H1、H2、H3和strong使用
   * Title、Description优化
   * 页面静态内容生成