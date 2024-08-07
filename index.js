const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 4096,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 3000,
    allow_origin: '*',
    mediaroot: './media',
  },
  trans: {
    ffmpeg: "C:/ffmpeg/bin/ffmpeg.exe",
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=10:hls_list_size=10:hls_flags=delete_segments]'
      }
    ]
  }
};

const nms = new NodeMediaServer(config);
nms.run();
