import { serve } from "https://deno.land/std/http/server.ts";
import { Router } from "./router.ts"

const router = new Router();
const s = serve({ port: 8000 });

for await (const req of s) {
  //req.respond({ body: "Hello World\n" });

  router.get("/sms", req, (query:any)=> {
    var q = req.url
    console.log(query.name);
  });

}

