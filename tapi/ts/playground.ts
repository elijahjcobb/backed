import { TStandard } from "typr";
import { HHTTPServer, HEndpointBuilder, HEndpointGroup } from ".";

console.log(TStandard.string.conforms("efwoij"));
console.log(TStandard.string.conforms(4));

const group = new HEndpointGroup();

group.add(
  HEndpointBuilder.post("/")
    .types({
      name: TStandard.string,
      age: TStandard.number,
    })
    .listener(async (req, res) => {
      res.sendString("Hello, world!");
    })
);

console.log("FOO");
const server = new HHTTPServer(group, { debug: true });
server.start(3000);
