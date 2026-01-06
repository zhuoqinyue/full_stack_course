## 课程
这是一个前后端全栈的[课程](https://fullstackopen.com/en), 对于如何理解前后端各自工作, 各自合作运行有很好的帮助

## 设置

设置单独的 git 配置

```bash
git config user.name "私人的邮箱"
git config user.email "私人的用户名"

# 查看该仓库的配置
git config --list
```

进入 `.git` 目录配置要上传的路径(有令牌)
```git
[remote "origin"]
    url = https://YOUR_TOKEN@github.com/yourusername/test-repo.git
    fetch = +refs/heads/*:refs/remotes/origin/*
```

## 运行项目
该项目有前后端项目, 使用的时候需要同时启动
- `ex_ba` 代表后端项目
- `ex_fr` 代表前端项目

### 后端项目
后端项目使用 `Express` + `Mangodb`

也集成一些好用的依赖
- `mongoose` 操作 `mangodb` 数据库
- `jsonwebtoken` 生成 jwt token
- `bcrypt` 生成哈希值
- `morgan` 记录请求日志


```bash
## 运行
npm run dev

## 检查格式化
npm run lint

## 格式化
npm run fix
```

### 前端项目
前端项目使用 `Vite` + `React` + `React Router` + `Shadcn UI`

```bash
## 运行
npm run dev
```