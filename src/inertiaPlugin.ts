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


// Only works for vite development
export const renderInertia = (component, props, url) => `
    <html lang="en">
    <head>
      <title>Hello World</title>

      <script src="http://localhost:5173/src/client/entrypoints/application.jsx" type="module" crossOrigin="anonymous" defer></script>
    </head>
    <body>
    <div id="app" data-page=${JSON.stringify({
  component,
  props,
  url,
  version: "1.0.0",
})}>

    </div>
    </body>
    </html>
`;

export default inertiaPlugin;