import React from "react";

const Header = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li><strong>公募基金投资指标</strong></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/jerryshell/fund-web" target="_blank">GitHub</a></li>
                </ul>
            </nav>
            <blockquote>Demo 服务端部署在 Heroku 上，冷启动大概需要 1-2 分钟</blockquote>
        </>
    )
}

export default Header
