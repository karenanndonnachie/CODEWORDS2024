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

5. Use the `View/developer/developer tools` tab in chrome to locally test and edit your html file in a non-destructive way... you can also edit and test other web sites you find, or just nosey around inside them to see what fonts and styling they are using!

6. Use Visual studio code extensions to colour / check your CSS & HTML ... if it's red then it probably is an error or sorts!

7. Positioning and changing size of svg...
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
   
