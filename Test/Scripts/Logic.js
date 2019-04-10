class Logic {
    constructor(allPlayers) {
        this.allPlayers = allPlayers;
        this.alivePlayersIndex = new Array(this.allPlayers.length);
        
    }

    newIteration() { // up to 14 actions
        console.log('test');
        const message = ['Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text', 'Sample text'];
        return message;
    }

    playersSelection(){
        // let number = this.getRandomNumber(this.alivePlayersIndex.length);
    }
    getRandomNumber(max) {
        return Math.floor(Math.random()*max);
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