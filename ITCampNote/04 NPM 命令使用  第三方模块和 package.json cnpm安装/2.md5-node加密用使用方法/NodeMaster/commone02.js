// npm install md5-node// 注意：以后安装模块的时候我们要把这个模块写入到 package.json这个配置文件// npm install md5-node --save 写入到package.json 里面的 dependencies// npm install md5-node --save-dev 写入到 package.json 里的的 devDependencies/** * dependencies     配置当前程序所依赖的其它包。 * devDependencies  配置当前程序所依赖的其它包，只会下载模块，而不下载这些模块的测试和文档框架 * @type {md5} *//** * 淘宝镜像源：http://npm.taobao.org/ * 有时的等方面 npm install 模块 * 下载不一睐 或者很慢 * 如果安装成淘宝镜像就要吧用 cnpm 安装 * npm install 模块 / cnpm install 模块 * * * 使用说明 * 你可以使用我们定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm: * $ npm install -g cnpm --registry=https://registry.npm.taobao.org * 或者你直接通过添加 npm 参数 alias 一个新命令: * *  alias cnpm="npm --registry=https://registry.npm.taobao.org \ * --cache=$HOME/.npm/.cache/cnpm \ * --disturl=https://npm.taobao.org/dist \ * --userconfig=$HOME/.cnpmrc" * * # Or alias it in .bashrc or .zshrc * $ echo '\n#alias for cnpm\nalias cnpm="npm --registry=https://registry.npm.taobao.org \ * --cache=$HOME/.npm/.cache/cnpm \ * --disturl=https://npm.taobao.org/dist \ * --userconfig=$HOME/.cnpmrc"' >> ~/.zshrc && source ~/.zshrc * 安装模块 * 从 registry.npm.taobao.org 安装所有模块. 当安装的时候发现安装的模块还没有同步过来, 淘宝 NPM 会自动在后台进行同步, 并且会让你从官方 NPM registry.npmjs.org 进行安装. 下次你再安装这个模块的时候, 就会直接从 淘宝 NPM 安装了. * * $ cnpm install [name] */let md5 = require('md5-node');      // md5加密let sd = require('silly-datetime'); // 日期格式化//console.log('123456');console.log(md5('123456')); // 加密后输出的结果 e10adc3949ba59abbe56e057f20f883elet d = sd.format(new Date(), 'YYYY-MM-DD');console.log(d);