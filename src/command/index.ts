import * as capsule from "./capsule";
import * as company from "./company";
import * as core from "./core";
import * as crew from "./crew";
import * as dragon from "./dragon";
import * as history from "./history";
import * as landingPad from "./landingPad";
import * as launch from "./launch";
import * as rocket from "./rocket";
import * as ship from "./ship";

export const commands = {
  ship,
  rocket,
  launch,
  "landing-pad": landingPad,
  history,
  dragon,
  crew,
  company,
  capsule,
  core,
};
