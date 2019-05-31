# Readerly

## Basic Info
Readerly is an app designed to help you track memories of reading. The actual app's functionality is very simple: users can add pins, which contain the book that they read and where they red it, to their account. Those pins are stored in a list, and the most recent pin placed is the center of the map on the homepage for that user. The app is designed such that adding additional features (such as the ability to look at other user's profiles, or have the user record a specific page they are on for each pin) will be very easy.

##Walkthrough


![](https://i.imgur.com/25B1Nrz.jpg)
Readerly's splash page is clean and simple. Users sign in through OAuth, using a google account, located in the top right corner of the screen, in a nav bar. Currently, the splash page's image is set to be centered on GA's Santa Monica campus, but I hope to use some javascript and the google maps API to actually center it on the user's current location, using GA's campus as a fallback if they deny us access to that data.

![](https://i.imgur.com/s4lSXOF.jpg)

Once we've logged in, the map changes to be centered on our most recently created pin. The nav bar has also updated, with a logout button replacing our login, and the ability to add new pins and view your current list of pins now available.

![](https://i.imgur.com/4rV5Rau.jpg)

The interface for adding pins is very straightforward, but the backend of it is more impressive. The phrases entered by the user query google maps and google books, and the most likely result is grabbed and used. If the user enters a location that google maps can't place (such as NASA), instead Nowhere, Oklahoma is used. This is a placeholder, eventually a failed query will result in an error being thrown and the user being asked to resubmit the form.

![](https://i.imgur.com/IBsXfXI.jpg)

Looking at our list of pins, the title of the book and proper name of the location (according to google maps) is provided. Users can delete any pin that they no longer want to have saved, whether it is due to a false entry or a desire to prune their data somewhat.

## Technologies Used

CSS, EJS, Node.JS, Express, MongoDB (hosted via Atlas), Mongoose, Google Maps API, Google Books API, Bootstrap.

## Getting Started
Feel free to log in and use the walkthrough provided above [to start using Readerly in your life](https://readerly-sdi.herokuapp.com/).

## Next Steps
The possibilities for expansion are endless, but the highest priority things to help the site achieve its next evolution are:

*  The ability to look at other users profiles (seeing only their three most recent pins).
*  The ability to follow users, with a "feed" tab that shows you the combined pins of all the users you follow.
*  The ability to edit pins (such as ones where the user included the wrong location)
*  Page count as an (optional) portion of the form. A user can track all their finished books in a separate tab, as well as seeing all the places they read the book (and how long it took them).
*  Pins should be placed on the map on the splash page, such that if the user scrolled around they could see all the places they read.
*  Advanced authorization, such that even if a user *does* somehow manage to navigate their way to a place they shouldn't be, they cannot make any inputs. The basic version of this is already implemented, but a more rigorous version is necessary before the project is used more publically.

Once those icebox features are achieved, it is likely that Readerly would continue to evolve and demand other changes. At its core, the app is lightweight and the heavy lifting is done by google, which makes expanding it easy, and the options for doing so extensive.