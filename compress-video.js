const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = path.resolve('..', '5998059_Water_Tubes_Sink_1280x720.mp4');
const outputFile = path.resolve('public', 'hero-bg.mp4');

console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);

ffmpeg(inputFile)
  .videoCodec('libx264')
  .noAudio() // Background videos usually don't need audio
  .size('1280x?') // Resize to 720p width, keep aspect ratio
  .videoBitrate('1000k') // Target bitrate for web
  .outputOptions([
    '-preset slow', // Better compression
    '-movflags +faststart', // Optimize for web playback
  ])
  .on('end', () => {
    console.log('Video compression finished successfully');
  })
  .on('error', (err) => {
    console.error('Error: ' + err.message);
    process.exit(1);
  })
  .save(outputFile);
