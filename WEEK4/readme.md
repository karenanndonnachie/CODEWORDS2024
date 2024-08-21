<h2>Hour of Code</h2>
<h3>If you missed the class &amp;/or still have not started learning p5js....</h3>
<p>If you need to get started with creative coding, or want to share/spread the love, these are two good places to start: <a href="https://p5js.org/get-started/" target="_blank" rel="noopener">https://p5js.org/get-started/</a>&nbsp; &amp; Karen ann's <a class="inline_disabled" href="https://vimeo.com/showcase/7191039" target="_blank" rel="noopener">"Minutes of Code" [PW = A2THEK ]&nbsp;</a></p>
<p>Also please look at all of the other weeks here in github where you can see the code and test the sketches for yourselves. If you want to try anyone's code (ours, or your peers) we suggest you hit 'COMMAND + N' in your processing IDE to open a new sketch then replace the text in the edit window with the cut/pasted code from teh sketch you found. That way you have a p5js folder with the relevant libraries etc.</p>
<img src="https://github.com/user-attachments/assets/c0f64348-60c7-4876-8d29-46ce31b1964c"/>

<img src="https://github.com/user-attachments/assets/94c933b9-02a5-428e-add6-f2822829acf5" />

<ul>
    <li><a class="inline_disabled" href="https://p5js.org/reference/#/p5/random" target="_blank" rel="noopener">random(): Generate a random variable</a></li>
    <li><a class="inline_disabled" title="Link" href="https://archive.p5js.org/reference/#/p5/arc" target="_blank" rel="noopener">explanation of 'arc'</a></li>
    <li><a class="inline_disabled" href="https://p5js.org/reference/#/p5/mouseX" target="_blank" rel="noopener">mouseX: where the mouse is in the x-axis</a></li>
    <li><a class="inline_disabled" href="https://p5js.org/reference/#/p5/mouseY" target="_blank" rel="noopener">mouseY: where the mouse is in Y</a></li>
    <li><a class="inline_disabled" href="https://p5js.org/reference/#/p5/map" target="_blank" rel="noopener">map(): how to force measured values to fit into our 'desired range' of values</a></li>
    <li><a class="inline_disabled" href="https://p5js.org/reference/#/p5/mousePressed" target="_blank" rel="noopener">function mousePressed()</a> : do something when mouse is pressed</li>
    <li>Generate a random `RGBa` color: <span style="color: #236fa1;">newColor=[random(0,255),random(0,255),random(0,255), random(0,20)];&nbsp;</span> &nbsp;--&gt; how to generate a random color with a random transparency&nbsp;</li>
    <li><a class="inline_disabled" title="Link" href="https://archive.p5js.org/reference/#/p5/preload" target="_blank" rel="noopener">function preload() {}</a> especially to <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/loadImage" target="_blank" rel="noopener">load images</a>&nbsp; &amp;/or fonts &amp;/or sound/video files</li>
    <li><a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/image" target="_blank" rel="noopener">Using images</a> declare your image variable eg.
        <pre>var pic;<br /><br />function preload(){<br /><br />loadImage('data/yourimage.jpg');<br /><br />}<br /><br />// drag your image onto your processing window to copy your image file to your 'data/ folder'<br /><br />// then you can display the image in function draw() {} with 'image(pic, x, y, w, h);'<br /><br />function draw(){<br /><br />image (pic, width/2, height/2, 400, 400);<br /><br />}</pre>
    </li>
    <li>Using filters on images <a href="https://archive.p5js.org/reference/#/p5.Image/filter" target="_blank" rel="noopener">https://archive.p5js.org/reference/#/p5.Image/filter</a>&nbsp;</li>
    <li><a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/text" target="_blank" rel="noopener">How to use TEXT &amp; fonts in p5</a> we covered <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/textAlign" target="_blank" rel="noopener">textAlign();</a> <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/textSize" target="_blank" rel="noopener">textSize();</a> <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/translate" target="_blank" rel="noopener">translate();</a> <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/rotate" target="_blank" rel="noopener">rotate();</a> as well as setting a variable that can increase with <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/mousePressed" target="_blank" rel="noopener">function mousePressed(){ } </a> setting an <a class="inline_disabled" href="https://archive.p5js.org/reference/#/p5/mouseIsPressed" target="_blank" rel="noopener">if(mouseIsPressed() ===true){}</a> color change, and many more... &nbsp;</li>
</ul>
<p>The folder with a version of the sketch:</p>
<p><a href="CODEWORDS2024_TEXT/">CODEWORDS_TEXT/</a></p>
<p>Check these out if you have time:</p>
<h2>Mouse Events</h2>
<p>Working with mouse events using p5js is easy. We can create sketches that do various things based on the mouse's position on the screen or when the mouse button is pressed, etc. Here is a list of the mouse related functions in p5js:</p>
<h4>VARIABLES</h4>
<ul>
    <li><a href="http://p5js.org/reference/#/p5/mouseX">mouseX</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseY">mouseY</a></li>
    <li><a href="http://p5js.org/reference/#/p5/pmouseX">pmouseX</a></li>
    <li><a href="http://p5js.org/reference/#/p5/pmouseY">pmouseY</a></li>
    <li><a href="http://p5js.org/reference/#/p5/winMouseX">winMouseX</a></li>
    <li><a href="http://p5js.org/reference/#/p5/winMouseY">winMouseY</a></li>
    <li><a href="http://p5js.org/reference/#/p5/pwinMouseX">pwinMouseX</a></li>
    <li><a href="http://p5js.org/reference/#/p5/pwinMouseY">pwinMouseY</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseButton">mouseButton</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseIsPressed">mouseIsPressed</a></li>
</ul>
<h4>FUNCTIONS</h4>
<ul>
    <li><a href="http://p5js.org/reference/#/p5/mouseMoved">mouseMoved()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseDragged">mouseDragged()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mousePressed">mousePressed()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseReleased">mouseReleased()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseClicked">mouseClicked()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/mouseWheel">mouseWheel()</a></li>
</ul>
<h2><a id="user-content-touch-events" class="anchor" href="https://github.com/karenanndonnachie/Slave-To-The-Algorithm/tree/master/P5js#touch-events" aria-hidden="true"></a>Touch events</h2>
<h4>VARIABLES</h4>
<ul>
    <li><a href="http://p5js.org/reference/#/p5/touchX">touchX</a></li>
    <li><a href="http://p5js.org/reference/#/p5/touchY">touchY</a></li>
    <li><a href="http://p5js.org/reference/#/p5/touches[]">touches[]</a></li>
</ul>
<h4>FUNCTIONS</h4>
<ul>
    <li><a href="http://p5js.org/reference/#/p5/touchStarted">touchStarted()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/touchMoved">touchMoved()</a></li>
    <li><a href="http://p5js.org/reference/#/p5/touchEnded">touchEnded()</a></li>
    <li><a href="https://p5js.org/reference/#/p5/deviceShaken">deviceShaken()</a></li>
</ul>
<p class="">&nbsp;</p>
<blockquote id="emble-customise-1820467e" class="customise emble emble-bq emble-bq-citation-on emble-bq-fullwidth-on emble-bq-theme-rmit emble-prevent-insert" data-context-menu="customise delete" data-emble-name="Blockquote" data-customise="new-bq-citation new-bq-fullwidth new-bq-theme" data-emble-version="2.0">
    <div class="bq-before">&nbsp;</div>
    <span>If something is boring after two minutes, try it for four. If still boring, then eight. Then sixteen. Then thirty-two. Eventually one discovers that it is not boring at all.</span><br /><cite>John Cage<br /></cite>
</blockquote>
<p class="narrow-p">&nbsp;</p>
