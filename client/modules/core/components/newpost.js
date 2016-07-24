import React from 'react';

class NewPost extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <form className="new-post" onSubmit={this.createPost.bind(this)}>
        <h2>创建众筹</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <input ref="typeRef" type="Text" placeholder="众筹类型" /> <br/>
        <input ref="titleRef" type="Text" placeholder="标题" /> <br/>
        <input ref="amountRef" type="number" inputMode="numeric" placeholder="数量" /> <br/>
        <input ref="zoneRef" type="Text" placeholder="援助地区" /> <br/>
        <input ref="addressRef" type="Text" placeholder="援助详细地点" /> <br/>
        <input ref="imgRef" type="Text" placeholder="图片" /> <br/>
        <textarea ref="contentRef" placeholder="内容" /> <br/>
        <button type="submit">确认创建</button>
      </form>
    );
  }

  createPost(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const { create } = this.props;
    const { typeRef, amountRef, zoneRef, addressRef, imgRef, titleRef, contentRef } = this.refs;
    console.log(this.refs);
    create(typeRef.value, amountRef.value * 1, zoneRef.value, addressRef.value, imgRef.value, titleRef.value, contentRef.value);
  }
}

export default NewPost;
