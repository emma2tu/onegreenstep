// blank
export function Archive ()
{
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    var numLeaves = 0;

    function addLeaf()
    {
        var leafColor = colors[numLeaves%7];
        numLeaves++;
        var yPos = numLeaves*100;
        var xPos = window.innerWidth * .35;
        if(numLeaves%2 == 0)
            xPos = window.innerWidth * .55;
        return (
            <>
            <ellipse cx={xPos} cy={yPos} rx="50" ry="25" fill={leafColor}/>
            </>
        )
    }

    return (
        <>
        <h1>Archive</h1>
        <p>Welcome to the archive page! See your past accomplishments here!</p>
        <svg width="auto" height="600">
            {addLeaf()}
            {addLeaf()}
            {addLeaf()}
            {addLeaf()}
        </svg>
        {/*Is this a comment?*/}
        </>
    )
}
