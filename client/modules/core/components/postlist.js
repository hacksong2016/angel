import React from 'react';

const PostList = ({ posts }) => (
  <div className='postlist ui container'>
      {posts.map(post => (
				<div className="ui divided items" key={post._id}>
				  <a className="item" href={`/post/${post._id}`}>
				    <div className="image">
				      <img src={post.img} />
				    </div>
				    <div className="content">
				      <span className="header">{post.title}</span>
				      <div className="meta">
				        <span className="cinema">{post.amount}</span>
				      </div>
				      <div className="description">
				        <p>{post.content}</p>
				      </div>
				      <div className="extra">
				        <div className="ui label">{post.type}</div>
				        <div className="ui right floated primary button">参与<i className="right chevron icon"></i> </div>
				      </div>
				    </div>
				  </a>
				  </div>
      ))}
  </div>
);

export default PostList;
