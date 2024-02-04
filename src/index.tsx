import {Elysia} from "elysia";
import {staticPlugin} from '@elysiajs/static'
import {html} from '@elysiajs/html'

const dataPage = {
  component: "HelloWorld/Elysia",
  props: {
    name: "World",
  },
}
const app = new Elysia()
  .use(html())
  .use(staticPlugin()).get("/", () => (
    <html lang="en">
    <head>
      <title>Hello World</title>
      <script src="/public/application.js"></script>
    </head>
    <body>
    <div id="app" data-page={"co"}>

    </div>
    </body>
    </html>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
