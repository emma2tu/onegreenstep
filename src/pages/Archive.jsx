import React from "react";
import { useState } from "react";
export function Archive ()
{
    const colorImageURLs = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
    ];

    var printImageURLs = [
        "1.png",
        "2.png",
        "9.png",
        "5.png",
        "11.png",
        "6.png"
    ];

    return (
        <>
        <h1>Leaf Gallery</h1>
        <p>Welcome to the leaf gallery! See your past accomplishments here!</p>
        <section class="leaves">
            <article><img class="image" src={printImageURLs[0]}></img></article>
            <article><img class="image" src={printImageURLs[1]}></img></article>
            <article><img class="image" src={printImageURLs[2]}></img></article>
            <article><img class="image" src={printImageURLs[3]}></img></article>
            <article><img class="image" src={printImageURLs[4]}></img></article>
            <article><img class="image" src={printImageURLs[5]}></img></article>
        </section>
        </>
    )
}