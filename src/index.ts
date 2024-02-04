import {Elysia} from "elysia";
import {staticPlugin} from '@elysiajs/static'
import {renderInertia} from "./inertiaPlugin";
import {html} from "@elysiajs/html";


const app = new Elysia()
  .use(staticPlugin())
  .use(html())
  .get("/", () => renderInertia(
    "HelloWorld/Elysia",
    {name: "World"},
    "/"))
  .listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
