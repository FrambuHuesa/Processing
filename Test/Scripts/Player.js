class Player {
    constructor(name, faction) {
        this.name = name;
        this.faction = faction;
        this.status = 'Alive'; 
        this.kills = 0;
        this.statusArray = ['Alive','Dead','Sick', 'Hurt', 'BadlyHurt'];
        this.iterated = false;
    }

    /**
     * This method sets the new status of the player
     * @param {String} status 
     */
    changeStatus(status) {
        this.status = status;
    }

    /**
     * This method incremets the kill counter of the player
     * @param {String} status 
     */
    updateKills(kills) {
        this.kills += kills;
    }

    /**
     * This method sets the new status of the player
     * @param {String} status 
     */
    changeIteratedStatus(iteratedStatus) {
        this.iterated = iteratedStatus;
    }

}