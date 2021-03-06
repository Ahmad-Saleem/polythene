[Back to Polythene Card main page](../card.md)

# Card component for Mithril

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Images](#images)
  - [Embedded videos](#embedded-videos)
- [Appearance](#appearance)
  - [Styling](#styling)
  - [RTL \(right-to-left\) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Card options](../card.md)



<a id="usage"></a>
## Usage

<a href="https://jsfiddle.net/ArthurClemens/47uy6e1w/" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

~~~javascript
import m from "mithril"
import { Card } from "polythene-mithril"
~~~

The card can contain various elements. The `content` parameter accepts any String, hyperscript or component:

~~~javascript
import { Card, List } from "polythene-mithril"

m(Card, {
  content: m(List, {...})
})
~~~

To generated Material Design elements, pass an array of element options, where each item is an object with on of the keys:

* primary
* text
* media
* header
* actions
* any (for any other content)

Element `primary` contains the sub-options `title` and `subtitle`:

~~~javascript
m(Card, {
  content: [{
    primary: {
      title: "Primary title",
      subtitle: "Subtitle"
    }
  }]
})
~~~

Content parts are processed in the order as they are written. Of course this makes it possible to wildly deviate from the design specs.

To show in order:

1. header with portrait image
1. media item
1. title and subtitle
1. action row
1. text

these are passed in this order to `content`:

~~~javascript
import { Card, Button } from "polythene-mithril"

m(Card, {
  content: [
    {
      header: {
        title: "Name",
        subtitle: "date",
        icon: {
          size: "large",
          avatar: true,
          src: "img/avatar.png"
        }
      }
    },
    {
      media: {
        content: m("img", {
          src: "img/large.jpg"
        })
      }
    },
    {
      primary: {
        title: "Primary title",
        subtitle: "Subtitle"
      }
    },
    {
      actions: {
        content: [
          m(Button, {
            label: "Action 1"
          }),
          m(Button, {
            label: "Action 2"
          })
        ]
      }
    },
    {
      text: {
        content: "More text"
      }
    }
  ]
})
~~~


For further control over the `primary` content, you can pass an array to `primary.content`.

~~~javascript
import { Card, IconButton } from "polythene-react"
import { addLayoutStyles } from "polythene-css"

addLayoutStyles() // to use m(".flex")

m(Card, {
  content: [{
    primary: {
      content: [
        {
          media: {
            ratio: ratio,
            size: "large",
            content: m("img", {  
              src: "img/large.jpg"
            })
          }
        },
        m(".flex"),
        {
          actions: {
            layout: "vertical",
            content: [
              m(IconButton, { icon: { svg: { content: m.trust(iconHeart) } } }),
              m(IconButton, { icon: { svg: { content: m.trust(iconBookmark) } } }),
              m(IconButton, { icon: { svg: { content: m.trust(iconShare) } } })
            ]
          }
        }
      ]
    }
  }]
})
~~~




<a id="images"></a>
### Images

By specification, the `media` element has an image ratio of `16:9`, but `1:1` images can be used too, as well as "title images" (an image placed next to the title). Images can additionally have with overlay text. Both `ratio` ("square" or "landscape") and `size` ("small", "medium", "large", "extra-large") can be set.



<a id="cropping--origin"></a>
#### Cropping / origin

An image that does not fit the ratio is cropped by CSS. An additional parameter `origin` can be passed to determine from which side cropping should be done. Default value is "center", optional values are "start" and "end". The end result depends if the image is landscape or portrait format.

To show the left side of a landscape image:

~~~javascript
content: [{
  media: {
    origin: "start",
    content: m("img", {
      src: "img/large.png"
    })
  }
}]
~~~



<a id="overlay"></a>
#### Overlay

Images with an overlay (text, actions) can be created with `media.overlay`:

~~~javascript
content: [{
  media: {
    ratio: "square",
    content: m("img", {
      src: "img/large.jpg"
    }),
    overlay: {
      sheet: true,
      className: "pe-dark-tone",
      content: [
        {
          primary: {
            title: "Primary title",
            subtitle: "Subtitle"
          }
        },
        {
          actions: {
            content: [
              m(button, {
                label: "Action 1"
              }),
              m(button, {
                label: "Action 2"
              })
            ]
          }
        }
      ]
    }
  }
}]
~~~

An additional HTML element to control the image is "card__media__dimmer". First enable the dimmer: 

~~~javascript
{
  media: {
    showDimmer: true,
    ...
  }
},
~~~

To create a fuzzy dark border all around use an inset box shadow

~~~css
.pe-card__media__dimmer {
  box-shadow: inset 0px 0px 40px rgba(0,0,0,.6);
}
.pe-card__overlay__content {
  /* something else */
}
~~~



<a id="title-image"></a>
#### Title image

To create a square image at the right side of the title, use `primary.media`:

~~~javascript
content: [{
  primary: {
    title: title,
    subtitle: "Subtitle",
    media: {
      ratio: "square",
      size,
      content: m("img", {
        src: "img/large.jpg"
      })
    }
  }
}]
~~~


<a id="embedded-videos"></a>
### Embedded videos

To show an embedded video, pass an `iframe` element:

~~~javascript
content: [{
  media: {
    content: m("iframe", {
      id: "ytplayer",
      type: "text/html",
      width: "100%",
      height: "100%",
      src: "https://www.youtube.com/embed/Fe7lxMJTgZ4",
      frameborder: "0"
    })
  }
}]
~~~


<a id="appearance"></a>
## Appearance


<a id="styling"></a>
### Styling

Below are examples how to change the Card appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

~~~javascript
import { CardCSS } from "polythene-css"

CardCSS.addStyle(".themed-card", {
  color_light_main_background: "#0097a7",
  color_light_title_text:      "#fff",
  color_light_subtitle_text:   "#fff"
});

m(Card, {
  className: "themed-card"
});
~~~

<a id="css"></a>
#### CSS

Change CSS using the [Card CSS classes](../../../packages/polythene-css-classes/card.js).

Class names can be imported with:

~~~javascript
import classes from "polythene-css-classes/card"
~~~

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(Card, {
  style: {
    maxWidth: "360px",
    backgroundColor: "#B89E58"
  }
})
~~~

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of Card content is reversed when the Card is contained within an element that either:

* has attribute `dir="rtl"`
* has className `pe-rtl`

<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set

