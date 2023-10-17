import { Lightning, VideoPlayer } from '@lightningjs/sdk';

const videoUrl = 'videos/Ad2a.mov';

export default class Player2 extends Lightning.Component {
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
