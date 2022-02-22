import { Link } from "react-router-dom";
import url from "../config/url.config";
import me from '../me.png';
import Menu from "./Menu";

export default function Home() {
    return (
        <>
        <div className="max-w-xl mx-auto flex flex-col justify-center text-center px-4">
            <div>
              <img src={me} className="shadows shadow-purple-400/20 bg-contain mx-auto p-1 rounded-full" alt="The picture of me" loading="lazy" width="100" height="100" />
            </div>
            <div className="leading-loose text-lg">
                  Hi 👋, I'm Noval Ramdhani. Web programming enthusiast, experience with <a href={url.frameworks.laravel}className="text-sky-400 underline">Laravel</a> and <a href={url.frameworks.rubyonrails} className="text-sky-400 underline">Ruby On Rails</a>.
                <p className="mt-4">
                  I have social media like <a href={url.instagram} className="text-sky-400 underline">Instagram</a>, <a href={url.twitter} className="text-sky-400 underline">Twitter</a> or <a href={url.showwcase} className="text-sky-400 underline">Showwcase</a>. If you want to know my activities on the internet or you can also follow my daily writing articles on <a href={url.showwcase} className="text-sky-400 underline">Dev.to</a>.
                </p>
                <p className="mt-4">
                  You can find all my programming lessons on <a href={url.github} className="text-sky-400 underline">Github</a>.
                </p>
                <Menu />
            </div>
        </div>
      </>
    );
}