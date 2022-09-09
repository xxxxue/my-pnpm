从 npm 中生成一个 token

然后在终端中执行以下命令，把 token 追加到「等号」后面

```bash
设置 token
npm config set //registry.npmjs.org/:_authToken=

发布
npm publish --registry=https://registry.npmjs.org

删除
npm unpublish my-pnpm@1.0.1 --registry=https://registry.npmjs.org
```
