import PromptGenerator from "./PromptGenerator"

export function Home ()
{
    return (
        <>
        {/* This is where your test text appears */}
        <div className="bubblegum-sans-regular">
            <h1> 💫OneGreenStep 💫</h1>
            <p>🌳Making an impact one sustainable action at a time!🌳</p>
          </div>
        <PromptGenerator />
        </>
    )
}
