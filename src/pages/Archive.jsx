export function Archive ()
{
    const imageURLs = [
        "1.png",
        "2.png",
        "3.png",
        "4.png"
    ];

    //when doing it fr, start with imageURLs being empty, then imageURLs.push() the image link when the complete button is clicked
    //still need to figure out how to iterate through the array and add each article to the section

    return (
        <>
        <h1>Leaf Gallery</h1>
        <p>Welcome to the leaf gallery! See your past accomplishments here!</p>
        <section class="leaves">
            <article><img class="image" src={imageURLs[0]}></img></article>
            <article><img class="image" src={imageURLs[1]}></img></article>
            <article><img class="image" src={imageURLs[2]}></img></article>
            <article><img class="image" src={imageURLs[3]}></img></article>
        </section>
        </>
    )
}
