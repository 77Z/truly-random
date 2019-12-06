module.exports = {
    range: function(min, max) {
        var one = Math.random() * (max - min) + min;
        return one.toString().split(".")[0];
    },
    random: function() {
        return Math.random().toString().split(".")[1];
    },
    boolean: function() {
        var min = 1;
        var max = 100;

        var one = Math.random() * (max - min) + min;
        var two = one.toString().split(".")[0];
        if (two > 50) {
            return true;
        } else {
            return false;
        }
    }
};