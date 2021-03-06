[Back to Polythene Shadow main page](../shadow.md)

# Shadow component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
- [Appearance](#appearance)
  - [Styling](#styling)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Shadow options](../shadow.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/87wjreeu/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

Shadow has 5 depth levels, configured with option `z`.

~~~javascript
import m from "mithril"
import { Shadow } from "polythene-mithril"

m(Shadow, { z: 2 })
~~~

To add a shadow to an element, the element must have the style `position: "relative"`. In this example the shadow is added to the outer div:

~~~javascript
m(".outer",
  {
    style: { position: "relative" }
  },
  [
    m("span", "Some card"),
    m(Shadow, { z: 2 })
  ]
)
~~~

To animated the shadow on change, use `animated`. Using a dynamic z value from `vnode.state`:

~~~javascript
m(Shadow, {
  z: vnode.state.z,
  animated: true
})
~~~


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

<a id="css"></a>
#### CSS

Change CSS using the [Shadow CSS classes](../../../packages/polythene-css-classes/shadow.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/shadow"
~~~


