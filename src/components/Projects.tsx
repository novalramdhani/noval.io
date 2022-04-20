import Container from "./Container";
import Card from "./Card";
import Menu from "./Menu";

export default function Projects() {
    return (
        <Container customMaxWidth="max-w-[1220px]">
            <h1 className="text-white font-bold text-lg uppercase mt-5">Projects</h1>

            <div className="w-full flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 mt-5">
                <Card
                    title="Movie Cast"
                    description="Ani Cast is a simple movie shows application using a TALL stack with the integration of the tmdb.org API."
                    sourceCodeUrl="https://github.com/novalramdhani/Movie-Cast"
                    previewUrl="http://movie-cast.herokuapp.com"
                />
                <Card
                    title="Ani Cast"
                    description="Ani Cast is a simple anime movie application using a TALL stack with the integration of the jikan API."
                    sourceCodeUrl="https://github.com/novalramdhani/Ani-Cast"
                    previewUrl="http://anicast.herokuapp.com"
                />
                <Card
                    title="Social Network"
                    description="Social Network is a social media web app build using Laravel, PostgreSQL, Tailwind CSS with include the API."
                    sourceCodeUrl="https://github.com/novalramdhani/Social-Network"
                />
                <Card
                    title="Blog App"
                    description="A simple blog application using Laravel, PostgreSQL, Bootstrap CSS with feature CRUD, comment and more."
                    sourceCodeUrl="https://github.com/novalramdhani/blog"
                />
                <Card
                    title="Miolica"
                    description="Miolica is an simple e-commerce application that uses React.js as the frontend and Laravel as the backend."
                    sourceCodeUrl="https://github.com/novalramdhani/Miolica"
                />
            </div>

            <Menu />
        </Container>
    );
}
