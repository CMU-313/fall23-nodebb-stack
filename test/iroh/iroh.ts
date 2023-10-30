// eslint-disable-next-line
const Iroh = require ('iroh')
// eslint-disable-next-line
const assert = require('assert');

// eslint-disable-next-line
describe ('Demo Iroh test cases',() => {
    // eslint-disable-next-line
    let code2 = `if (true) {
                    for (let ii = 0; ii < 3; ++ii) {
                      let a = ii * 2;
                    };
                  }`;
    // eslint-disable-next-line
    var stage = Iroh.Stage(code2);
    // eslint-disable-next-line
    stage.addListener(Iroh.LOOP).on("enter", function(e) {
        // we enter the loop
        // eslint-disable-next-line
        console.log(" ".repeat(e.indent) + "loop enter");
    })
    // eslint-disable-next-line
    .on("leave", function(e) {
        // we leave the loop
        // eslint-disable-next-line
        console.log(" ".repeat(e.indent) + "loop leave");
        });
    // if, else if
    // eslint-disable-next-line
    stage.addListener(Iroh.IF).on("enter", function(e) {
    // we enter the if
    // eslint-disable-next-line
    console.log(" ".repeat(e.indent) + "if enter");
    })
    // eslint-disable-next-line
    .on("leave", function(e) {
        // we leave the if
        // eslint-disable-next-line
    console.log(" ".repeat(e.indent) + "if leave");
        });
    // eslint-disable-next-line
    eval(stage.script);
});

