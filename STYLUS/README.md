# Theme folder structure

## Sections

* [Features](#features)
* [Requirements](#requirements)
* [Instructions](#instructions)
* [Resources](#resources)
* [Issues](#issues)
* [Contributing](#contributing)
* [Licensing](#licensing)

## Variables

The variables define the colors, font properties, box properties, etc. for all the widgets. The variables consist of 2 main parts:

  * Base variables:
	1. Colors
	2. Font
	3. Container
	4. Icons
  * Dijit variables:
	These variables are referencing the base variables and consumed by the dijit Stylus file directly.

## Mixins:

  * Mixins to create button styles
  * Mixin to create icon styles
  * Mixin to create progress bar styles
  * Other supporting mixins
  
## How variables work:

				base variables
				/
		Dijit 1 variables
			/
		Dijit 1 .styl
			\
			Stylus
			/
		Dijit 1 .css