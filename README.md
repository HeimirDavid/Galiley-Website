# Galiley - Band Website 
Galiley is a cover band for hire. They play on everything from weddings
to private parties or school events. This website is ment to showcase what
service the band offers and give potential customers more information. Galiley is
a real band that I used to play in, but we are not playing at the moment. Therefore 
this website is half-fiction, so some content on here is made up.


**Live demo of the website:** https://heimirdavid.github.io/Galiley-Website/
___ 

## UX

#### User Stories

* As a band for hire who are looking for more gigs to play we want to showcase our
  services: introduce us to potential cusomers, show what we play and what events, 
  pricing, where we are playing and how to contact us. 
* As a customer, I want to find out if the band fits for my event, if they are within my
  budget and how to hire them. 
* As a fan, I want to see upcoming gigs and their whereabouts, videos and music, and links
  to social media. 

#### Strategy

The main goal for this website is to have an eye catching design and easily accessibly information about the service the band provides 
to increase gigs for different events. 

#### Scope

For users looking for a band to hire for their event, I wanted information about what events the band does, media with setlists, 
their pricing and easily accessable contact information in multiple ways. Enough to catch interest but still encourage the user 
to contact the band. 

#### Structure

* On the landing page I wanted an "About Us" section, "What We Offer" section and a "Reviews" section to straight away give the
user an idea of who the band are, and why they should hire them.

* The second page would be the media page with setlists, audio and video to give a taste of what the band can offer to the user. 

* The third page would be schedule for fans and potential customers to see when the next show is and if the band could be availible
  for the users event in mind. 

* The fourth page is the "Pricing" page. The page is devided into two sections, one with information on how the band prices their events and
  encourage the user to contact the band to get a deal of their own. Second section contain some fixed packages with different services
  and prices. 

* The fifth page contains a contact form, making it easy for the user to get in touch. 

#### Skeleton 

Wireframes made with Balsamiq:  

[Home Page](https://github.com/HeimirDavid/Galiley-Website/blob/master/assets/wireframes/Home_Page.png)  

[Media Page](https://github.com/HeimirDavid/Galiley-Website/blob/master/assets/wireframes/Media_Page.png)  

[Schedule Page](https://github.com/HeimirDavid/Galiley-Website/blob/master/assets/wireframes/Schedule_Page.png)  

[Pricing Page](https://github.com/HeimirDavid/Galiley-Website/blob/master/assets/wireframes/Pricing_Page.png)  

[Contact Page](https://github.com/HeimirDavid/Galiley-Website/blob/master/assets/wireframes/Contact_Page.png)  
 

#### Surface

Instead of using a photo gallery I wanted a lot of interesting background images to make the content more interesting.
Since the band is a genre neutral band I wanted a greyscale color scheme, 
quite neutral typography, and a grey-blue background color to match the background images. 

___
## Features 
 

#### Excisting Features

* **About Us** - Allows the user to get to know more about the people and the band they would be hiring. 
* **What We Offer** - Allows the user to read about what kind of service they provide, and see if it fits with their event. 
* **Reviews** - Let's the potential customer read other peoples reviews and get an insight to what it would be to hire the band.
* **Setlist Sample** - Allows the user to both see the songs, but also listen to sample setlists the band could play on their event. 
* **Video** - Let's the user see and hear what the band can provide. 
* **Schedule** - Allows the fans to find the next gig they would like to attend. In addition to letting users who are looking to hire 
  get a sence if the band is availible or not. 
* **Our Pricing** - Allows the user to read more about how the band price their events, and also what info to bring when contacting them to
  get a deal of their own. 
* **Pricing Packages** - Let's the user get a feel of what different events cost and what is included in them. 
* **Contact** - Let's the user contact the band with a request.
* **Follow Us** - Let's the user find social media pages and find more news there. 

#### Features left to implement

* The contact form doesn't work as it is, which needs to be fixed in the future. 
* Would like more videos of the band, displaying different types of events. As is at the moment the 
  two videos displayed are from a music competition and is not the most relevant of content, but okey for now. 

#### Another Feature Idea 
 * Would like to let the user pick out a package of their own and make their own custom setlist 
 to that package of their choice.

* Would also like to translate the site so it is available in both english and icelandic.
 ____
 
### Technologies
**Languages:** HTML and CSS.

##### Libraries: 
* Bootstrap 4 CSS - Used mainly for it's gridsystem, the navigation bar and some buttons.     
      link: https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
* Bootstrap 4/jquery JS - Used for the responsiveness and the colapse of the navigation bar.
  links: https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js  | 
         https://code.jquery.com/jquery-3.3.1.slim.min.js
* Fontawesome - Used for icons. link: https://kit.fontawesome.com/2ea8c5e5d2.js
___

## Testing
* W3C validator was used both on the CSS and the HTML files. A few varnings on the CSS file due to webkit. And a few in
  the HTML files: iframe for spotify and youtube, and missing alt tag on an image. Both issues have been taken care of.
* Responsivness and coverage have been tested with the chrome devtools and also on multiple
  browsers (Chrome, Edge, Safari ) and deviced. One issue came up with browser support for the CSS rule "background-attachment: fixed"
  on one tablet. This has been fixed with replacement of the rule and use of the pseudo element "before", with code found on Stackoverflow and creditied for 
  below and in the css file. 

  #### Testing User Stories
* ***"As a customer, I want to find if the band fits for my event, if they are within my
  budget and how to hire them."*** - In the "About Us" and "What We Offer" on the home page it is described what events the band can do 
  and also how it can be tailored for the customer. On the "Pricing" page there are both information for packages and what they cost, 
  including info on how they price events and how to contact them, with a direct link to the contact page.

* ***"As a fan, I like to see upcoming gigs and their whereabouts, videos and music, and links
  to social media."*** - On the "Schedule" page they can read about upcoming gigs. Videos and music can be found on the "Media" page,
  and direct links to social media are in the footer under the "Follow Us!" section. 

**Social Media:** The facebook link works and takes you to the facebook page of the band. But the band does not have a youtube page or 
 an instagram page so those links are to the band manager and pianist, Guðjón Jónsson. Which has approved that I use his pages
 for this website. 

Note: As this website is only HTML and CSS and hosted on github, the form does not submit anything and therefore does not work. 
As more testing goes i've tested every button, video, audio and link on different browsers and devices.



***The form has been tested as follows:*** 
1. Go to the "contact" page.
2. Try to submit the empty form and verify that an error message about the required fields appears.
3. Try to submit the form with an invalid email address and verify that a relevant error message appears.
4. Try to submit the form with all inputs valid and verify that a success message appears. - This ***does not work*** since the 
   form does not actually submit.
____
## Deployment

I deployed the site on GitHub Pages, straight from the master branch. link: https://heimirdavid.github.io/Galiley-Website/

**The steps I took was:** 
1. Under my site's (Galiley-Website) reposity I went to settings.
2. Under "GitHub Pages", I used the source drop-down and choosed master-branch as publishing source.

There is not any difference between the deployed version and the developement verision.

Note: I forgot to put the .c9 file in a  .gitignore file in the beginning of the project, so that got uploaded to github at first as well but has been fixed.

## Credits
* I found a soloution for the issue I had with browser support for the "background-attachment: fixed"
 on stack overflow, answer from "vincent" and copied the code from there. Source: https://stackoverflow.com/questions/26372127/background-fixed-no-repeat-not-working-on-mobile
* Credits to this article I found on making the youtube iframe responsive. Written by John Surdakowski and code copied from there.
   Source: https://avexdesigns.com/responsive-youtube-embed/


#### Content

All the text was written by me for this webpage. 

#### Media

The background picture on the "About Us" section is from unsplash from @v2osk. link: https://unsplash.com/photos/-LRuNvY8W7Q

The rest of the pictures are taken by Kristinn Ingi (Header image) Palli Kristmundsson and Brynjar Steinn Stefánsson and owned by the band.

#### Inspiration 

I received inspiration for this project from two main sources. First is the Code Institute project Resume-project, where the footer 
and the "Contact" page has it's similarities in the structure.  

Second source would be the "Grade 5 Example Project: Haley Schafer Portfolio", where I got inspiration for the landing page design,
with the fixed background image and layout. 

This website has been in my mind for quite some time since this is a band I used to play in. I've felt before that this would be 
a good asset for us and therefore it was an easy and fun choice to do this for my Milestone Project 1. 

#### Acknowledgements

Thanks to Moosa Hassan, my mentor for guiding me through this project.

Thanks to the slack channel of Code Insitute, where I found lots of answers to my questions. 

Thanks to https://stackoverflow.com/, that almost felt like my second home during this project.

And thanks to my fellow bandmates at Galiley for giving me good feedback and their inputs to this project. 