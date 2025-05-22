const {calculate_order, base_moves} = require('./rubik');

describe("calculate_order", () => {
    var moves = ["L", "R", "F", "B", "U", "D"];
    for (var i in moves) {
        test("Order of " + moves[i] + " is 4", () => {
            expect(calculate_order(moves[i])).toBe(4);
        });
        test("Order of " + moves[i] + "' is 4", () => {
            expect(calculate_order(moves[i] + "'")).toBe(4);
        });
    }
    test("Order of R' is 4", () => {
        expect(calculate_order("R'")).toBe(4);
    });
    test("Order of RR' is 1", () => {
        expect(calculate_order("RR'")).toBe(1);
    });
    test("Order of RRRR is 1", () => {
        expect(calculate_order("RRRR")).toBe(1);
    });
});

describe("centres_static", () => {
    var moves = ["L", "R", "F", "B", "U", "D"];
    var centres = [4, 13, 22, 31, 40, 49];
    for (var i in moves) {
        for (var j in centres) {
            test("" + moves[i] + "[" + j + "] = " + j, () => {
                expect(base_moves[moves[i]][centres[j]]).toBe(centres[j]);
            });
        }
    }
});

describe("are_permutations", () => {
    var moves = ["L", "R", "F", "B", "U", "D"];
    for (var i in moves) {
        test(moves[i] + " is a permutation", () => {
            for (var j = 0; j < 54; j++) {
                var n = 0;
                for (var k = 0; k < 54; k++) {
                    if (base_moves[moves[i]][k] == j) {
                        n++;
                    }
                }
                expect(n).toBe(1);
            }
        });
    }
});
