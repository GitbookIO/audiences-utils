var ONIX = require("./data/onix.json");

// Return an audience by its code
var getByCode = function(code) {
    for (var i in ONIX) {
        var audience = ONIX[i];
        if (audience.code == code) {
            return audience;
        }
    }
    return null;
};

// Return an audience by its id
var getByID = function(id) {
    for (var i in ONIX) {
        var audience = ONIX[i];
        if (audience.id == id) {
            return audience;
        }
    }
    return null;
};

module.exports = {
    byCode: getByCode,
    byId: getByID
    all: {
        onix: ONIX
    }
};
