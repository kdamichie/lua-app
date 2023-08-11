import { Lightning } from '@lightningjs/sdk';

export default class LightningAppOverlay extends Lightning.AAMPMediaPlayer {
  static _template() {
    return {
      Text: {
        mount: 0.5,
        x: 640,
        y: 72,
        zIndex: 3,
        text: {
          text: 'LIGHTNING UVE PLAYER',
          fontFace: 'Regular',
          fontSize: 46,
          textColor: 0xbbff0000
        }
      }
    };
  }
  _init() {
    // create a video tag element with full width and height
    this.videoEl = document.createElement('video');
    this.videoEl.style.position = 'absolute';
    this.videoEl.setAttribute('width', '100%');
    this.videoEl.setAttribute('height', '100%');
    this.videoEl.setAttribute('src', 'placeholder.mp4');
    this.videoEl.setAttribute('type', 'video/ave');
    // AAMP will not be using nor rendering video using videotag.
    // However, hole punching requires a dummy video tag to be present in the application.
    // Once there is a videotag available with a placeholder src attribute, hole punching will be done through the graphics plane.
    // The video will be rendered in the videoplane behind.
    document.body.appendChild(this.videoEl);
    // AAMPMediaPlayer object can be utilized as an injected bundle using UVE APIs.
    // This will be exposed by the firmware for the app to consume.
    // create an aamp media player object
    this.player = new Lightning.AAMPMediaPlayer();
    // AAMPMediaPlayer() creates an object of the aamp player. UVE APIs can then be called upon this object.
    // Further details on UVE APIs usage can be found in AAMP-UVE-API.pdf doc in https://code.rdkcentral.com/r/rdk/components/generic/aamp
    var locator = 'https://cpetestutility.stb.r53.xcal.tv/VideoTestStream/main.mpd';
    this.player.load(locator);
  }
  // window.onload = function() {
  //   const options = {stage: {w: 1920, h: 1080}}
  //   const app = new LightningAppOverlay(options);
  //   document.body.appendChild(app.stage.getCanvas());
  // }
}
