import Image from "next/image";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, type MediaPlayerInstance } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import {useRef} from "react";

const ref = useRef<MediaPlayerInstance>(null);
export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">


      <div>
        <MediaPlayer title="Sprite Fight" src="youtube/3qcpHQNAZds" ref={ref}>
          <MediaProvider />
          <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>


    </main>
  );
}
