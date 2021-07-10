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
                description: 'Hosts the source code from my Apache Cordova 3 Programming book.'
            }, {
                name: 'BlackBerry Development Fundamentals',
                url: 'https://github.com/johnwargo/blackberry-development-fundamentals-code',
                description: "This was my first technology book (my other first book was a book for Soccer referees) and this repository contains all the code from the book."
            }, {
                name: 'Apache Cordova API Cookbook',
                url: 'https://github.com/johnwargo/apache-cordova-api-cookbook-code',
                description: 'Hosts the source code from my Apache Cordova API Cookbook book.'
            }, {
                name: 'Apache Cordova 4 Programming',
                url: 'https://github.com/johnwargo/ac4p',
                description: 'Hosts the source code from my Apache Cordova 4 Programming',
            }, {
                name: 'PhoneGap Essentials',
                url: 'https://github.com/johnwargo/phonegap-essentials-code',
                description: 'Host the source code for my PhoneGap Essentials book. This was my first book on Apache Cordova (Cordova was called PhoneGap at the time). I ultimately wrote 4 books on the topic and worked on several commercial products related to Apache Cordova in my career since then.'
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
        body: "",
        repositories: [
            {
                name: 'tessel_weather_station',
                url: 'https://github.com/johnwargo/tessel_weather_station',
                description: 'Tessel 2 Weather Station with Weather Underground'
            }, {
                name: 'tessel-m2x-weather-station',
                url: 'https://github.com/johnwargo/tessel-m2x-weather-station',
                description: 'Tessel 2 weather station with AT&T M2X data upload'
            }, {
                name: 'tessel-garage-door-controller',
                url: 'https://github.com/johnwargo/tessel-garage-door-controller',
                description: 'Tessel 2 Garage Door Controller'
            }, {
                name: 'seeed-studio-relay-v2',
                url: 'https://github.com/johnwargo/seeed-studio-relay-v2',
                description: 'An updated version of the Python library for the Seeed Studio Relay Board'
            }, {
                name: 'seeed-studio-relay-board',
                url: 'https://github.com/johnwargo/seeed-studio-relay-board',
                description: 'Python library for the Seeed Studio Relay Board'
            }, {
                name: 'raspberry-pi-relay-timer',
                url: 'https://github.com/johnwargo/raspberry-pi-relay-timer',
                description: 'Raspberry Pi relay timer'
            }, {
                name: 'raspberry-pi-relay-controller-seeed',
                url: 'https://github.com/johnwargo/raspberry-pi-relay-controller-seeed',
                description: 'Web-based relay controller application for the Seeed Studio Raspberry Pi Relay Board V1.0'
            }, {
                name: 'pi-remind-zero-blinkt',
                url: 'https://github.com/johnwargo/pi-remind-zero-blinkt',
                description: 'Pi Remind project for the Pi Zero W and Blinkt LED Array'
            }, {
                name: 'pi-remind-hd',
                url: 'https://github.com/johnwargo/pi-remind-hd',
                description: 'Raspberry Pi Google Calendar Reminder app, uses the Pimoroni Unicorn HAT HD'
            }, {
                name: 'pi-remind',
                url: 'https://github.com/johnwargo/pi-remind',
                description: 'Raspberry Pi Google Calendar Reminder'
            }, {
                name: 'pi-relay-controller-modmypi',
                url: 'https://github.com/johnwargo/pi-relay-controller-modmypi',
                description: 'Raspberry Pi Relay Controller server for the ModMyPi Relay Board'
            }, {
                name: 'pi-weather-station-simple',
                url: 'https://github.com/johnwargo/pi-weather-station-simple',
                description: 'Raspberry Pi Weather Station using simple sensor'
            }, {
                name: 'pi-weather-station',
                url: 'https://github.com/johnwargo/pi-weather-station',
                description: 'Raspberry Pi Sense HAT, Weather Underground station'
            }, {
                name: 'glowing-pumpkin-trinket-neopixel',
                url: 'https://github.com/johnwargo/glowing-pumpkin-trinket-neopixel',
                description: 'Arduino-powered glowing pumpkin using NeoPixel ring'
            }, {
                name: 'glowing-pumpkin-feather',
                url: 'https://github.com/johnwargo/glowing-pumpkin-feather',
                description: 'Adafruit Feather version of my Glowing Pumpkin project'
            }, {
                name: 'pi-remind-hd-notify',
                url: 'https://github.com/johnwargo/pi-remind-hd-notify',
                description: 'Pi Remind HD project enhanced to work with the Remote Notify project'
            }
        ]
    }, {
        name: 'Miscellaneous',
        titlePage: 'Miscellaneous Stuff',
        titleTab: 'Misc.',
        body: "",
        repositories: [
            {
                name: 'phonegapday-2017',
                url: 'https://github.com/johnwargo/phonegapday-2017',
                description: 'Source code for my PhoneGap Day 2017 presentation'
            }, {
                name: 'NCDevCon-2017',
                url: 'https://github.com/johnwargo/NCDevCon-2017',
                description: 'Source code for the sample applications demonstrated during my NCDevCon 2017 session'
            }, {
                name: 'hackspace-article-code',
                url: 'https://github.com/johnwargo/hackspace-article-code',
                description: 'Source code for my Hackspace Magazine articles'
            }
        ]
    }, {
        name: 'Node',
        titlePage: 'Node Modules',
        titleTab: 'NodeJS',
        body: "",
        repositories: [
            {
                name: 'ionic-build-info',
                url: 'https://github.com/johnwargo/ionic-build-info',
                description: 'Updates a build info module in an Ionic project'
            }, {
                name: 'react-build-info',
                url: 'https://github.com/johnwargo/react-build-info',
                description: 'Adds build info to an React project'
            }, {
                name: 'cdva-make-merges',
                url: 'https://github.com/johnwargo/cdva-make-merges',
                description: 'Automates the creation of the Cordova merges folders for each platform added to the project'
            }, {
                name: 'cdva-make-hooks',
                url: 'https://github.com/johnwargo/cdva-make-hooks',
                description: 'Automating the creation of the Cordova Hooks folders'
            }, {
                name: 'cdva-create',
                url: 'https://github.com/johnwargo/cdva-create',
                description: 'A node module for creating a simple Cordova project with a couple of common plugins and platforms. Module is configurable via a configuration file.'
            }, {
                name: 'box-long-polling-node',
                url: 'https://github.com/johnwargo/box-long-polling-node',
                description: 'A simple NodeJS command that exercises the Box Long Polling API'
            }, {
                name: 'moddable-helper',
                url: 'https://github.com/johnwargo/moddable-helper',
                description: 'Node-based CLI command helper for the Moddable SDK'
            }, {
                name: 'firebase-functions-deploy-helper',
                url: 'https://github.com/johnwargo/firebase-functions-deploy-helper',
                description: 'Simplifies deployment of a subset of Firebase Functions (because of Firebase deployment quota limits)'
            }, {
                name: 'flutter-folders',
                url: 'https://github.com/johnwargo/flutter-folders',
                description: "A simple node module for creating project subfolders in a Flutter project's lib folder"
            }, {
                name: 'make-readme',
                url: 'https://github.com/johnwargo/make-readme',
                description: 'Node module that creates a \'blank\' readme file in the current folder.'
            }, {
                name: 'make-md',
                url: 'https://github.com/johnwargo/make-md',
                description: 'Simple node module for creating .md files.'
            }, {
                name: 'jekyll-copy',
                url: 'https://github.com/johnwargo/jekyll-copy',
                description: 'Jekyll Copy Node module'
            }, {
                name: 'ignorevscode',
                url: 'https://github.com/johnwargo/ignorevscode',
                description: 'Node module that updates a folder\'s .gitignore file to ignore Visual Studio Code files'
            }, {
                name: 'ics-update',
                url: 'https://github.com/johnwargo/ics-update',
                description: 'A Node module for updating an .ics file and launching it'
            }
        ]
    }, {
        name: 'Web',
        titlePage: 'Web Development',
        titleTab: 'Web',
        body: "",
        repositories: [
            {
                name: 'react-samples-t3',
                url: 'https://github.com/johnwargo/react-samples-t3',
                description: 'React examples for the We Connect The Dots year 3 class'
            }, {
                name: 'pwa-starter-course',
                url: 'https://github.com/johnwargo/pwa-starter-course',
                description: 'Source code for Progressive Web Apps: Enhancing Your Web Apps Using Service Workers webinar'
            }, {
                name: 'email_input',
                url: 'https://github.com/johnwargo/email_input',
                description: 'A sample application that demonstrates the HTML email input type'
            }, {
                name: 'bootstrap-navbar-complete',
                url: 'https://github.com/johnwargo/bootstrap-navbar-complete',
                description: 'Bootstrap Complete NavBar example application'
            }
        ]
    }, {
        name: 'Windows',
        titlePage: 'Windows Development',
        titleTab: 'Windows',
        body: "",
        repositories: [
            {
                name: 'Outlook-Kill-Country-Delphi',
                url: 'https://github.com/johnwargo/Outlook-Kill-Country-Delphi',
                description: 'Delete Outlook contact country field values'
            }, {
                name: 'outlook-kill-completed-tasks',
                url: 'https://github.com/johnwargo/outlook-kill-completed-tasks',
                description: 'Deletes all completed tasks from a user\'s default Outlook data file'
            }, {
                name: 'outlook-get-categories-delphi',
                url: 'https://github.com/johnwargo/outlook-get-categories-delphi',
                description: 'Delphi application for retrieving the list of Categories from Microsoft Office'
            }, {
                name: 'Kill-Empty-Outlook-Calendar-Entries-Delphi',
                url: 'https://github.com/johnwargo/Kill-Empty-Outlook-Calendar-Entries-Delphi',
                description: 'A Delphi application for deleting empty Outlook calendar entries'
            }
        ]
    }
];
