# WEEK 3: INTRO TO P5js
<h2 class="group-name">Processing is an application made by artists and designers to help artists and designers use creative coding for apps, web apps and visual media.</h2>
<p>Visit <a href="https://processing.org" target="_blank" rel="noopener">https://processing.org</a> and specifically the Javascript 'port' of the program (for web) <a href="https://p5js.org" target="_blank" rel="noopener">https://p5js.org</a>&nbsp;</p>
<p>Download &amp; install Processing IDE, then download and install the p5.js 'mode' from the mode manager.</p>
<h2>Miss the tutorial in class?</h2>
<p>Sorry but we covered a ton of material, too much to cover here :(</p>
<p>Please follow these easy 'minutes of code' videos (1~6) here which cover everything from setup through to color circle caterpillars:</p>
<p><a href="https://vimeo.com/showcase/7191039?share=copy" target="_blank" rel="noopener">https://vimeo.com/showcase/7191039?share=copy</a></p>
<p>password= A2THEK</p>
<p>&nbsp;</p>
<h3>Some of the shapes &amp; variables you can use in p5.js:</h3>
<table>
    <tbody>
        <tr>
            <td>point (x, y)</td>
            <td>int / float / long</td>
            <td>mouseX</td>
            <td>background(r, g, b, a)</td>
        </tr>
        <tr>
            <td>line (x1, y1, x2, y2)</td>
            <td>width</td>
            <td>mouseY</td>
            <td>fill(r,g,b,a)</td>
        </tr>
        <tr>
            <td>rect (x1, y1, w, h)</td>
            <td>height</td>
            <td>pmouseX</td>
            <td>stroke (r,g,b,a) --&gt;color!</td>
        </tr>
        <tr>
            <td>ellipse(cx, cy, w, h)</td>
            <td>random (min, max)</td>
            <td>pmouseY</td>
            <td>noStroke()</td>
        </tr>
        <tr>
            <td>triangle(x1,y1,x2,y2,x3,x3)</td>
            <td>translate(x,y)</td>
            <td>keyPressed()</td>
            <td>noFill()</td>
        </tr>
        <tr>
            <td>quad(x1,y1,x2,y2,x3,y3,x4,y4)</td>
            <td>scale ()</td>
            <td>mousePressed()</td>
            <td>strokeWeight(1) --&gt;thickness</td>
        </tr>
        <tr>
            <td>bezier(x1,y1,anchor1x,anchor1y,x2,y2,anchor2x,anchory2y)*</td>
            <td>rotate (radians(&deg;))</td>
            <td>millis()</td>
            <td>color c = img.get (x,y)</td>
        </tr>
    </tbody>
</table>
<h3 class="group-name">Other useful stuff:</h3>
<h4>push(); ..... pop();</h4>
<p>--&gt; will let you set 'temporary values' so you can use them just on a subset of elements&nbsp;</p>
<p>push();</p>
<p>&nbsp; &nbsp; //all the temporary variables you would like to store just to do one thing eg.</p>
<p>&nbsp; &nbsp; translate(mouseX, mouseY); //sets the origin at the mouse position</p>
<p>&nbsp; &nbsp; rotate(QUARTER_PI);&nbsp; //rotates 45degrees</p>
<p>&nbsp; &nbsp;//draw the object</p>
<p>&nbsp; &nbsp; rect(200, 200, 500, 100);</p>
<p>pop();&nbsp; //restore the previous settings &amp; values</p>
<h2 class="group-name">Some links to references from the p5js site <br />(the legacy version which is slightly easier to naviagate :)</h2>
<div id="emble-customise-e788605e" class="customise emble-columns-container" data-context-menu="customise delete" data-customise="new-columns-arrangement new-columns-border new-columns-padding columns-stretch-children" data-emble-name="Columns" data-emble-version="2.0">
    <div class="emble-columns-child emble-prevent-delete">
        <h3 id="Shape2DPrimitives" class="subgroup-name subgroup-2D Primitives">2D Primitives</h3>
        <ul aria-labelledby="Shape 2D Primitives">
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/arc">arc()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/ellipse">ellipse()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/circle">circle()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/line">line()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/point">point()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/quad">quad()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/rect">rect()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/square">square()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/triangle">triangle()</a></li>
        </ul>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </div>
    <div class="emble-columns-child emble-prevent-delete">
        <h3 id="ShapeAttributes" class="subgroup-name subgroup-Attributes">Attributes</h3>
        <ul aria-labelledby="Shape Attributes">
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/ellipseMode">ellipseMode()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/noSmooth">noSmooth()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/rectMode">rectMode()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/smooth">smooth()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/strokeCap">strokeCap()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/strokeJoin">strokeJoin()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/strokeWeight">strokeWeight()</a></li>
        </ul>
        <p>&nbsp;</p>
        <h3 id="ShapeVertex" class="subgroup-name subgroup-Vertex">Vertex</h3>
        <ul aria-labelledby="Shape Vertex">
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/beginContour">beginContour()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/beginShape">beginShape()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/bezierVertex">bezierVertex()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/curveVertex">curveVertex()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/endContour">endContour()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/endShape">endShape()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/quadraticVertex">quadraticVertex()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/vertex">vertex()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/normal">normal()</a></li>
        </ul>
        <p>&nbsp;</p>
    </div>
    <div class="emble-columns-child emble-prevent-delete">
        <h3 id="ShapeCurves" class="subgroup-name subgroup-Curves">Curves</h3>
        <ul aria-labelledby="Shape Curves">
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/bezier">bezier()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/bezierDetail">bezierDetail()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/bezierPoint">bezierPoint()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/bezierTangent">bezierTangent()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/curve">curve()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/curveDetail">curveDetail()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/curveTightness">curveTightness()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/curvePoint">curvePoint()</a></li>
            <li><a class="code" href="https://archive.p5js.org/reference/#/p5/curveTangent">curveTangent()</a></li>
        </ul>
        <p>&nbsp;</p>
    </div>
</div>
<p class="narrow-p">&nbsp;</p>
<div class="reference-subgroups clearfix main-ref-page">
    <div class="reference-subgroup">
        <p>&nbsp;</p>
    </div>
</div>
