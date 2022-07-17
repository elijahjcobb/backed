console.log("HI Playground!");

import { TStandard } from "typr";
import { Neon } from "neon";

const x = new Neon();

x.enable();
x.log("Hello, world!");

console.log(TStandard.string.conforms("Hello World"));
