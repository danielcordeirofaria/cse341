const danielFaria = (req, res) => {
    res.send("Daniel Faria");
};

const lucianaPoppi = (req, res) => {
    res.send("Luciana Poppi");
};

const beatrizPoppi = (req, res) => {
    res.send("Beatriz Poppi");
};

const juliePoppi = (req, res) => {
    res.send("Julie Poppi");
};

const welcome = (req, res) => {
    res.send("Welcome to the CSE341 API");
}

module.exports = {
    danielFaria,
    lucianaPoppi,
    beatrizPoppi,
    juliePoppi,
    welcome
};