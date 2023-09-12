/*
 * @Author: 天勇 343975805@qq.com
 * @Date: 2023-09-08 15:20:54
 * @LastEditors: 天勇 343975805@qq.com
 * @LastEditTime: 2023-09-12 13:55:35
 * @FilePath: /react_project_demo/src/index.js
 * @Description: 
 */
// src/index.js 是js的入口文件
// 引入ReactDOMd
import ReactDOM from 'react-dom/client';
/* 引入样式表 */
import './index.css'
// 创建一个JSX
const App = <div className='logs'>
    {/* 日志项 */}
    <div className='item'>
        {/* 日期容器 */}
        <div className='month'>
            四月
        </div>
        <div className='day'>
            19日
        </div>
        {/* 日志内容的容器 */}
        <div className='content'>
            <h2 className='desc'>学习react</h2>
            <div className='time'>
                40分钟
            </div>

        </div>
    </div>

</div>;

// 获取一个根容器
const root = ReactDOM.createRoot(document.getElementById('root'));
// 将App渲染进根容器
root.render(App);
