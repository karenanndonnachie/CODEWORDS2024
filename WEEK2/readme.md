# WEEK 2 : HTML & CSS (AGAIN)
Revising the essential building blocks of html...
* a web page opens with <html> tag, which generally would also include 'doctype' attribute
  * `<!DOCTYPE html>...</html>`
* The other elements you generally find inside these tags are:
  * `<head></head>`
   * `<style></style>`
   * `<title></title>`
   * `<script></script>`
  * `<body>...</body>`
   * `<div>...</div>`
   * `<img />`
   * `<h1></h1>`
   * etc.
* `<html>` the outermost container for all other HTML elements
* `<head>` a container for metadata. Metadata typically define the document title, character set, styles, scripts, and other meta information.
* `<body>` defines the document's body. Contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. There can only be one <body> element in an HTML document.
* `<title>` defines the document title and the title in the browser toolbar, and is required in all HTML documents.
* `<section>` defines a section in a document.
* `<div>` defines a division in an HTML document. Any content can be put inside a <div> tag.
* `<img>` used to embed an image onto an HTML page.
* `<a>` defines a hyperlink, which is used to link from one page to another.
* `<strong>` defines text with strong importance. The content inside is typically displayed in bold. 
* `<em>` content inside is italicised to add emphasis
* `<button>` defines a clickable button.
 
## TAMING HTML & CSS
### STYLING DIVS
1. Styling divs is done with the `style` attribute inline or via classes <br/>
eg. `<div style="text-align:left;">` OR `<div class="lefttext">` + `.lefttext{ text-align:left;}`<br/>
**(you shouldn't try to just add attributes to a div. So `<div align="left">` isn't correct).**

2. IF you ever want to give something a `margin` or a `width` or a `z-index` or ... you need to set `position` in the style.
  * This can be `absolute` (ie it will not change) or `relative` (dependent on context/other elements) or `sticky` etc... [see W3Schools position](https://www.w3schools.com/css/css_positioning.asp)

3. Any shape with a solid colour or gradient or texture etc. you want to add to HTML can pretty much be done with a div and some CSS. (unless it is super complex, in which case an svg will work) Have a look at [CSS Shapes](https://www.w3schools.com/howto/howto_css_shapes.asp)
  * IF you want your fonts and divs to be responsive and fit into a single screen/viewport you need to start using % or units of vh or vw (viewport height / viewport width)

4. You can also look at using columns and grids to make stronger gridded designs see [CSS GRIDS](https://www.w3schools.com/css/css_grid.asp)

5. Positioning and changing size of svg...
  * A lot of the time for primitive shapes (rectangles, circles, squares, triangles etc.) you can just use [CSS Shapes](https://www.w3schools.com/howto/howto_css_shapes.asp#gsc.tab=0) test out the 'TRY ME' editor for examples.
  * if you are using an svg file you can size the svg the same way as you would an img.
  * If you are placing svg inline (inside `<svg>` tag) then the size & position of the `<svg>` is determined by the size of the shapes inside the `<svg>` and the `<svg>` attributes are for the "container" of the shapes, so you can 'clip' or crop' but you are not changing the size of the element, just it's 'viewbox'
  * If you want the shape inside to FILL the viewbox dimensions set in your svg tag, then use % eg. your width/height of your `<rect>` element need to be 100%
    * ```
      <svg style="position:absolute; top:0; left:0; width:5vw;height:30vh;" xmlns="http://www.w3.org/2000/svg">`
      <rect width="100%" height="100%" x="10" y="10" fill="blue" />
      </svg>
      ```
  * attributes can be set with a class or `<svg style="position:absolute; top:0; left:0; width:5vw; height:20vh>` 
  * See more [here](https://www.w3schools.com/graphics/svg_rect.asp) (use the "Try Me" editor)

# TAMING YOUR TOOLS
## Localised web-page editing 'INSPECTOR PANEL"
You can Edit, re-work and break live code with no consequence with the <br/>`WEB DEVELOPER TOOLS INSPECTOR PANEL`<br/>
**Keyboard shortcut to open inspector panel IN YOUR BROWSER:**<br/>
**CMD + SHIFT + C**<br/>
When you are in dev tools, you can adjust (temporarily) your css values until you are happy then you can copy/paste to your style sheet in vs code.
<br/>**NOTE** You can do this TO ANY PAGE ON THE INTERNET!!

## Visual Studio Code code hints
* Turn on HTML Preview to see the page side-by-side (WYSYWIG)
You can fix a lot of your code before it hits any server (local or otherwise) by paying attention to what is written inside the editor.. <br/>
Coloured code hinting is more evident in `dark mode` (you can change your theme)
<br/> eg. If the code is written in red it is liklely that VScode is indicating an error in style or format or syntax.
<br/>
VSCode also shows error in the frame around you code, take the time to familiarise yourself with the error/problem pane.

