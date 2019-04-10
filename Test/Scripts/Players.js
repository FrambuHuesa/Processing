class Players {
    constructor() {
        this.allPlayers = [];
        this.initializeAllPlayers();
    }

    // This method initializes all the players
    initializeAllPlayers() {
        const factions = ['AWS','HK','CALC','TEST','BA','SCRUM','DEVOPS','TL','ARCH'];
        const allFactionMembers = {
            AWS: ['Oscar', 'Fernando', 'Goyo', 'Dani'],
            HK: ['Rollo','Caballero', 'Sergio', 'Chus'],
            CALC: ['Manolo', 'Arancha', 'Escaño', 'Nacho'],
            TEST: ['Ekta', 'Banesh', 'Aparna', 'Kavya'],
            BA: ['Sakshi', 'Swati', 'Vishakha', 'Simon'],
            SCRUM: ['Isabel', 'Toñi', 'Pau', 'Angel'],
            DEVOPS: ['Alexis', 'Ruben', 'Julian', 'Borente'],
            TL: ['Marcel', 'Oliver', 'Tobias', 'Stefan'],
            ARCH: ['Asif', 'Udo', 'Erich', 'Ruben']
        }
        let currentPlayerIteration = 0;
        for(let i = 0; i < factions.length; i++) {
            const currentFaction = factions[i];
            const factionMembers = allFactionMembers[currentFaction];
            for(let j = 0; j < factionMembers.length; j++) {
                const currentFactionMember = factionMembers[j];
                this.allPlayers[currentPlayerIteration] = new Player(currentFactionMember,currentFaction);
                currentPlayerIteration++;
            }
        }
    }
}