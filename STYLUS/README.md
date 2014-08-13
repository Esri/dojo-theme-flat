## Variables

The variables define the colors, font properties, box properties, etc. for all the widgets. The variables consist of 2 main parts:

  * Base variables:
	1. Colors
	2. Font
	3. Container
	4. Icons
  * Dijit variables:
	These variables are referencing the base variables and consumed by the dijit Stylus files directly.

## Mixins:

  * Mixins to create button styles
  * Mixin to create icon styles
  * Mixin to create progress bar styles
  * Other supporting mixins
  
## How to create your own custom theme

There are roughly 3 levels of involvement
  1. **"I am okay with how the flat theme looks, I just want to change some basic changes according to my project branding needs."**
    * In this case, just modify the **"colors"**, **"font"**, and **"container"** sections in the ```variable.styl``` file.
  2. **"I want to customize dijits individually."**
    * This requires users to dig into dijit variables level. Search the dijit name that you wish to customize in the ```variables.styl``` file and modify the variables for that specific dijit.
  3. **"I am building my own custom theme based on my own design"**
    * This is most time consuming, which requires modification of css rules in each individual dijit .styl file. And perhaps the mixins that create styles for the buttons and icon font.
 
