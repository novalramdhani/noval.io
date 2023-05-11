/* eslint-disable jsx-a11y/img-redundant-alt */
import me from "../assets/img/me.png";
import Menu from "./Menu";
import Container from "./Container";
 
export default function Home() {
    return (
        <Container>
            <div>
                <img
                    src={me}
                    className="shadows shadow-purple-400/20 bg-contain mx-auto p-1 rounded-full"
                    alt="The picture of me"
                    loading="lazy"
                    width="100"
                    height="100"
                />
            </div>
            <div className="leading-loose">
                <p className="mt-4">
                    Hello, I'm Noval Ramdhani an software engineering, Web programming enthusiast and
                    loving back end technologies.
                </p>
                <p className="mt-4">
                    I have social media like{" "}
                    <a
                        href="https://instagram.com/novallrmdhni"
                        className="text-sky-400 underline"
                    >
                        Instagram
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://twitter.com/novallramdhani"
                        className="text-sky-400 underline"
                    >
                        Twitter
                    </a>{" "}
                    If you want to know my activities on the internet.
                </p>
                <p className="mt-4">
                    You can find all my programming projects on{" "}
                    <a
                        href="https://github.com/novalramdhani"
                        className="text-sky-400 underline"
                    >
                        Github
                    </a>
                    .
                </p>
                <Menu />
            </div>
        </Container>
    );
}
