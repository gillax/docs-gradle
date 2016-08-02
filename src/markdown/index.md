# docs-gradle
gradle-based markdown web server. 


markdown-gradle-pluginでmarkdownをHTMLに変換しGitHubライクなCSSで表示します。
HTTPサーバーとしてvert.x2を使っています。

_gradleのwrapperでmarkdownの変換とHTTPサーバーの起動ができるためJVM環境があればほぼほぼ使えると思います_



Usage
----------

1. markdownファイルを`src/markdown`に配置
1. `./gradlew server` を実行
1. ブラウザで http://localhost:8080 にアクセス

markdown-gradle-pluginのタスク `markdownToHtml` でmarkdownファイルをHTMLに変換します。
`server` タスクは、依存している `markdownToHtml` タスクを事前に実行します。


Config
----------
基本はmarkdown-gradle-pluginの設定で、vert.xの起動ポートを追加で設定できます。

gradle.properties に記載する場合

```
httpPort=3000
```

gradleの引数で指定する場合

```
./gradlew server -PhttpPort=3000
```


Docker
-----------
Dockerfileを使ってJVM環境がない場合でも確認できます。

Dockerを使って確認する方法は下記:

docker imageがない場合はビルドして

```
$ docker build --rm . -t docs-gradle
```

コンテナでサーバーを起動してブラウザで挙動を確認できます。

```
$ docker run -d -p 80:8080 -v $(pwd)/src:/opt/docs-gradle/src --name docs-gradle docs-gradle
```

もしくは

```
$ docker run -it --rm -p 80:8080 -v $(pwd)/src:/opt/docs-gradle/src docs-gradle bash
```

でコンテナ内からgradleタスクを確認できます。



Project Dependencies
-----------

- Gradle - https://gradle.org/
- markdown-gradle-plugin - https://github.com/aalmiray/markdown-gradle-plugin
- Vert.x 2 - http://vertx.io/vertx2/
- andyferra/github.css - https://gist.github.com/andyferra/2554919


別ページヘのリンク
------------
- [other page](other_page.html)
- [ページ内リンク](other_page.html#link)
