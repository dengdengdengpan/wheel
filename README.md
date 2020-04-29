# Wheel - 一个 Vue UI 轮子

## 介绍
学习 Vue 的过程中做的一个 UI 框架，希望对你有用

## 开始使用
1. 添加 CSS 样式
  ```
  *, *::beftore, *::after {
    margin: 0;
    paddingZ: 0;
    box-sizing: border-box;
  }
  :root {
    --font-size: 14px;
    --color: #333;
    --button-height: 32px;
    --button-border-radius: 4px;
    --button-border-color: #999;
    --button-border-color-hover: #666;
    --button-bg: #fff;
    --button-bg-active: #eee;
  }
  ```

2. 安装 wheel
  ```
  npm install -S dp-wheel
  ```

3. 引入 wheel
  ```
  import { WButton } from 'dp-wheel'
  import 'dp-wheel/dist/index.css'

  export default {
    components: { WButton }
  }
  ```
4. 引入 svg symbol
  ```
  <script src="///at.alicdn.com/t/font_1305117_zhjdjl69u9b.js"></script>
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 代码贡献