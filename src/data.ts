/** 
 * This file contains all of the content for the site. The idea is that all the dynamic content is 
 * in here and I can render it all with just one page. 
*/

import { Page } from './interfaces/page';
// import { RepositoryList } from './interfaces/repo';

// Defines the different pages in the site and the content displayed on each page.
// , {
//     name: '',
//     titlePage: '',
//     titleTab: '',
//     body: '',
// } 
export const Pages: Page[] = [
    {
        name: 'Books',
        titlePage: 'Book Source Code',
        titleTab: 'Books',
        body: "I've written a total of 8 books; 7 on software development topics. The repositories listed below are the source code repositories for the example code used in each of the books. My books tend to tell the complete story of the topic, but doesn't do a lot to teach the fundamental skills you need to work with the technology. The examples are generally complete examples and are shown in complete applications.",
        repositories: [
            {
                name: 'Learning Progressive Web Apps',
                url: 'https://github.com/johnwargo/learning-pwa-code',
                description: "For my latest book, I took a different approach to the sample applications and delivered three separate applications and we built them together in stages as we worked through the chapters. This repository contains all of the code from each chapter, including the Tip Calculator, PWA News site, and the Browser Push exerciser app."
            }, {
                name: 'Apache Cordova 3 Programming',
                url: 'https://github.com/johnwargo/cordova-programming-code',
                description: "Hosts the source code from my Apache Cordova 3 Programming book."
            }, {
                name: 'BlackBerry Development Fundamentals',
                url: 'https://github.com/johnwargo/blackberry-development-fundamentals-code',
                description: "This was my first technology book (my other first book was a book for Soccer referees) and this repository contains all the code from the book."
            }, {
                name: 'Apache Cordova API Cookbook',
                url: 'https://github.com/johnwargo/apache-cordova-api-cookbook-code',
                description: "Hosts the source code from my Apache Cordova API Cookbook book."
            }, {
                name: 'Apache Cordova 4 Programming',
                url: 'https://github.com/johnwargo/ac4p',
                description: "Hosts the source code from my Apache Cordova 4 Programming"
            }, {
                name: 'PhoneGap Essentials',
                url: 'https://github.com/johnwargo/phonegap-essentials-code',
                description: "Host the source code for my PhoneGap Essentials book. This was my first book on Apache Cordova (Cordova was called PhoneGap at the time). I ultimately wrote 4 books on the topic and worked on several commercial products related to Apache Cordova in my career since then."
            }
        ]
    }, {
        name: 'Apache Cordova',
        titlePage: 'Apache Cordova',
        titleTab: 'Cordova',
        body: "I wrote four books on Apache Cordova and contributed to the project for many years; you can find references to my Cordova books on the Books page of this site. The repositories here are taken from those books; they're the public, installable versions of the Apache Cordova Plugins I described in PhoneGap Essentials, Apache Cordova 3 Programming and Apache Cordova 4 Programming.",
        repositories: [
            {
                name: 'Apache Cordova Meaning of Life Plugin',
                url: 'https://github.com/johnwargo/johnwargo-cordova-plugin-mol',
                description: "The source code for a JavaScript-only Apache Cordova plugin. I created this plugin because Cordova plugins don't have to have native code in them and I wanted a way to illustrate that. I called the plugin Meaning of Life (MOL) as a shorter version of the 'The Answer to the Ultimate Question of Life, the Universe, and Everything' from The Hitchhiker's Guide to the Galaxy (the plugin returns 42, the answer to the Ultimate Question)."
            }, {
                name: 'Apache Cordova Carrier Plugin',
                url: 'https://github.com/johnwargo/johnwargo-cordova-plugin-carrier',
                description: "This is the source code for one of the Apache Cordova plugins from my books. This plugin uses native device-side code (on Android and iOS) to provide the name of the mobile carrier the device running the application uses"
            }
        ]
    }, {
        name: 'Flutter',
        titlePage: 'Flutter Development',
        titleTab: 'Flutter',
        body: "I've been doing a lot of Flutter development lately. When I figure out how to do something in Flutter that isn't documented very well anywhere, I usually build a complete example application and publish it for others to learn from. This list of repositories reflects the current results of those efforts.",
        repositories: [
            {
                name: 'Flutter Navigation Example Application',
                url: 'https://github.com/johnwargo/flutter-navigation-sample',
                description: "I was building a Flutter application that needed to pass data from one page to another and also send data back to the calling page. I created this sample application to illustrate how to do that. There was example code available online, but I wanted to test it all out in a complete application, so here it is."
            }, {
                name: 'Flutter Dialog Example Application',
                url: 'https://github.com/johnwargo/flutter-dialog-sample',
                description: "I was building a Flutter application and I wanted to display some dialogs to indicate error conditions and action results. I created this sample application to illustrate how to do that. There was example code available online, but I wanted to test it all out in a complete application, so here it is."
            }, {
                name: 'Flutter Android Connectivity Permissions Example Application',
                url: 'https://github.com/johnwargo/flutter-android-connectivity-permissions',
                description: "I was building a Flutter application that accessed the device's Wi-Fi settings and noticed that it wouldn't work unless the application first asked the user for permission to access the device's current location (don't ask, it's complicated). So I created this application that demonstrated how to do that."
            }, {
                name: 'Flutter ESP Touch Example Application',
                url: 'https://github.com/johnwargo/esp_touch_flutter',
                description: "I was doing some work with the Espressif ESP32 platform and one of the platform's cool features is that you can remotely configure the Wi-Fi settings in the device. I'm not an experienced Android developer (I can write Android apps, but there's a lot more I need to know to be proficient) and I wanted to build my app in Flutter, so I had to learn how to do the whole Wi-Fi setup thing in Flutter first. There was an esptouch_flutter package from the community that did it, but there was a whole UI needed along with special permissions from the user, so I built this complete sample application to wire it all together into one example."
            }, {
                name: 'Flutter Future Builder Example Application',
                url: 'https://github.com/johnwargo/flutter-future-builder',
                description: "I was building a Flutter application and I needed to be able to wait to update the home page's UI until after the app initialized the configuration settings module. Flutter's FutureBuilder enables you to automatically rebuild the UI based on the results of some future result and I built this example application to show more completely how to use it."
            }, {
                name: 'Flutter Logging Package Example Application',
                url: 'https://github.com/johnwargo/flutter-logging-sample',
                description: "A simple app demonstrating how to use the Flutter Logging library. You can use print statements to output text to the console in a Flutter application, but the Logging package wraps it up with additional functionality. I was trying to learn how to use this package (the documentation was...light) so I build this app to team myself how to use it. Of course, I then submitted a pull request to the package repository to augment the documentation based on what I learned."
            }
        ]
    }, {
        name: 'Ionic',
        titlePage: 'Ionic Development',
        titleTab: 'Ionic',
        body: "Aaah, I love working with the Ionic Framework. I learned Ionic many years ago while working as a consultant at Microsoft. Since then, I've created many Ionic apps, including several apps in the Apple and Google app stores. When I figure out how to do something in Ionic that isn't documented very well anywhere, I usually build a complete example application and publish it for others to learn from. This list of repositories reflects the current results of those efforts.",
        repositories: [
            {
                name: 'Weather Sample Application (Ionic 4)',
                url: 'https://github.com/johnwargo/weather-app-ionic-4',
                description: "The full source code for a simple weather application built using Ionic 4."
            }, {
                name: 'Ionic Slides Example Application',
                url: 'https://github.com/johnwargo/ionic-slides-example',
                description: "For several of my Ionic applications, I wanted to use the Slides metaphor as a quick intro to the application. There were a lot of articles that showed how to 'use' Slides in Ionic, but none of them were complete examples. So, I built one to teach myself, then published the results here"
            }, {
                name: 'Ionic Edit Object Example Application',
                url: 'https://github.com/johnwargo/ionic-edit-object-sample',
                description: "One of the cool features of Reactive development is the two-way binding it provides. Make an update to an object in your code or in the UI, and it automatically updates the other. A bad side-effect of this is that when you make a change to an app setting in the Settings page, it automatically writes it to the config. Since most settings pages allow the user to cancel their edits (by pressing the Cancel button), I had to figure out a way to do this in Ionic. The solution's evolved a bit over time, but this was my first sample app demonstrating two ways to edit an object in Ionic."
            }, {
                name: 'Ionic Cascading Providers Example Application',
                url: 'https://github.com/johnwargo/ionic-cascading-providers',
                description: "This is my earliest Ionic sample application. As I learned about Providers in Ionic, I was curious whether I could programmatically 'pick' my provider at runtime and this sample application validates that you can."
            }, {
                name: 'Ionic Pipes Example Application',
                url: 'https://github.com/johnwargo/ionic-pipes-example',
                description: "Pipes are a really cool feature of Angular (Ionic runs on top of Angular by default) and I needed to create some for a project I was working on. I had some issues getting my pipes to work at first, so I wrote this simple sample application to help me figure it out."
            }
        ]
    }, {
        name: 'IoT',
        titlePage: 'IoT Projects',
        titleTab: 'IoT',
        body: "It has been very a long time since my day job was writing code, and I still prefer writing code to most other things, so I spend what time I can, well, writing code. I also love playing with different single board computers (SBC) and microcontrollers, so, as you can see here, my biggest list of repositories is here. The repository list below reflects all of my public projects for Raspberry Pi, Arduino, Tessel, Particle, and who knows what else.",
        repositories: [
            {
                name: 'Tessell Weather Station (Weather Underground)',
                url: 'https://github.com/johnwargo/tessel_weather_station',
                description: "I'm very interested in JavaScript-based microcontrollers  and the Tessel 2 is my current favorite. When I ordered my first couple of Tessel devices, I picked up their Climate module which provides simple environmental measurements. With that in hand, what else could I do but build a weather station that uploaded local conditions to Weather Underground."
            }, {
                name: 'Tessel Weather Station (M2X)',
                url: 'https://github.com/johnwargo/tessel-m2x-weather-station',
                description: "I'm very interested in JavaScript-based microcontrollers  and the Tessel 2 is my current favorite. When I ordered my first couple of Tessel devices, I picked up their Climate module which provides simple environmental measurements. This is a Tessel-based weather station similar to the Tessel Weather Station (Weather Underground) below; this one uploads its weather data to the AT&T M2X service. At the time I built this, I was doing some freelance writing for AT&T and their IoT platform, and this weather station gave me an excellent platform to send data to their data storage service."
            }, {
                name: 'Tessel Garage Door Controller',
                url: 'https://github.com/johnwargo/tessel-garage-door-controller',
                description: "I'm very interested in JavaScript-based microcontrollers  and the Tessel 2 is my current favorite. When I ordered my first couple of Tessel devices, I picked up their Relay module which provides a simple way to programatically control a switch. Of course one of the projects I had to do was a remote garage door opener. This project hosts a web server on the Tessel device and provides a simple interface for opening/closing my garage door. I later built a much more capable version of this on the Particle platform that I've had running in my garage for years now."
            }, {
                name: 'Seeed Studio Relay Board Library (V2)',
                url: 'https://github.com/johnwargo/seeed-studio-relay-v2',
                description: "This is an updated version of the Python library for the Seeed Studio Relay Board. In this version, I updated the library to support multiple relay boards."
            }, {
                name: 'Seeed Studio Relay Board Library (V1)',
                url: 'https://github.com/johnwargo/seeed-studio-relay-board',
                description: "I love playing with relays, so I've picked up every relay board I can find for Raspberry Pi. One of them is the board from Seeed (three E's, not sure why) Studio. When I started playing with their board, I noticed that example code and detailed instructions were lacking, so I repackaged their code into a Python library and updated the documentation. Seeed later updated their Wiki page for the board to point to my repo here."
            }, {
                name: 'Raspberry Pi Relay Timer',
                url: 'https://github.com/johnwargo/raspberry-pi-relay-timer',
                description: "As I played with the different relay boards for the Raspberry Pi, I built this timer application that enabled me to turn a relay on and off on a particular scheduled. I built versions of this for Arduino, but the Raspberry Pi platform enabled me to do more interesting things like support dynamic time ranges and turning the relay on or off based on sunrise and sunset times for the current location."
            }, {
                name: 'Raspberry Pi Relay Controller (Seeed Studio)',
                url: 'https://github.com/johnwargo/raspberry-pi-relay-controller-seeed',
                description: "Along with the Seeed Studio Relay board library, I needed an application to test it, so I built this web-based relay controller application for the Seeed Studio Raspberry Pi Relay Board V1.0. It only supports a single relay board and gives you a simple ui (Bootstrap-based) for interacting with the state of the relays."
            }, {
                name: 'Pi Remind Zero Blinkt!',
                url: 'https://github.com/johnwargo/pi-remind-zero-blinkt',
                description: "This is the third version of my Pi Remind project, built using the Raspberry Pi Zero and the Pimoroni Blinkt! (8 LEDs)."
            }, {
                name: 'Pi Remind HD',
                url: 'https://github.com/johnwargo/pi-remind-hd',
                description: "This is the second version of my Pi Remind project, built using the Pimoroni Unicorn HAT HD (256 LEDs)."
            }, {
                name: 'Pi Remind',
                url: 'https://github.com/johnwargo/pi-remind',
                description: "Pi Remind is a series of projects I built using the Raspberry Pi. Essentially this connects the Pi to my Google Calendar and visually reminds me of my upcoming appointments. This is the very first version, built using the Pimoroni Unicorn HAT (64 LEDs)."
            }, {
                name: 'Raspberry Pi Relay Controller (ModMyPi)',
                url: 'https://github.com/johnwargo/pi-relay-controller-modmypi',
                description: "This project implements a simple web-based application to control the ModMyPi Relay Board. It runs as a Flask application on the Raspberry Pi delivering a simple web app to interact with the relay board."
            }, {
                name: 'Raspberry Pi Weather Station (Simple)',
                url: 'https://github.com/johnwargo/pi-weather-station-simple',
                description: "This is a version of the Raspberry Pi Weather Station that uses a simple environmental sensor rather than the Astro Pi board. It's designed to be a less expensive alternative."
            }, {
                name: 'Raspberry Pi Weather Station',
                url: 'https://github.com/johnwargo/pi-weather-station',
                description: "When the Raspberry Pi community sent the Raspberry Pi Sense HAT to the International Space Station through the Astro Pi project, I knew I needed to get one and play with it. The result? A Raspberry Pi-based weather station that uploads data to Weather Underground. This project was published in Make Magazine"
            }, {
                name: 'Arduino Glowing Pumpkin (Trinket & NeoPixel)',
                url: 'https://github.com/johnwargo/glowing-pumpkin-trinket-neopixel',
                description: "I built a bunch of these years ago and we put them in pumpkins in all of our front upstairs windows at Halloween. The project randomly fades in and out multiple Halloweeny colors (red, orange, purple, etc.) with periodic lightning or electricity flashes. This version uses the Adafruit Trinket board."
            }, {
                name: 'Arduino Glowing Pumpkin (Feather & NeoPixel)',
                url: 'https://github.com/johnwargo/glowing-pumpkin-feather',
                description: "This project is very similar to the other Glowing Pumpkin project (below) although this is designed for a huge pumpkin and uses the Adafruit Feather board. I put this pumpkin in my house's front atrium."
            }, {
                name: 'Pi Remind HD Notify',
                url: 'https://github.com/johnwargo/pi-remind-hd-notify',
                description: "This is the most recent edition of Pi Remind. This one enhances the Pi Remind HD project by connecting it to the Remote Notify device enabling me to automatically indicate to my family when I'm busy and available. My intention is to release the Remote Notify device as a commercial product."
            }
        ]
    }, {
        name: 'Miscellaneous',
        titlePage: 'Miscellaneous Stuff',
        titleTab: 'Misc.',
        body: "This page is a place for me to list repositories that don't fit the other categories. What you'll find here are repositories related to several conference presentations I've given over the years plus the source code to accompany my Hackspace Magazine articles.",
        repositories: [
            {
                name: 'PhoneGap Day Presentation 2017',
                url: 'https://github.com/johnwargo/phonegapday-2017',
                description: "The source code for my PhoneGap Day 2017 presentation. In this session, I demonstrated how to add support for Microsoft's Cordova Simulate to an Apache Cordova plugin."
            }, {
                name: 'NCDevCon Presentation 2017',
                url: 'https://github.com/johnwargo/NCDevCon-2017',
                description: "The source code for the sample applications demonstrated during my NCDevCon 2017 session. For this session, I showed (rather quickly) how to build applications using different cross-platform mobile frameworks."
            }, {
                name: 'Hackspace Magazine Code',
                url: 'https://github.com/johnwargo/hackspace-article-code',
                description: "The source code from all of my (4) Hackspace Magazine articles."
            }
        ]
    }, {
        name: 'Node',
        titlePage: 'Node Modules',
        titleTab: 'NodeJS',
        body: "I love developing in NodeJS; I've written a few Express applications, but a lot of the work I do is in building command-line utilities that you'll find listed here. In the old days, you'd write batch files (Windows) or shell scripts (linux, macOS) when you encounter something you want to automate. With all of the web development tooling moving to the command-line, node is the most common way of building interactive utilities. When I find an interesting problem I think I can solve with a little utility, I write it and share it with the world through the repositories you see below.",
        repositories: [
            {
                name: 'Ionic Build Information Module',
                url: 'https://github.com/johnwargo/ionic-build-info',
                description: "I was working in an Ionic project and realized that I wanted to write the app's build details the the console at startup but couldn't figure out the most efficient way. After doing some research I realized that the solution I needed didn't exist, so I created one. When you run this utility in an Ionic project folder, it updates a build info module in the project. The app can then import the module and use data in it to write build number and build date information to the console."
            }, {
                name: 'ReactJS Build Information Module',
                url: 'https://github.com/johnwargo/react-build-info',
                description: "I was working in an React JS project and realized that I wanted to write the app's build details the the console at startup but couldn't figure out the most efficient way. After doing some research I realized that the solution I needed didn't exist, so I created one. When you run this utility in a ReactJS project folder, it updates a build info module in the project. The app can then import the module and use data in it to write build number and build date information to the console."
            }, {
                name: 'Apache Cordova Make Merges Folders Module',
                url: 'https://github.com/johnwargo/cdva-make-merges',
                description: "The Apache Cordova CLI enables developers to insert different versions of files into an application based on the target platform. You do this though the creation of a set of folders in your project and put the platform-specific files in the appropriate folder. This silly little node command automates the creation of the Cordova merges folders for each platform currently included in the project."
            }, {
                name: 'Apache Cordova Make Hooks Folders Module',
                url: 'https://github.com/johnwargo/cdva-make-hooks',
                description: "The Apache Cordova CLI enables developers to execute external commands during the build process. This has changed over time, but when I created this module, developers enabled this feature by adding their executables to different project folders depending on when they wanted the tasks to run. This silly little node command automated the creation of the Cordova Hooks folders."
            }, {
                name: 'Apache Cordova Create Module',
                url: 'https://github.com/johnwargo/cdva-create',
                description: "The Apache Cordova CLI includes the create command that enables developers to quickly create a new project. This is my replacement for that command. After using the Cordova CLI command for many months, I realized that there were a whole suite of commands I executed every time I created a new project. I decided to make a simple node module that creates a simple Cordova project with a all of my default plugins and platforms. The module is configurable via a configuration file which is automatically created the first time the command runs."
            }, {
                name: 'Box Long Polling Module',
                url: 'https://github.com/johnwargo/box-long-polling-node',
                description: "I was playing around with the Box API, and created this simple node command line module to exercise the Box Long Poll API."
            }, {
                name: 'Moddable CLI Helper Module',
                url: 'https://github.com/johnwargo/moddable-helper',
                description: "I think the Moddable platform is pretty interesting, but the platform tooling is very command-line heavy and I noticed that there were some ways to simplify the process of building and deploying code to devices. To help with this, I created this module which adds a `mddbl` command wrapper around some of the Moddable SDK commands."
            }, {
                name: 'Firebase Functions Deployment Helper Module',
                url: 'https://github.com/johnwargo/firebase-functions-deploy-helper',
                description: "I did a lot of Firebase Functions development in early 2021 and regularly bumped up against Functions deployment quotas. To get around them, I built this simple CLI that simplifies deployment of a subset of a project's Firebase Functions. This module delivers an easy way to deploy parts of your functions catalog with a few simple commands."
            }, {
                name: 'Flutter Folders Module',
                url: 'https://github.com/johnwargo/flutter-folders',
                description: "As I started working in Flutter, a book I read showed me how to create a simple Flutter project folder structure to help me organize my code. I liked that idea, and with a few tweaks that fit my coding style, I built a CLI that automates the process of creating my default project structure."
            }, {
                name: 'Make Readme Module',
                url: 'https://github.com/johnwargo/make-readme',
                description: "When I first encountered Markdown and .md files, I started looking for an easy way to create a project's readme file. This project is a Node module that creates a 'blank' readme file in the current folder with the project folder's name as the Heading 1 level in the file.  It's a really silly and useless module, something you can do easily today with the `touch` command available on Linux and macOS. I didn't have this on Windows, so that's why I created this; I've since figured out how to do this on Windows with the 'touch' command."
            }, {
                name: 'Make MD File Module',
                url: 'https://github.com/johnwargo/make-md',
                description: "This is a variant of the make-reamdme module. A silly and stupid module  for creating .md files. This is easily superseded by the existing `touch` command available in most modern operating systems."
            }, {
                name: 'Jekyll Template File Copy Module',
                url: 'https://github.com/johnwargo/jekyll-copy',
                description: "When I began building Jekyll-based sites more frequently, the Jekyll team had just moved their template files from the current project to a shared location on the development system. To modify the files, you had to find the template files and copy the ones you wanted to modify to the same folders in your Jekyll project folder. I created this CLI to simplify the process of identifying the template folder location, listing the available template files, and copying the template files to the current Jekyll project folder."
            }, {
                name: 'Ignore Visual Studio Code Files Module',
                url: 'https://github.com/johnwargo/ignorevscode',
                description: "When I first started using Visual Studio Code, I noticed that the editor created `.vscode` folder in the project where it stored its internal files. Recognizing that I didn't always need this folder propogating around on my different systems, I created this simple Node module that updates a folder's .gitignore file to ignore that folder."
            }, {
                name: 'ICS File Update',
                url: 'https://github.com/johnwargo/ics-update',
                description: "This one's a weird one. A friend of mine wanted an easy way to update and send a pre-configured calendar invite, so I created a simple Node module to update an existing `.ics` file and launching it in the default calendar application."
            }
        ]
    }, {
        name: 'Web',
        titlePage: 'Web Development',
        titleTab: 'Web',
        body: "I have very few open source web development projects; you'll find all of them here. They're just sample apps I created to help others learn.",
        repositories: [
            {
                name: 'React Samples',
                url: 'https://github.com/johnwargo/react-samples-t3',
                description: "I volunteer at an organization called We Connect The Dots, and for years now I've helped create and deliver content around web development. This repository contains a series of simple ReactJS apps I created to help students learn React development."
            }, {
                name: 'PWA Starter Course',
                url: 'https://github.com/johnwargo/pwa-starter-course',
                description: "In 2020 I delivered a webinar on Progressive Web Apps for O'Reilly. This repository contains the instructions and all of the starting source code for the session."
            }, {
                name: 'Email Input Type Sample',
                url: 'https://github.com/johnwargo/email_input',
                description: "I created this sample app when I noticed that Apple and a lot of other vendors weren't using the (then) new HTML Input types. I didn't understand why developers who knew they were asking for an email address weren't using the email input type which automatically switched to the right keyboard for email entry."
            }, {
                name: 'Bootstrap Navbar Complete Sample',
                url: 'https://github.com/johnwargo/bootstrap-navbar-complete',
                description: "When I created my first Bootstrap application, I struggled to understand how to create a site with a menu bar at the top and a footer at the bottom. I finally figured it out and published this complete sample application illustrating how to do it."
            }
        ]
    }, {
        name: 'Windows',
        titlePage: 'Windows Development (Delphi)',
        titleTab: 'Windows',
        body: "I've been a Delphi (object Pascal) developer since Delphi 1.0 and I did a lot of commercial development using it. This page lists the different projects I released as open source projects, all related to tweaking data in Microsoft Outlook by an external application.",
        repositories: [
            {
                name: 'Microsoft Outlook Kill Country (Delphi)',
                url: 'https://github.com/johnwargo/Outlook-Kill-Country-Delphi',
                description: "Every so often, Microsoft Outlook will start adding United States of America to the bottom of every address in my address book. Since I sync my calendar and contacts to my mobile phone, this takes up storage space on my phone and slows down the sync process (not by much, I agree, but it does generate more data to sync and I don't like that). So, I wrote a little Delphi app that goes in and deletes all of US country entries in my address book."
            }, {
                name: 'Microsoft Outlook Kill Completed Tasks (Delphi)',
                url: 'https://github.com/johnwargo/outlook-kill-completed-tasks',
                description: "A while back, my OutLook sync process hiccupped and generated tens of thousands of duplicate tasks. I didn't want to leave them lying around, so I wrote this little utility that deleted all of the completed tasks."
            }, {
                name: 'Microsoft Outlook Get Category List (Delphi)',
                url: 'https://github.com/johnwargo/outlook-get-categories-delphi',
                description: "I wrote this app as I taught myself how to retrieve the user's category list (used to categorize appointments and contacts) from Microsoft Outlook."
            }, {
                name: 'Microsoft OutLook Kill Empty Calendar Entries (Delphi)',
                url: 'https://github.com/johnwargo/Kill-Empty-Outlook-Calendar-Entries-Delphi',
                description: "A while back, my OutLook sync process hiccupped and generated thousands of empty calendar entries. I didn't want to leave them lying around, so I wrote this little utility that deleted all empty calendar entries."
            }
        ]
    }
];
