### commit 规范
``` bash
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```
#### type (必填)
type用于说明 commit 的类别，只允许使用下面7个标识。

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation)
* style：格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动
* revert：回滚某个更早之前的提交
* build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
* ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交

#### scope（可选）
scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

#### subject（必填）
subject是 commit 目的的简短描述，不超过50个字符。

例子：
``` bash
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

* 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
* 第一个字母小写
* 结尾不加句号（.）

#### body (可选)
body 部分是对本次 commit 的详细描述，可以分成多行。

* 使用第一人称现在时，比如使用change而不是changed或changes。
* 应该说明代码变动的动机，以及与以前行为的对比。

#### footer (可选)
* 不兼容变动

例子
``` bash
  BREAKING CHANGE: isolate scope bindings definition has changed.

  To migrate the code follow the example below:

  Before:

  scope: {
    myAttr: 'attribute',
  }

  After:

  scope: {
    myAttr: '@',
  }

  The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```  
* 关闭 Issue

例子
``` bash
  Closes #123 || Closes #123, #124, #125
```
#### revert
还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以revert:开头，后面跟着被撤销 Commit 的 Header。

``` bash
  revert: feat(pencil): add 'graphiteWidth' option
  This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```