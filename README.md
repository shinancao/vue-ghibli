## Introduction

[View Demo Online](http://shinancao.cn/vue-ghibli/)

This project used [ghibli free api](https://ghibliapi.herokuapp.com/) to display things about ghibli flims. But its mainly purpose is show how to use Vue.js ecosystem. And I hope this project could help Vue.js starters to learn about how to develop a complete Vue.js web app.

The technology skills includes:

* Use [Vuex]() to manage app states.
* Use [Vue Router]() to manage app routers.
* Use [axios]() to request APIs.
* Use [Element UI]() to build UI layout.
* Use [SCSS]() to write the components styles.
* Show how to use [express-proxy-mock]() to mock data at local development.
* The code style complys with [official guide]().


Once you are familiar with above items, you don't need to setup them from start, you can init your project with the following command next time.

```
$ vue init shinancao/webpack my-project
```

*It based on vue-cli 2.x.*

## Build Setup

```bash
# clone this project
git@github.com:shinancao/vue-ghibli.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Mock API:

open `http://localhost:8080/config` in browser, then you will see the configure panel.
