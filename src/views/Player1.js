import { Lightning, VideoPlayer } from '@lightningjs/sdk';

// const videoUrl = 'videos/Ad1a.mov';
const videoUrl = 'https://raw.githubusercontent.com/kdamichie/lua-app/main/public/videos/Ad1a.mov';

export default class Player1 extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080
      }
    };
  }

  _firstActive() {
    console.log(VideoPlayer);
    VideoPlayer.consumer(this);
    VideoPlayer.open(videoUrl);
    VideoPlayer.show();
    VideoPlayer.loop(false);
  }
  _handleEnter() {
    VideoPlayer.playPause();
  }

  _playPause() {
    VideoPlayer.playPause();
  }

  hidePlayer() {
    VideoPlayer.playPause();
    VideoPlayer.hide();
  }
}
