import {Elysia} from "elysia";

const inertiaPlugin = ({
                         component,
                         props,
                       }) =>
  new Elysia()
    .group("/", (app) => {
        return app.get("*", () => renderInertia(component, props, app.path)
        )
      }
    )

export const renderInertia = (component, props, url) => `
    <html lang="en">
    <head>
      <title>Hello World</title>

      <script src="/public/assets/application-edlTypEb.js " type="module" crossOrigin="anonymous" defer></script>
    </head>
    <body>
    <div id="app" data-page=${JSON.stringify({
  component,
  props,
  url,
  version: "1.1.0",
})}>

    </div>
    </body>
    </html>
`;

export default inertiaPlugin;