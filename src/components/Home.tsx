import url from "../config/url.config";
import me from '../me.png';
import Menu from "./Menu";
import Container from "./Container";
import SocialMediaLink from "./SocialMediaLink";

export default function Home() {
    return (
        <>
        <Container>
            <div>
              <img src={me} className="shadows shadow-purple-400/20 bg-contain mx-auto p-1 rounded-full" alt="The picture of me" loading="lazy" width="100" height="100" />
            </div>
            <div className="leading-loose text-lg">
                  Hi 👋, I'm Noval Ramdhani. Web programming enthusiast, experience with <SocialMediaLink url={url.frameworks.laravel} name="Laravel" /> and <SocialMediaLink url={url.frameworks.rubyonrails} name="Rails" />.
                <p className="mt-4">
                  I have social media like <SocialMediaLink url={url.instagram} name="Instagram" />, <SocialMediaLink url={url.twitter} name="Twitter" /> or <SocialMediaLink url={url.showwcase} name="Showwcase" />. If you want to know my activities on the internet or you can also follow my daily writing articles on <SocialMediaLink url={url.devto} name="Dev.to" />.
                </p>
                <p className="mt-4">
                  You can find all my programming lessons on <SocialMediaLink url={url.github} name="Github" />.
                </p>
                <Menu />
            </div>
        </Container>
      </>
    );
}