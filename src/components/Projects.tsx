import Container from "./Container";
import Card from "./Card";
import Menu from "./Menu";

export default function Projects() {
    return (
        <Container>
            <h1 className="text-white font-bold uppercase mt-5">All my projects</h1>
            <Card link="http://movie-cast.herokuapp.com" title="Movie Cast" description="A movie website created using Laravel and for styling using TailwindCSS, the api is taken from the TMDB API." />
            <Card title="LaraBlog" description="A blog website using Laravel, PHP, MySQL and for styling using Bootstrap. Equipped with features such as authentication, account settings, CRUD." />
            <Card title="Miolica" description="An e-commerce website uses Laravel API, Sanctum API Token, PHP, GraphQL, PostgreSQL as the backend and React Typescript, Redux, TailwindCSS as the frontend. Until implementing PWA (Progressive Web Apps)." />
            <Card title="Ani Cast" description="A anime shows website created using Laravel and for styling using TailwindCSS, the api is taken from the Jikan API." />
            <Card title="Social Network" description="A simple social media website using Laravel, MySQL and TailwindCSS. Features Authentication, account settings, following, follwers, unfollowing, CRUD tweets, likes, unlike tweets and comments." />
            <Menu />
        </Container>
    );
}