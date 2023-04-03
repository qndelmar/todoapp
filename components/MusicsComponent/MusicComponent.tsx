import {FC} from "react";
import {Merriweather_Sans} from "next/font/google";

const merriw = Merriweather_Sans({subsets: ['latin'], weight: '400'})

const MusicComponent:FC = () => {
    return (
        <div className="mt-10">
            <p className={`text-2xl ${merriw.className} dark:text-white text-black text-center`}>And finally listen soft playlist in our websites</p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-10 mx-20">
                <iframe className="m-auto lg:mt-0 mt-2" width="250" height="155" src="https://www.youtube.com/embed/bP9gMpl1gyQ?controls=0"
                        title="YouTube video player" frameBorder="0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                <iframe className="m-auto lg:mt-0 mt-2" width="250" height="155" src="https://www.youtube.com/embed/MzgMBrtrFc4?controls=0"
                        title="YouTube video player" frameBorder="0"  loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                <iframe className="m-auto lg:mt-0 mt-2" width="250" height="155" src="https://www.youtube.com/embed/jfKfPfyJRdk?controls=0&modestbranding=1&showinfo=0&rel=0"
                        title="YouTube video player" frameBorder="0" loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default MusicComponent;