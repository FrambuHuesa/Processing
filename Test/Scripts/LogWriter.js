class LogWriter {
    constructor(widthStart, lengthStart) {
        this.widthStart = widthStart;
        this.lengthStart = lengthStart;
        this.messagesToShow = 14;
    }
    /**
     * This method updates the info trail
     * @param {Array} textArray
     */
    MessageBoardUpdate(textArray){
        let x = this.widthStart;
        let y = this.lengthStart;
        fill(0);
        textSize(22);
        for(let i = textArray.length - 1, counter = 0; counter < this.messagesToShow; i--, counter++) {
            text(textArray[i], x, y);
            y += 30;
        }
        textSize(12);
    }

}