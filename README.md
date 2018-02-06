# Hello webpack
Webpack HW app, wrapped with Docker Compose

![](https://i.imgur.com/TXiAXu0.png)

## Dev dependencies
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [file-loader](https://github.com/webpack-contrib/file-loader)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [webpack](https://github.com/webpack/webpack)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## Requirements
- Docker Compose [1.10.0 or above](https://docs.docker.com/release-notes/docker-compose/#1100-2017-01-18)

## Installation
```
docker-compose run node yarn install
```

## Usage
1. Run ```docker-compose up``` in your terminal
2. Open [localhost:3000/index.html](http://localhost:3000/index.html) in your browser
3. You must see ```Hello webpack!``` text
4. Change the app like you need

## License
[MIT](https://opensource.org/licenses/MIT)

## See also
- [webpack configuration](https://webpack.js.org/configuration/)
- [Node.js Guides](https://nodejs.org/en/docs/guides/)
- [Docker Compose overview](https://docs.docker.com/compose/overview/)
