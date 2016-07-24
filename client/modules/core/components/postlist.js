import React from 'react';

const PostList = ({posts}) => (
  <div className='postlist'>
    <ul>
      {posts.map(post => (
				<li className="ui divided items" key={post._id}>
				  <div className="item">
				    <div className="image">
				      <img src={post.img} />
				    </div>
				    <div className="content">
				      <a className="header">{post.title}</a>
				      <div className="meta">
				        <span className="cinema">{post.amount}</span>
				      </div>
				      <div className="description">
				        <p>{post.content}</p>
				      </div>
				      <div className="extra">
				        <div className="ui label">{post.type}</div>
				      </div>
				    </div>
				  </div>
				  </li>
      ))}
    </ul>
  </div>
);

export default PostList;
