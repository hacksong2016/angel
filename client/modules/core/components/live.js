import React from 'react';
import ReactSwf from 'react-swf';

const LivePage = ({live}) => (
  <div>
    <h2>视频直播</h2>
    <div>
      <ReactSwf
        src="http://static.hdslb.com/live-static/swf/LivePlayerEx_1.swf?room_id=504273&cid=504273&state=LIVE"
        wmode="transparent"></ReactSwf>

    </div>
  </div>
);

export default LivePage;
