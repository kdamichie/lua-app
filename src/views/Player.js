import { Lightning, VideoPlayer } from '@lightningjs/sdk';

const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default class Player extends Lightning.Component {
  static _template() {
    return {
      //return video container
      Content: {
        text: 'hello'
      }
    };
  }
  _firstActive() {
    console.log('Player init');
    VideoPlayer.consumer(this);
    VideoPlayer.position(100, 200);
    VideoPlayer.size(960, 540);
    VideoPlayer.open(videoUrl);
    // set timeout,set state to main menu
  }
}
