
let gap = prompt("So'z kiriting");
let after = prompt("Harfni kiriting");

function USers(gap, after) {
    this.gap = gap.toLowerCase();
    this.after = after.toLowerCase();
    this.Find_letter_count = function () {
        let num = 0;
        for (let i = 0; i < this.gap.length; i++) {
            if (this.gap[i] === this.after) {
                num++;
            }
        }
        return num;
    }
}

const user = new USers(gap, after);
console.log(user.Find_letter_count());