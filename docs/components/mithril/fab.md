[Back to Polythene FAB main page](../fab.md)

# FAB: Floating Action Button component for Mithril


## Options

[FAB options](../fab.md)


## Usage

~~~javascript
import m from "mithril"
import { FAB } from "polythene-mithril"

const starsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>"

m(FAB, {
  icon: { svg: m.trust(starsSVG) }
})
~~~

### Links

See: [URLs and router links](../../handling-urls.md)


## Appearance

FAB's default colors are:

* Background: the app's primary color; change this by setting the `background-color` style
* Icon color: white; change this by setting the `color` style


### Styling

Below are examples how to change the FAB appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
FAB.theme(".themed-fab", {
  color_light_background: "#2196f3",
  color_dark_background:  "#0097a7",
  color_light:            "#fff",
  color_dark:             "#B2ebf2"
})

m(FAB, {
  className: "themed-fab"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-fab/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-fab";
~~~

#### Style option

Some style attributes can be set using option `style`. For example:

~~~javascript
m(FAB, {
  style: {
    backgroundColor: "#ef6c00",
    color: "#fff"
  }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set