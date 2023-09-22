
import { Player } from 'video-react';
interface props {
    url: string
}
const Video: React.FC<props> = ({ url }) => {
    return (
        <Player autoPlay playsInline preload='auto' startTime={100} >
            <source src={url} />
        </Player>
    );
}; export default Video;