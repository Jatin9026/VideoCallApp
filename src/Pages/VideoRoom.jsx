import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoRoom = () => {
  const { roomid } = useParams();
  const containerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      const appId = 320310888;
      const serverSecret = 'ec8e5dfce4abc84fdb141ef8d1dfb9d5';

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomid,
        Date.now().toString(), // Unique user ID
        'JatinGupta' // Display name
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy Link',
            url: `http://localhost:5173/room/${roomid}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // Change to OneONoneCall if needed
        },
      });
    };

    myMeeting();
  }, [roomid]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
  );
};

export default VideoRoom;