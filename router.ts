import { ServerRequest } from "https://deno.land/std/http/server.ts";

export class Router {

    get(route: string, req: ServerRequest, callback: any) {
        if (req.url.startsWith(route)) {
            console.log(req.url);
            let query = parse(req.url);
            callback(req, query);
        }
    }

}

function parse(url: string): Query {
    var query: Query = {}
    let queryStr = url.substr(url.indexOf("?") + 1, url.length);
    let queryParts: string[] = queryStr.split('&');
    for (const q of queryParts) {
        let index = q.indexOf('=');
        query[q.substr(0, q.indexOf('='))] = q.substr(index + 1, q.length)
    }
    return query;
}

interface Query {
    [key: string]: any;
}