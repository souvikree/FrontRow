import React from 'react'
import VideoSource from './video2.mp4';
import Background from './background';
import Navbar from './Navbar';
import LeftNavigation from './LeftNavigation';
import Slider from 'react-slick';

export default function Middle() {
  return (
    <div>
      <Background videoSource={VideoSource} />
      <div>
        <Navbar/>
        <LeftNavigation/>
      </div>
    </div>
  )
}

