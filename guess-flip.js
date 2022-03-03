import {coinFlips, countFlips, flipACoin} from "./modules/coin.mjs";
import {createRequire} from "module";

const require = createRequire(import.meta.url);
const args = require("minimist")(process.argv.slice(2))

const call = args.call
if (call == "heads" || call == "tails") {
    console.log(flipACoin(call));
} else {
    throw console.error("choose heads or tails.");
}
