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
                    description="Movie Cast is movie film web apps."
                    sourceCodeUrl="https://github.com/novalramdhani/Movie-Cast"
                    previewUrl="http://movie-cast.herokuapp.com"
                />
            </div>

            <Menu />
        </Container>
    );
}
