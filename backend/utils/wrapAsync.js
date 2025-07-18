module.exports = (fn) => {
    return (req, res, next) => {
        if (typeof fn !== "function") {
            console.error("wrapAsync received a non-function:", fn);
            throw new Error("wrapAsync expects a function as an argument.");
        }
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
