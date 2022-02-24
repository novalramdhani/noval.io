type SocialMediaLinkProps = {
    url: string,
    name: string
}

export default function SocialMediaLink({url, name}: SocialMediaLinkProps) {
    return (
        <>
            <a href={url} className="text-sky-400 underline">{name}</a>
        </>
    );
}