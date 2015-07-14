# INTRODUCTION #

Like many Diablo II players I hoard every rune I find. I have a GoMule stash dedicated to runes and it has over 3,000 runes stashed away. The vast majority of them are low or mid runes but there are also some high runes as well. While I have some of the many desired runewords (such as Enigma, Grief, Infinity, etc.) there are still many others that I would like to obtain (Beast, Fury, Phoenix, Doom, to name a few). In my quest to do so I found myself watching my rune stash to keep track of certain runes to see what I needed to get a certain runeword. Due to the very large number of runes across all the different types, I wanted an easy way to calculate how high I could "cube" my runes (assuming I had the gems). That is how this project came to be.


## File Usage ##

Everything is client-side, so simply [download](https://bitbucket.org/Bonesnap/rune-calculator/downloads) the latest version into a folder on your computer. Currently, the application expects a .html file named RunesReport.html (obviously the name of my runes stash - perhaps yours, too!). Generate the report via GoMule and place the file (you may have to rename it if your stash is named something else) into the same folder that you downloaded the application to.

Open the index.html in your browser and click the **GoMule** button. This reads the GoMule report file and loads the corresponding values into the fields on the form. Don't worry if you don't have certain runes; the application will automatically fill in zeroes for any blank fields.

Then, click **Calculate**. You will see the original values appear next to their corresponding fields, and each field that has a value besides zero will be coloured green for easy viewing.

That's it! You can now see how high your rune stash will cube to if you had all the necessary gems (and time!).

Below is a quick rundown of what each button does.

### GoMule ###

Reads the GoMule report file and loads the values into the form.

### Calculate ###

Runs the calculation and updates the fields on the form with their new calculated values (basically the leftover runes).

### Clear ###

Clears the form as if you had opened the project for the first time.

### Reset ###

Clears the form but replaces the original values into their respective fields. Useful for when you want to dream and say to yourself, "So if I had a Ber rune...".

## Manual Usage ##

You can also just simply fill in the fields with random numerical values and click calculate; a report file is **not** required to use the application.

## Browser Support ##

This project uses modern HTML5 and CSS3 techniques and therefore should be used in a modern browser. Firefox, Chrome, Opera, and Safari (on OSX) should work correctly. IE10 is the minimum version of Internet Explorer.

## License ##

The project is licensed under the [GNU GPLv3](http://www.gnu.org/licenses/gpl.html) and is free software.