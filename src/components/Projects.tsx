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
                    previewUrl=""
                />
            </div>

            <Menu />
        </Container>
    );
}
