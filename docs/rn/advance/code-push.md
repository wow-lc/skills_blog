---
title: CodePush
---
# Code Push 热更新

生成bundle命令 react-native bundle --platform 平台 --entry-file 启动文件 --bundle-output 打包js输出文件 --assets-dest 资源输出目录 --dev 是否调试

上传bundle

将生成的bundle文件上传到CodePush，我们直接执行下面的命令即可
$ code-push release-react <Appname> <Platform> --t <本更新包面向的旧版本号> --des <本次更新说明>

查询Production

$ code-push deployment history projectName Production

查询Staging

$ code-push deployment history projectName Staging
