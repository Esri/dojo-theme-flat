# DISCONTINUED

It is time to move forward and embrace all the modern UI libraries / frameworks instead of sticking to Dojo dijits :ok_hand:

--- Yiwei Ma

# dojo-theme-flat

This theme framework is customized for Dojo dijits, dgrid, as well as some of the ArcGIS API for JS widgets using [Stylus](http://learnboost.github.io/stylus/).

This theme is built based on Dojo's [Claro theme](https://github.com/kfranqueiro/dijit-claro-stylus).

Test pages: http://yiweima.github.io/flatdojo/

## Sections

* [Features](#features)
* [Requirements](#requirements)
* [Instructions](#instructions)
* [Resources](#resources)
* [Issues](#issues)
* [Contributing](#contributing)
* [Licensing](#licensing)

## Features

This theme includes styles for the following components:

#### Dojo Dijits:

  * All "dijit/form" dijits
  * All "dijit/layout" dijits
  * All other Dojo dijits (Dialog, Menu, Calendar, Toolbar, etc.)
  * RTL supported
  
#### Dgrid:

  * Basic dgrid styles (dgrid.css)
  * One skin is included
  * All extensions
  * RTL supported
  
#### ArcGIS API for JavaScript Widgets:

Only these widgets are supported:

  * Fixed pan buttons
  * Zoom Slider
  * Basemap Gallery
  * Bookmarks
  * Geocoder
  * Legend
  * Measurement
  * Overview Map
  * Popup
  * Scalebar
 
#### Icons and Colors

  * Most icons are replaced with [FontAwesome](http://fortawesome.github.io/Font-Awesome/get-started/) icon fonts.
  * Esri's branding colors are used as default.
  
## Requirements
* Using CSS files only:

  No requirements

* Using Stylus files:

  * [Nodejs](http://nodejs.org/)
  * [Stylus](https://www.npmjs.org/package/stylus) - CSS preprocessor used to compile .styl files 
  * [Nib](http://visionmedia.github.io/nib/) - a Stylus plugin that provides cross-browser CSS3 mixins . 
 
## Instructions
  * ####CSS only:
    1. Download the "CSS" folder locally
    2. For **Dojo dijits**, include:
       
       ```HTML
       <link rel="Stylesheet" type="text/css" href="path/to/dojo/flat.css/>
       ```
       
    3. For **dgrid**, include:
       
       ```HTML
         <link rel="Stylesheet" type="text/css" href="path/to/dgrid/css/dgrid.css/>
       ```
       ```HTML
         <link rel="Stylesheet" type="text/css" href="path/to/dgrid/skins/skin.css/>
       ```
       
       And other stylesheets for extensions in the "dgrid/css/extensions" folder if needed. For example, the style sheet for Pagination extension: 
       
       ```HTML
          <link rel="Stylesheet" type="text/css" href="path/to/dgrid/css/extensions/Pagination.css/>
       ```
       
    4. For **ArcGIS API for JS widgets**, includet:
       
       ```HTML
       <link rel="Stylesheet" type="text/css" href="//js.arcgis.com/3.10/js/esri/css/esri.css/>
       ```
       ```HTML
       <link rel="Stylesheet" type="text/css" href="path/to/esri/css/esri_custom.css/>
       ```
       
  * ####Using Stylus files
    
    ##### Install required tools:
       1. Nodejs - Click [here](http://nodejs.org/) to download the installer and run it
       2. Stylus - Open command line and run ```npm install stylus -g``` 
       3. Nib - Open command line and run ```$ npm install nib -g```
       
    ##### Compile ```.styl``` files using command line:
       Here explains how to use command line to compile ```.styl``` files, click [here](http://learnboost.github.io/stylus/docs/executable.html) for more examples on how to compile ```.styl``` files in general. You can also use [Grunt](http://gruntjs.com/) if you are familiar with the tool.

       1. Compile single file: 
          ```stylus -u nib -w path\to\filename.styl -o path/to/output/foldername/```
       2. Compile all files within a folder: 
          ```stylus -u nib -w path\to\foldername -o path/to/output/foldername/```
          
## Resources

  * [Stylus](http://learnboost.github.io/stylus/)
  * [Nib](http://visionmedia.github.io/nib/)
  * [A nice article on how to get started with Stylus](http://bootstrap.pk/tutorials/getting-started-with-stylus-css-pre-processor/)

## Issues
#### Browser Support
  Only tested with Chrome (v36), FireFox (v31), IE 11 and IE 8, 9 with IE 11's emulation tool.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2013 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's
[license.txt](license.txt) file.

[](Esri Tags: Dojo, CSS, theme)
[](Esri Language: CSS)
