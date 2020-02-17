
var scrolltop = window.scrollY;

if(scrolltop > 500) {    
    function numCount(thisCount, thisNum) {
        this.count = 0; this.diff = 0;
        this.targetCount = parseInt(thisNum);
        this.thisCount = document.getElementById(thisCount);
        this.timer = null;
        this.counter();
    };
    numCount.prototype.counter = function() {
        var self = this;
        this.diff = this.targetCount - this.count;

        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 5);
        }

        this.thisCount.innerHTML = this.count.toString();

        if(this.count < this.targetCount) {
            this.timer = setTimeout(function() { self.counter(); }, 30);
        } else {
            clearTimeout(this.timer);
        }
    }
}
new numCount("count", 708);