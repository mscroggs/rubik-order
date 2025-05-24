/*
Arrangement:
  U
 LFR
  D
  B
          0, 1, 2,
          3, 4, 5,
          6, 7, 8,
 9,10,11,18,19,20,27,28,29,
12,13,14,21,22,23,30,31,32,
15,16,17,24,25,26,33,34,35,
         36,37,38,
         39,40,41,
         42,43,44,
         45,46,47,
         48,49,50,
         51,52,53
*/

var base_moves = {
    "U": Array(
         6, 3, 0, 7, 4, 1, 8, 5, 2,
        18,19,20,12,13,14,15,16,17,
        27,28,29,21,22,23,24,25,26,
        53,52,51,30,31,32,33,34,35,
        36,37,38,39,40,41,42,43,44,
        45,46,47,48,49,50,11,10, 9
    ),
    "L": Array(
        45, 1, 2,48, 4, 5,51, 7, 8,
        15,12, 9,16,13,10,17,14,11,
         0,19,20, 3,22,23, 6,25,26,
        27,28,29,30,31,32,33,34,35,
        18,37,38,21,40,41,24,43,44,
        36,46,47,39,49,50,42,52,53
    ),
    "F": Array(
         0, 1, 2, 3, 4, 5,17,14,11,
         9,10,36,12,13,37,15,16,38,
        24,21,18,25,22,19,26,23,20,
         6,28,29, 7,31,32, 8,34,35,
        33,30,27,39,40,41,42,43,44,
        45,46,47,48,49,50,51,52,53
    ),
    "R": Array(
         0, 1,20, 3, 4,23, 6, 7,26,
         9,10,11,12,13,14,15,16,17,
        18,19,38,21,22,41,24,25,44,
        33,30,27,34,31,28,35,32,29,
        36,37,47,39,40,50,42,43,53,
        45,46, 2,48,49, 5,51,52, 8
    ),
    "D": Array(
         0, 1, 2, 3, 4, 5, 6, 7, 8,
         9,10,11,12,13,14,47,46,45,
        18,19,20,21,22,23,15,16,17,
        27,28,29,30,31,32,24,25,26,
        42,39,36,43,40,37,44,41,38,
        35,34,33,48,49,50,51,52,53
    ),
    "B": Array(
        29,32,35, 3, 4, 5, 6, 7, 8,
         2,10,11, 1,13,14, 0,16,17,
        18,19,20,21,22,23,24,25,26,
        27,28,44,30,31,43,33,34,42,
        36,37,38,39,40,41, 9,12,15,
        51,48,45,52,49,46,53,50,47
    )
};

function apply(permutation, list) {
    var out = [];
    for (var i in permutation) {
        out[i] = list[permutation[i]];
    }
    return out;
}

function apply_inverse(permutation, list) {
    var out = [];
    for (var i in permutation) {
        out[permutation[i]] = list[i];
    }
    return out;
}

function is_in_order(list) {
    for (var i in list) {
        if (i != list[i]) {
            return false;
        }
    }
    return true;
}

function parse(moves) {
    if (!moves.match(/(:?[UDLRFB](:?'|2)?)+/)) {
        throw "Invalid move string";
    }
    var out = [];
    for (var i in moves) {
        if (moves[i] == "'") {
            out[out.length - 1] += "'";
        } else if (moves[i] == "2") {
            out[out.length - 1] += "2";
        } else {
            out[out.length] = moves[i];
        }
    }
    return out;
}

function combine(moves) {
    var out = [];
    for (var i = 0; i < 54; i++) {
        out[i] = i;
    }
    for (var m in moves) {
        if (moves[m].length == 2) {
            if (moves[m].substr(1) == "'") {
                out = apply_inverse(base_moves[moves[m].substring(0, 1)], out);
            } else if (moves[m].substr(1) == "2") {
                out = apply(base_moves[moves[m].substring(0, 1)], out);
                out = apply(base_moves[moves[m].substring(0, 1)], out);
            } else {
                throw "Invalid moves";
            }
        } else {
            out = apply(base_moves[moves[m]], out);
        }
    }
    return out;
}

function get_combo(moves) {
    return combine(parse(moves));
}

function calculate_order(moves) {
    var combo = get_combo(moves);

    var n = 1;
    var position = combo;
    while (!is_in_order(position)) {
        if (n >= 100000) {
            throw "Maximum repetitions exceeded";
        }
        position = apply(combo, position);
        n++;
    }
    return n;
}

module.exports = { calculate_order, base_moves, get_combo };
