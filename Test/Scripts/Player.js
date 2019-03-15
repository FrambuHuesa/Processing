class Player {
    constructor(name, faction) {
        this.name = name;
        this.faction = faction;
        this.status = 'Alive'; 
        this.kills = 0;
        this.statusArray = ['Alive','Dead','Sick', 'Hurt', 'BadlyHurt']
    }

    changeStatus(status) {
        this.status = status;
    }

    updateKills(kills) {
        this.kills += kills;
    }
}