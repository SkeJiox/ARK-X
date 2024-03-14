var number = function(busStops) {
    return busStops.reduce(function(total, stop) {
        return total + stop[0] - stop[1];
    }, 0);
}