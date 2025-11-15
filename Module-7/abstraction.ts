// oop - abstraction

/**
 * 1. interface
 * 2. abstract class
 */

//?idea
// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

//? implemantation
// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("Playing music....!");
//     }

//     pause(): void {
//         console.log("Pause music....!");
//     }

//     stop(): void {
//         console.log("Stop music....!");
//     }
// }

// const player = new MusicPlayer();
// player.play();
// player.pause();
// player.stop();

//?idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log("Playing music.....!");
    }

    pause(): void {
        console.log("Paused music.....!");
    }

    stop(): void {
        console.log("Stop music.....!");
    }
}

const player = new MusicPlayer();
// player.play();
// player.pause();
// player.stop();
