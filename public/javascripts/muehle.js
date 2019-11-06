let size = 7;

let gameJson = {
    size:7,
    0: {0:0,1:0,2:0},
    1: {3:0,4:0,5:0} ,
    2: {6:0,7:0,8:0},
    3: {9:0,10:0,11:0,12:0,13:0,14:0},
    4: {15:0,16:0,17:0},
    5: {18:0,19:0,20:0},
    6: {21:0,22:0,23:0}
};

class Grid {
    constructor(size){
        this.size = size;
        this.gamefield = [];
    }

    fill(json) {
        for (let scalar=0; scalar <this.size*this.size;scalar++) {
            this.gamefield[scalar]=(json[row(scalar)][col(scalar)]);
        }
    }
}

let grid = new Grid(gameJson.size);
grid.fill(gameJson);
