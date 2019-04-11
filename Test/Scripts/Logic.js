class Logic {
    constructor(allPlayers) {
        this.allPlayers = allPlayers;
        this.alivePlayersIndex = new Array(this.allPlayers.length);
        this.currentlyInactive = new Array(this.allPlayers.length);
        this.currentlyActive = [];
        for (let i = 0; i < this.allPlayers.length; i++) {
            this.alivePlayersIndex[i] = i;
            this.currentlyInactive[i] = i;
        }
        
    }

    newIteration() { // up to 10 actions
        console.log('test');
        this.currentlyInactive = this.alivePlayersIndex.slice();
        const action = ' talk to ';
        const messageBuilder = new MessageBuilder();
        const message = [];
        const iterations = Logic.getRandomNumber(1, 4);
        for (let i = 0; i < iterations; i++) {
            console.log('messageNumber: ' + i);
            message[i] = messageBuilder.compose(
                this.playersSelection(), 
                this.playersSelection(),
                action);
        }
        return message;
    }

    playersSelection(){
        const players = [];
        const iterations = Logic.getRandomNumber(1, 4)
        for (let i = 0; i < iterations; i++) {
            console.log('actor: ' + i);
            const playerIndex = this.getPlayerIndex();
            players[i] = allPlayers[playerIndex].name;
        }
        return players;
    }
    getPlayerIndex(){
        const inactiveIndex = Logic.getRandomNumber(0, this.currentlyInactive.length - 1);
        const nextPlayerIndex = this.currentlyInactive[inactiveIndex];
        console.log('selectedPlayer: ' + nextPlayerIndex);
        if(nextPlayerIndex === undefined){
            return null;
        }
        this.currentlyActive.push(nextPlayerIndex);
        this.currentlyInactive.splice(inactiveIndex, 1);
        return nextPlayerIndex;
    }
    static getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    refreshAlivePlayersList(){
        this.alivePlayersIndex = []
        for(let i = 0; i < this.alivePlayersIndex.length; i++) {
            if(this.allPlayers[i].status !== 'Dead') {
                this.alivePlayersIndex[i] = i;
            }
        }
    }
}