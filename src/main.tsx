/*
 * @Author: obsidian
 * @Date: 2023-07-12 19:35:44
 * @LastEditTime: 2023-07-12 20:36:58
 * @LastEditors: obsidian
 * @FilePath: \hdf-manager-app-public\src\main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.compact.css' // 引入紧凑主题
import zhCN from 'antd/lib/locale/zh_CN'
import { HashRouter as Router} from 'react-router-dom'
import App from './App.tsx'
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Router>
)
