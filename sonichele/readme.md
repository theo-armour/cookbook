Sonichele Read Me
===

### Live Demo

<iframe src="http://theo-armour.github.io/cookbook/sonichele/latest/index.html" width=100% height=500px class='overview' >
There is an `iframe` here. It is not visible when viewed on github.com. To view, please go to theo-armour.github.io. See 'Project Links' just below.
</iframe>
_Sonichele ~ wait until the `loaded frames` count goes over 200 then click `run`_


[Sonichele PNG R2 ~ Lights - full screen]( http://theo-armour.github.io/cookbook/sonichele/png-r2/sonichele-png-r2-lights.html )  
[Sonichele PNG R2 ~ Normals - full screen]( http://theo-armour.github.io/cookbook/sonichele/png-r2/sonichele-png-r2-normals.html )  
[Sonichele PNG R2 ~ Simple - full screen]( http://theo-armour.github.io/cookbook/sonichele/png-r2/sonichele-png-r2-simple.html )  
[Sonichele PNG R2 ~ Vectors - full screen]( http://theo-armour.github.io/cookbook/sonichele/png-r2/sonichele-png-r2-vectors.html ) 

* Experimeting with lights and different materials
* Normals and Vectors have very heavy CPU demands. Use these locally.


[Sonichele PNG - full screen (R1)]( http://theo-armour.github.io/cookbook/sonichele/png-r1/sonichele-png-r1.html ) 

* Reads and animates PNG heightmaps
* No lights or shadows


[Sonichele ~ framset - full screen (R6)]( http://theo-armour.github.io/cookbook/sonichele/r5/sonichele-r5.html ) 

* Reads data from a 1,468 files with five lines of CSV each
* Files average arounf 800K each
* Animation has lights and shadows


[Sonichele - full screen (R5)]( http://theo-armour.github.io/cookbook/sonichele/r5/sonichele-r5.html ) 

* Reads data from a 100MB sample of the full 990MB CSV file
* Animation has lights and shadows


[Sonichele - full screen (R4)]( http://theo-armour.github.io/cookbook/sonichele/r4/sonichele-r4.html ) 

* Less satisfactory rendering but uses less of computer rsource


[Sonichele - full screen (R3)]( http://theo-armour.github.io/cookbook/sonichele/r3/sonichele-r3.html )  

* Nice rendering but uses a lot of computing power
* Nice use of MeshNormalMaterial for rendering


[Sonichele - full screen (R2)]( http://theo-armour.github.io/cookbook/sonichele/r2/display-plate-coordinates-r2.html )  

* Reads data from a CSV file with the data of a 13x13 matrix
* Displays a wireframe animation


[Sonichele - full screen (R1)]( http://theo-armour.github.io/cookbook/sonichele/r1/display-plate-coordinates-r1.html )  

* Displays a single frame.
* Reads data from a 100MB sample of the full 990MB CSV file
* Takes perhaps a minute to load
* Nice use of MeshNormalMaterial for rendering

## Concept


### Mission 
<!-- a statement of a rationale, applicable now as well as in the future -->

* Translate numeric sound data in ASCII format to 3D animations viewable in a browser
* Data from Michele Ducceschi's research on Wave turbulence in elastic plates
	* http://ume.ensta-paristech.fr/dfa-theses-et-livres_lang_EN_menu_1
	* http://www.msc.univ-paris-diderot.fr/~berhanu/Ducceschi.pdf
	* http://www.ness-music.eu/wp-content/uploads/2013/06/ducceschi_michele.pdf


### Vision 
<!--  a descriptive picture of a desired future state -->

<!--
## Features
-->


## Road Map

* Adjust speed of replay
* First/Next/Prev/Last frame buttons
* Add logarithmic vertical scale
* Enhance rendering, shading and lighting
* Provide frame by frame movement


## Issues /Bugs



## Project Links

All of the scripts here are [FOSS]( https://en.wikipedia.org/wiki/Free_and_open-source_software ).
Scripts are hosted on GitHub and are viewable as web pages, as described in the 'Read Me' files and as source code.

The three ways of looking at or using the scripts:

1. [Live Demo]( http://theo-armour.github.io/cookbook/sonichele/latest/index.html )  
2. [Read Me]( http://theo-armour.github.io/cookbook/sonichele/ "view the files as apps." ) <input value="<< You are now probably here." size=28 style="font:bold 12pt monospace;border-width:0;" >   
3. [Source Code]( https://github.com/theo-armour/cookbook/tree/gh-pages/sonichele/ "View the files as source code." ) <scan style=display:none ><< You are now probably here.</scan>  

### System Requirements

In order to view the files on this site you will need a device and browser that provides good support for [WebGL](http://get.webgl.org/)
WebGL is the JavaScript API for rendering interactive 3D graphics and 2D graphics within any compatible web browser without the use of plug-ins. 

Generally this means a computer with an Intel Core i3 processor or better with an external GPU such as one made by Nvidia. 
Successful use of the apps on a phone or tablet is highly unlikely. 
A mouse or other pointing device with a scroll wheel is also highly recommended so that you can zoom, pant and rotate in 3D.
 
The apps here are currently being built and tested with the Google Chrome browser. 
Bugs on browsers other than Chrome need not be reported until such time as the work settles down and an effort to support more browsers is initiated.



### Copyright and License

[theo-armour copyright notice and license]( https://github.com/theo-armour/theo-armour.github.io/blob/master/copyright-notice-and-license.md )

This repository contains files that are at an early and volatile stage. Not all licensing requirements may have been fully met let alone identified. It is the intension of the authors to play fair and all such requirements will either be met or the feature in question will turned off.

### Change Log


2014-05-31 ~ Theo

* Many new demos
* Access full-size data sets
* Make the data available in compressed binary files
* Colors not updating properly
* Only plays limited portion of the data / data split into 10 separate files in order to get data up to github


2014-05-08 ~ Theo

* uses 13x13 data  set

2014-05-07 ~ Theo

* First commit



