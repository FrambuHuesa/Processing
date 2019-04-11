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

    newIteration() { // up to 4 actions
        console.log('test');
        this.currentlyInactive = this.alivePlayersIndex.slice();

        const messageBuilder = new MessageBuilder();
        const message = [];
        const iterations = Logic.getRandomNumber(1, 4);
        for (let i = 0; i < iterations; i++) {
            const typeOfAction = Logic.getRandomNumber(0,4);
            const givers = this.playersSelection(4);
            const receivers = this.playersSelection(4);
            message[i] = messageBuilder.compose(
                givers[1], 
                receivers[1],
                this.actionSelection(typeOfAction, receivers[0])
            );
        }
        return { message, allPlayers };
    }

    playersSelection(numberOfPlayers){
        const players = [];
        const playersNames = [];
        const iterations = Logic.getRandomNumber(1, numberOfPlayers)
        for (let i = 0; i < iterations; i++) {
            const playerIndex = this.getPlayerIndex();
            players[i] = allPlayers[playerIndex];
            playersNames[i] = players[i].name;
        }
        return [players, playersNames];
    }

    actionSelection(typeOfAction, receivers){
        let action;
        switch (typeOfAction) {
            case 0:
                action = ' Heal ';
                for (let i = 0; i < receivers.length; i++) {
                    if(receivers[i].status !== 'Dead'){
                        receivers[i].changeStatus('Alive');
                    }
                }
                break;
            case 1:
                action = ' kill '
                for (let i = 0; i < receivers.length; i++) {
                    receivers[i].changeStatus('Dead');
                }
                break;
            case 2:
                action = ' hurt '
                for (let i = 0; i < receivers.length; i++) {
                    receivers[i].changeStatus('Hurt');
                }
                break;
            case 3:
                action = ' badly hurt '
                for (let i = 0; i < receivers.length; i++) {
                    receivers[i].changeStatus('BadlyHurt');
                }
                break;
            case 4:
                action = ' intoxicate '
                for (let i = 0; i < receivers.length; i++) {
                    receivers[i].changeStatus('Sick');
                }
                break;
            default:
                break;
        }
        return action;
    }

    getPlayerIndex(){
        const inactiveIndex = Logic.getRandomNumber(0, this.currentlyInactive.length - 1);
        const nextPlayerIndex = this.currentlyInactive[inactiveIndex];
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