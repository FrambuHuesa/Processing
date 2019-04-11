class MessageBuilder {
    constructor() {
        this.message;
    }
    compose(actors, victims, action){
        this.message = "";
        this.addPlayerToMessage(actors);
        this.message += action;
        this.addPlayerToMessage(victims);
        return this.message;
    }
    addPlayerToMessage(players){
        const playersLength = players.length -1;
        for(let i = 0; i <= playersLength; i++) {
            if (i === 0) {
                this.message += players[i];
            } else if (i === playersLength) {
                this.message += ' and '+ players[i];
            } else {
                this.message += ', ' + players[i];
            }
        }
    }
}