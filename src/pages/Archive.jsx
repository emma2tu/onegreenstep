import React, { useState, useEffect } from "react";

export function Archive() {
    // Gray and colored image lists
    const colorImageURLs = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    const promptImageURLs = ["7.png", "8.png", "9.png", "10.png", "11.png", "12.png"];

    const [completedLeaves, setCompletedLeaves] = useState([]);

    // Load completed tasks from localStorage when the page loads
    useEffect(() => {
        const storedCompleted = JSON.parse(localStorage.getItem("completedPrompts")) || [];
        setCompletedLeaves(storedCompleted);
    
        // Clear localStorage only when the page is fully loaded
        window.addEventListener("beforeunload", () => {
            localStorage.removeItem("completedPrompts");
        });
    
        return () => {
            window.removeEventListener("beforeunload", () => {
                localStorage.removeItem("completedPrompts");
            });
        };
    }, []);

    return (
        <>
            <h1>Leaf Gallery</h1>
            <p>Welcome to the leaf gallery! See your past accomplishments here!</p>
            <section className="leaves">
                {promptImageURLs.map((image, index) => {
                    // Check if THIS image is in the completed list
                    const isCompleted = completedLeaves.includes(image);
                    const displayedImage = isCompleted ? colorImageURLs[index] : promptImageURLs[index];

                    return (
                        <article key={index}>
                            <img className="image" src={`/${displayedImage}`} alt={`Leaf ${index}`} />
                        </article>
                    );
                })}
            </section>

        </>
    );
}
