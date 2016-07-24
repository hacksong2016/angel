import React from 'react';

const Navigation = () => (
<div className="ui secondary menu stackable">
  <a className="active item" href="/">
    首页
  </a>
  <a className="item" href="/check">
    援助查询
  </a>
  <a className="item" href="/money">
    现金援助
  </a>
  <a className="item" href="/video">
    视频直播
  </a>
  <a className="item" href="/new-post">
    创建众筹
  </a>
  <div className="right menu">
    <div className="item">
      <div className="ui icon input">
        <input type="text" placeholder="Search..." />
        <i className="search link icon"></i>
      </div>
    </div>
    <a className="ui item">
      退出登录
    </a>
  </div>
</div>
);

export default Navigation;