export function GET() {
    //vratte seznam postu
    const posts = [
        {id: 6, content: "ahoj, byl ples"},
        {id: 9, content: "karboxylové kyseliny jsou super"},
        {id: 69, content: "hhcp je lealni latka"}
    ];
    return Response.json(posts);
}