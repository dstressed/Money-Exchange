module.exports = function makeExchange(currency) {
    var n = currency;
    if (n > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var coins = [50, 25, 10, 5, 1];
    var names = ['H', 'Q', 'D', 'N', 'P'];
    var obj = {};
    var i = 0;

    function getCount(i) {
        if (i == 5) return;
        var coin = coins[i];
        if (n >= coin) {
            var times = Math.floor(n / coin);
            obj[names[i]] = times;
            n = n - coin * times;
        }
        getCount(i + 1);
    }

    getCount(i);

    return obj;
};
