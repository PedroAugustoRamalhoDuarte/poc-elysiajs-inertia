import {Elysia} from "elysia";
import {staticPlugin} from '@elysiajs/static'

const dataPage = {
  component: "HelloWorld/Elysia",
  props: {
    name: "World",
  },
  url: "/",
  version: "1.0.0",
}
const app = new Elysia()
  .use(staticPlugin()).get("/", () => baseHTML)
  .listen(3000);

const baseHTML = `
    <html lang="en">
    <head>
      <title>Hello World</title>

      <script src="/public/assets/application-edlTypEb.js " type="module" crossOrigin="anonymous" defer></script>
    </head>
    <body>
    <div id="app" data-page=${JSON.stringify(dataPage)}>

    </div>
    </body>
    </html>
`

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
