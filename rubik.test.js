const {
    calculate_order, base_moves, get_combo, parse_and_calculate_order
} = require('./rubik');

describe("parse_and_calculate_order", () => {
    test("Order of L is 4", () => { expect(parse_and_calculate_order("L")).toBe(4); });
    test("Order of R is 4", () => { expect(parse_and_calculate_order("R")).toBe(4); });
    test("Order of F is 4", () => { expect(parse_and_calculate_order("F")).toBe(4); });
    test("Order of B is 4", () => { expect(parse_and_calculate_order("B")).toBe(4); });
    test("Order of U is 4", () => { expect(parse_and_calculate_order("U")).toBe(4); });
    test("Order of D is 4", () => { expect(parse_and_calculate_order("D")).toBe(4); });

    test("Order of L' is 4", () => { expect(parse_and_calculate_order("L'")).toBe(4); });
    test("Order of R' is 4", () => { expect(parse_and_calculate_order("R'")).toBe(4); });
    test("Order of F' is 4", () => { expect(parse_and_calculate_order("F'")).toBe(4); });
    test("Order of B' is 4", () => { expect(parse_and_calculate_order("B'")).toBe(4); });
    test("Order of U' is 4", () => { expect(parse_and_calculate_order("U'")).toBe(4); });
    test("Order of D' is 4", () => { expect(parse_and_calculate_order("D'")).toBe(4); });

    test("Order of L2 is 2", () => { expect(parse_and_calculate_order("L2")).toBe(2); });
    test("Order of R2 is 2", () => { expect(parse_and_calculate_order("R2")).toBe(2); });
    test("Order of F2 is 2", () => { expect(parse_and_calculate_order("F2")).toBe(2); });
    test("Order of B2 is 2", () => { expect(parse_and_calculate_order("B2")).toBe(2); });
    test("Order of U2 is 2", () => { expect(parse_and_calculate_order("U2")).toBe(2); });
    test("Order of D2 is 2", () => { expect(parse_and_calculate_order("D2")).toBe(2); });

    test("Order of RR' is 1", () => {
        expect(parse_and_calculate_order("RR'")).toBe(1);
    });
    test("Order of RRRR is 1", () => {
        expect(parse_and_calculate_order("RRRR")).toBe(1);
    });
});

function check_centres_static(i) {
    var centres = [4, 13, 22, 31, 40, 49];
    for (var j in centres) {
        expect(base_moves[i][centres[j]]).toBe(centres[j]);
    }
}

describe("centres_static", () => {
    test("L has static centres", () => { check_centres_static("L") });
    test("R has static centres", () => { check_centres_static("R") });
    test("F has static centres", () => { check_centres_static("F") });
    test("B has static centres", () => { check_centres_static("B") });
    test("U has static centres", () => { check_centres_static("U") });
    test("D has static centres", () => { check_centres_static("D") });
});

function check_is_perm(i) {
    for (var j = 0; j < 54; j++) {
        var n = 0;
        for (var k = 0; k < 54; k++) {
            if (base_moves[i][k] == j) {
                n++;
            }
        }
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
    test("M is a permutation", () => { check_is_perm("M") });
    test("E is a permutation", () => { check_is_perm("E") });
    test("S is a permutation", () => { check_is_perm("S") });
});

function check_corners_static(i) {
    var corners = [0, 2, 6, 8, 9, 11, 15, 17, 18, 20, 24, 26, 27, 29, 33, 35, 36, 38, 42, 44, 45, 47, 51, 53];
    for (var j in corners) {
        expect(base_moves[i][corners[j]]).toBe(corners[j]);
    }
}

describe("corners_static", () => {
    test("M has static corners", () => { check_corners_static("M") });
    test("E has static corners", () => { check_corners_static("E") });
    test("S has static corners", () => { check_corners_static("S") });
});
