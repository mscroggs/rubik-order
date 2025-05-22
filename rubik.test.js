const {calculate_order, base_moves} = require('./rubik');

describe("calculate_order", () => {
    test("Order of L is 4", () => { expect(calculate_order("L")).toBe(4); });
    test("Order of R is 4", () => { expect(calculate_order("R")).toBe(4); });
    test("Order of F is 4", () => { expect(calculate_order("F")).toBe(4); });
    test("Order of B is 4", () => { expect(calculate_order("B")).toBe(4); });
    test("Order of U is 4", () => { expect(calculate_order("U")).toBe(4); });
    test("Order of D is 4", () => { expect(calculate_order("D")).toBe(4); });
    test("Order of L' is 4", () => { expect(calculate_order("L'")).toBe(4); });
    test("Order of R' is 4", () => { expect(calculate_order("R'")).toBe(4); });
    test("Order of F' is 4", () => { expect(calculate_order("F'")).toBe(4); });
    test("Order of B' is 4", () => { expect(calculate_order("B'")).toBe(4); });
    test("Order of U' is 4", () => { expect(calculate_order("U'")).toBe(4); });
    test("Order of D' is 4", () => { expect(calculate_order("D'")).toBe(4); });

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

function check_is_perm(i) {
    for (var j = 0; j < 54; j++) {
        var n = 0;
        for (var k = 0; k < 54; k++) {
            if (base_moves[i][k] == j) {
                n++;
            }
        }
        if (i == "F") {console.log(k + " -> " + n);}
        expect(n).toBe(1);
    }
}

describe("are_permutations", () => {
    test("L is a permutation", () => { check_is_perm("L") });
    test("R is a permutation", () => { check_is_perm("R") });
    test("F is a permutation", () => { check_is_perm("F") });
    test("B is a permutation", () => { check_is_perm("B") });
    test("U is a permutation", () => { check_is_perm("U") });
    test("D is a permutation", () => { check_is_perm("D") });
});
