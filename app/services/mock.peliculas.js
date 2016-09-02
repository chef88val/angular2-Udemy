System.register(["../model/c1"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var c1_1;
    var PELICULAS;
    return {
        setters:[
            function (c1_1_1) {
                c1_1 = c1_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new c1_1.C1(1, "0", "a", 2),
                new c1_1.C1(2, "a", "b", 2),
                new c1_1.C1(3, "b", "c", 2),
                new c1_1.C1(4, "c", "d", 2)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map