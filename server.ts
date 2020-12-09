import { serve } from "https://deno.land/std/http/server.ts";
import { Router } from "./router.ts"
import { listen } from "./chat.ts"

listen();

const router = new Router();
const s = serve({ port: 8000 });

for await (const req of s) {
  //req.respond({ body: "Hello World\n" });

  router.get("/create-encrypted-channel", req, (query:any)=> {
    var q = req.url
    console.log(query.name);
    req.respond(req);
  });

}

