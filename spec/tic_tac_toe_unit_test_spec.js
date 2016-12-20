describe("tic tac toe test", function(){

    it("should show messenger 'Continue game!'", function(){
        expect(getWinner.test("X","X","O","O","","","","","","X")).toEqual("Continue game!");
    });

    it("should show winner messenger - test01", function(){
        expect(getWinner.test("X","X","X","O","O","","","","","X")).toEqual("The winner is: X");
    });

    it("should show winner messenger - test02", function(){
        expect(getWinner.test("O","O","O","X","X","","","","","O")).toEqual("The winner is: O");
    });

    it("should show winner messenger - test03", function(){
        expect(getWinner.test("","O","O","X","X","X","","","","X")).toEqual("The winner is: X");
    });
    it("should show winner messenger - test04", function(){
        expect(getWinner.test("O","O","","","","","X","X","X","X")).toEqual("The winner is: X");
    });

    it("should show winner messenger - test05", function(){
        expect(getWinner.test("X","O","O","X","","","X","","","X")).toEqual("The winner is: X");
    });

    it("should show winner messenger - test06", function(){
        expect(getWinner.test("O","X","O","","X","","","X","","X")).toEqual("The winner is: X");
    });

    it("should show winner messenger - test07", function(){
        expect(getWinner.test("O","O","X","","","X","","","X","X")).toEqual("The winner is: X");
    });

    it("should show winner messenger - test08", function(){
        expect(getWinner.test("X","O","","","X","O","","","X","X")).toEqual("The winner is: X");
    });

    it("should show winner messenger - test09", function(){
        expect(getWinner.test("O","O","X","","X","","X","","","X")).toEqual("The winner is: X");
    });

    it("should show messenger 'There wasn't winner'", function(){
        expect(getWinner.test("X","O","X","O","X","X","O","X","O","X")).toEqual("There wasn't winner");
    });

    it("move O to X, should show messenger 'X'", function(){
        expect(getMove.move("O","","")).toEqual("X");
    });

    it("move X to O, should show messenger 'O'", function(){
        expect(getMove.move("X","","")).toEqual("O");
    });

    it("move X to O in firefox browser, should show messenger 'O'", function(){
        expect(getMove.move("X","",true)).toEqual("O");
    });

    it("should show messenger 'this box has been selected!' - Value X", function(){
        expect(getMove.move("X","X",true)).toEqual("Oops, this box has been selected!");
    });

    it("should show messenger 'this box has been selected!' - Value O", function(){
        expect(getMove.move("X","O",true)).toEqual("Oops, this box has been selected!");
    });

    it("error test", function(){
        expect(getMove.move("","","")).toEqual("Oops, this box has been selected!");
    });

});