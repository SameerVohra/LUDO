export const generateGameId = () => {
    const str: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let gameId: string = "";

    while(gameId.length!==6){
        gameId+=str[Math.floor(Math.random()*str.length)];
    }

    return gameId;
}

export const generateGamePass = () => {
    const str: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let gamePass: string = "";

    while(gamePass.length!==6){
        gamePass+=str[Math.floor(Math.random()*str.length)];
    }
    return gamePass;
}
