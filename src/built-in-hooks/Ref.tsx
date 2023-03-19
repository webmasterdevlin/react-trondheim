import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from 'react-video-player';
import Button from '../components/Button';
import Card from './Card';
import type { VideoPlayerType } from 'react-video-player';
// the useRef hook allows to persist values between renders
// it can be used to store a mutable value that does not cause a re-render when updated
// it can be used to access a DOM element directly
export default function Ref() {
  const [name] = useState('');
  const prevNameRef = useRef('');
  const inputRef = useRef<HTMLInputElement>(null);
  const focus = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    prevNameRef.current = name;
  }, [inputRef.current?.value as string]);
  console.log('rendered');

  const videoPlayer = useRef<VideoPlayerType>();

  const handleVideoPlay = () => {
    videoPlayer.current.thumbUrl = 'http://.webp';
    videoPlayer.current.play();
  };
  const handleVideoPause = () => {
    videoPlayer.current.thumbUrl = 'http://.png';
    videoPlayer.current.pause();
  };
  const handleVideoStop = () => {
    videoPlayer.current.thumbUrl = 'http://.jpg';
    videoPlayer.current.stop();
  };
  return (
    <>
      <Thumbnail url={videoPlayer.current.thumbUrl} />
      <VideoPlayer path={'http://.mp4'} ref={videoPlayer} />
      <button onClick={handleVideoPlay}>Play</button>
      <button onClick={handleVideoPause}>Pause</button>
      <button onClick={handleVideoStop}>Stop</button>

      <input
        ref={inputRef} // inputRef.current == input element
        onChange={e => {
          if (inputRef.current) {
            inputRef.current.value = e.target.value;
          }
          console.log('logs:', {
            event: e.target.value,
            inputRef: inputRef.current?.value,
          });
          // setName(e.target.value); // causes re-render
        }}
      />
      <div>
        <h2>My name is {inputRef.current?.value}</h2>
        <h3>Previous value is {prevNameRef.current}</h3>
      </div>
      <Button color="primary" onClick={focus}>
        Focus
      </Button>
      <Card name={inputRef?.current?.value as string} />
    </>
  );
}
