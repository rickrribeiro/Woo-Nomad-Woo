import { Audio } from 'expo-av';

let sound;
export default async () => {

    const audio = await Audio.Sound.createAsync( require('../assets/audio/bg-audio.mp3')
    );
    sound = audio.sound
    console.log('Playing Sound');
    
    
    await sound.playAsync();
    console.log("terminou")
};

