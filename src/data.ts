/** 
 * This file contains all of the content for the site. The idea is that all the dynamic content is 
 * in here and I can render it all with just one page. 
*/

import { Page } from './interfaces/page';
import { Repository } from './interfaces/repo';


// I may not need this for anything, but I'm going to leave it here for now.
// export const Categories = ["Book", "Flutter", "Ionic", "IoT", "Misc", "Mobile", "Node", "Web", "Windows"];

// Defines the different pages in the site and the content displayed on each page.
// ,{
//     name: '',
//     url: 'https://github.com/',
//     description: '',
//     category: ''
// }
export const Pages: Page[] = [
    {
        name: 'Books',
        titlePage: 'Book Code',
        titleTab: 'Books',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Book',
    }, {
        name: 'Flutter',
        titlePage: 'Flutter Development',
        titleTab: 'Flutter',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Flutter',
    }, {
        name: 'Ionic',
        titlePage: 'Ionic Development',
        titleTab: 'Ionic',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Ionic',
    }, {
        name: 'IoT',
        titlePage: 'IoT Projects',
        titleTab: 'IoT',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'IoT',
    }, {
        name: 'Miscellaneous',
        titlePage: 'Miscellaneous Stuff',
        titleTab: 'Misc.',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Misc',
    }, {
        name: 'Mobile',
        titlePage: 'Mobile Development',
        titleTab: 'Mobile',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Mobile',
    }, {
        name: 'Node',
        titlePage: 'Node Modules',
        titleTab: 'NodeJS',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Node',
    }, {
        name: 'Web',
        titlePage: 'Web Development',
        titleTab: 'Web',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Web',
    }, {
        name: 'Windows',
        titlePage: 'Windows Development',
        titleTab: 'Windows',
        body: 'Capicola turducken short loin beef, drumstick ham tail leberkas shank biltong. Fatback flank boudin shankle jerky ham. Porchetta filet mignon tri-tip jowl flank. Chuck pancetta doner leberkas turducken burgdoggen. Meatloaf tongue fatback bacon corned beef.',
        category: 'Windows',
    }
];

// Data for all of my public repositories.
// look for an Empty record at the end of the array
export const Repositories: [] = [{
    Book: [{
        name: 'learning-pwa-code',
        url: 'https://github.com/johnwargo/learning-pwa-code',
        description: 'Companion Source Code for Learning Progressive Web Apps',
        category: 'Book'
    }, {
        name: 'cordova-programming-code',
        url: 'https://github.com/johnwargo/cordova-programming-code',
        description: 'Source code from Apache Cordova 3 Programming',
        category: 'Book'
    }, {
        name: 'blackberry-development-fundamentals-code',
        url: 'https://github.com/johnwargo/blackberry-development-fundamentals-code',
        description: 'Source code from BlackBerry Development Fundamentals (book)',
        category: 'Book'
    }, {
        name: 'apache-cordova-api-cookbook-code',
        url: 'https://github.com/johnwargo/apache-cordova-api-cookbook-code',
        description: 'Source code for Apache Cordova API Cookbook',
        category: 'Book'
    }, {
        name: 'ac4p',
        url: 'https://github.com/johnwargo/ac4p',
        description: 'Source code from Apache Cordova 4 Programming',
        category: 'Book'
    }, {
        name: 'phonegap-essentials-code',
        url: 'https://github.com/johnwargo/phonegap-essentials-code',
        description: 'PhoneGap Essentials Book Source Code',
        category: 'Book'
    }]
},
{
    Flutter: [{
        name: 'flutter-navigation-sample',
        url: 'https://github.com/johnwargo/flutter-navigation-sample',
        description: 'Sample app that passes value between pages',
        category: 'Flutter'
    }, {
        name: 'flutter-folders',
        url: 'https://github.com/johnwargo/flutter-folders',
        description: 'A simple node module for creating project subfolders in a Flutter project\'s lib folder',
        category: 'Node'
    }, {
        name: 'flutter-dialog-sample',
        url: 'https://github.com/johnwargo/flutter-dialog-sample',
        description: 'A sample Flutter application highlighting how to use Flutter Doalogs',
        category: 'Flutter'
    }, {
        name: 'flutter-android-connectivity-permissions',
        url: 'https://github.com/johnwargo/flutter-android-connectivity-permissions',
        description: 'An app that demonstrates how to prompt the user for location permissions in Flutter on Android.',
        category: 'Flutter'
    }, {
        name: 'esp_touch_flutter',
        url: 'https://github.com/johnwargo/esp_touch_flutter',
        description: 'ESP Touch testing app',
        category: 'Flutter'
    }, {
        name: 'flutter-future-builder',
        url: 'https://github.com/johnwargo/flutter-future-builder',
        description: '',
        category: 'Flutter'
    }, {
        name: 'flutter-logging-sample',
        url: 'https://github.com/johnwargo/flutter-logging-sample',
        description: 'A simple app demonstrating how to use the Flutter Logging library',
        category: 'Flutter'
    }]
},
{
    Ionic: [{
        name: 'weather-app-ionic-4',
        url: 'https://github.com/johnwargo/weather-app-ionic-4',
        description: 'A sample weather app built using Ionic 4',
        category: 'Web'
    }, {
        name: 'ionic-slides-example',
        url: 'https://github.com/johnwargo/ionic-slides-example',
        description: 'A sample implementation of ion-slides',
        category: 'Web'
    }, {
        name: 'ionic-edit-object-sample',
        url: 'https://github.com/johnwargo/ionic-edit-object-sample',
        description: 'An Ionic application demonstrating two ways to edit an object',
        category: 'Web'
    }, {
        name: 'ionic-cascading-providers',
        url: 'https://github.com/johnwargo/ionic-cascading-providers',
        description: '',
        category: 'Web'
    }, {
        name: 'ionic-pipes-example',
        url: 'https://github.com/johnwargo/ionic-pipes-example',
        description: '',
        category: 'Web'
    }]
},
{
    IoT: [{
        name: 'tessel_weather_station',
        url: 'https://github.com/johnwargo/tessel_weather_station',
        description: 'Tessel 2 Weather Station with Weather Underground',
        category: 'IoT'
    }, {
        name: 'tessel-m2x-weather-station',
        url: 'https://github.com/johnwargo/tessel-m2x-weather-station',
        description: 'Tessel 2 weather station with AT&T M2X data upload',
        category: 'IoT'
    }, {
        name: 'tessel-garage-door-controller',
        url: 'https://github.com/johnwargo/tessel-garage-door-controller',
        description: 'Tessel 2 Garage Door Controller',
        category: 'IoT'
    }, {
        name: 'seeed-studio-relay-v2',
        url: 'https://github.com/johnwargo/seeed-studio-relay-v2',
        description: 'An updated version of the Python library for the Seeed Studio Relay Board',
        category: 'IoT'
    }, {
        name: 'seeed-studio-relay-board',
        url: 'https://github.com/johnwargo/seeed-studio-relay-board',
        description: 'Python library for the Seeed Studio Relay Board',
        category: 'IoT'
    }, {
        name: 'raspberry-pi-relay-timer',
        url: 'https://github.com/johnwargo/raspberry-pi-relay-timer',
        description: 'Raspberry Pi relay timer',
        category: 'IoT'
    }, {
        name: 'raspberry-pi-relay-controller-seeed',
        url: 'https://github.com/johnwargo/raspberry-pi-relay-controller-seeed',
        description: 'Web-based relay controller application for the Seeed Studio Raspberry Pi Relay Board V1.0',
        category: 'IoT'
    }, {
        name: 'pi-remind-zero-blinkt',
        url: 'https://github.com/johnwargo/pi-remind-zero-blinkt',
        description: 'Pi Remind project for the Pi Zero W and Blinkt LED Array',
        category: 'IoT'
    }, {
        name: 'pi-remind-hd',
        url: 'https://github.com/johnwargo/pi-remind-hd',
        description: 'Raspberry Pi Google Calendar Reminder app, uses the Pimoroni Unicorn HAT HD',
        category: 'IoT'
    }, {
        name: 'pi-remind',
        url: 'https://github.com/johnwargo/pi-remind',
        description: 'Raspberry Pi Google Calendar Reminder',
        category: 'IoT'
    }, {
        name: 'pi-relay-controller-modmypi',
        url: 'https://github.com/johnwargo/pi-relay-controller-modmypi',
        description: 'Raspberry Pi Relay Controller server for the ModMyPi Relay Board',
        category: 'IoT'
    }, {
        name: 'pi-weather-station-simple',
        url: 'https://github.com/johnwargo/pi-weather-station-simple',
        description: 'Raspberry Pi Weather Station using simple sensor',
        category: 'IoT'
    }, {
        name: 'pi-weather-station',
        url: 'https://github.com/johnwargo/pi-weather-station',
        description: 'Raspberry Pi Sense HAT, Weather Underground station',
        category: 'IoT'
    }, {
        name: 'glowing-pumpkin-trinket-neopixel',
        url: 'https://github.com/johnwargo/glowing-pumpkin-trinket-neopixel',
        description: 'Arduino-powered glowing pumpkin using NeoPixel ring',
        category: 'IoT'
    }, {
        name: 'glowing-pumpkin-feather',
        url: 'https://github.com/johnwargo/glowing-pumpkin-feather',
        description: 'Adafruit Feather version of my Glowing Pumpkin project',
        category: 'IoT'
    }, {
        name: 'pi-remind-hd-notify',
        url: 'https://github.com/johnwargo/pi-remind-hd-notify',
        description: 'Pi Remind HD project enhanced to work with the Remote Notify project',
        category: 'IoT'
    }]
},
{
    Misc: [{
        name: 'phonegapday-2017',
        url: 'https://github.com/johnwargo/phonegapday-2017',
        description: 'Source code for my PhoneGap Day 2017 presentation',
        category: 'Misc'
    }, {
        name: 'NCDevCon-2017',
        url: 'https://github.com/johnwargo/NCDevCon-2017',
        description: 'Source code for the sample applications demonstrated during my NCDevCon 2017 session',
        category: 'Misc'
    }, {
        name: 'hackspace-article-code',
        url: 'https://github.com/johnwargo/hackspace-article-code',
        description: 'Source code for my Hackspace Magazine articles',
        category: 'IoT'
    }]
},
{
    Mobile: [{
        name: 'johnwargo-cordova-plugin-mol',
        url: 'https://github.com/johnwargo/johnwargo-cordova-plugin-mol',
        description: 'Cordova JavaScript-only Plugin',
        category: 'Mobile'
    }, {
        name: 'johnwargo-cordova-plugin-carrier',
        url: 'https://github.com/johnwargo/johnwargo-cordova-plugin-carrier',
        description: 'Cordova plugin to rettrieve carrier ID from the phone',
        category: 'Mobile'
    }]
},
{
    Node: [{
        name: 'ionic-build-info',
        url: 'https://github.com/johnwargo/ionic-build-info',
        description: 'Updates a build info module in an Ionic project',
        category: 'Node'
    },
    {
        name: 'react-build-info',
        url: 'https://github.com/johnwargo/react-build-info',
        description: 'Adds build info to an React project',
        category: 'Node'
    }, {
        name: 'cdva-make-merges',
        url: 'https://github.com/johnwargo/cdva-make-merges',
        description: 'Automates the creation of the Cordova merges folders for each platform added to the project',
        category: 'Node'
    }, {
        name: 'cdva-make-hooks',
        url: 'https://github.com/johnwargo/cdva-make-hooks',
        description: 'Automating the creation of the Cordova Hooks folders',
        category: 'Node'
    }, {
        name: 'cdva-create',
        url: 'https://github.com/johnwargo/cdva-create',
        description: 'A node module for creating a simple Cordova project with a couple of common plugins and platforms. Module is configurable via a configuration file.	',
        category: 'Node'
    }, {
        name: 'box-long-polling-node',
        url: 'https://github.com/johnwargo/box-long-polling-node',
        description: 'A simple NodeJS command that exercises the Box Long Polling API',
        category: 'Node'
    }, {
        name: 'moddable-helper',
        url: 'https://github.com/johnwargo/moddable-helper',
        description: 'Node-based CLI command helper for the Moddable SDK',
        category: 'Node'
    }, {
        name: 'firebase-functions-deploy-helper',
        url: 'https://github.com/johnwargo/firebase-functions-deploy-helper',
        description: 'Simplifies deployment of a subset of Firebase Functions (because of Firebase deployment quota limits)',
        category: 'Node'
    }]
},
{
    Node: [{
        name: 'make-readme',
        url: 'https://github.com/johnwargo/make-readme',
        description: 'Node module that creates a \'blank\' readme file in the current folder.',
        category: 'Node'
    }, {
        name: 'make-md',
        url: 'https://github.com/johnwargo/make-md',
        description: 'Simple node module for creating .md files.',
        category: 'Node'
    }, {
        name: 'jekyll-copy',
        url: 'https://github.com/johnwargo/jekyll-copy',
        description: 'Jekyll Copy Node module',
        category: 'Node'
    }, {
        name: 'ignorevscode',
        url: 'https://github.com/johnwargo/ignorevscode',
        description: 'Node module that updates a folder\'s .gitignore file to ignore Visual Studio Code files',
        category: 'Node'
    }, {
        name: 'ics-update',
        url: 'https://github.com/johnwargo/ics-update',
        description: 'A Node module for updating an .ics file and launching it',
        category: 'Node'
    }]
},
{
    Web: [{
        name: 'react-samples-t3',
        url: 'https://github.com/johnwargo/react-samples-t3',
        description: 'React examples for the We Connect The Dots year 3 class',
        category: 'Web'
    }, {
        name: 'pwa-starter-course',
        url: 'https://github.com/johnwargo/pwa-starter-course',
        description: 'Source code for Progressive Web Apps: Enhancing Your Web Apps Using Service Workers webinar',
        category: 'Web'
    }, {
        name: 'email_input',
        url: 'https://github.com/johnwargo/email_input',
        description: 'A sample application that demonstrates the HTML email input type',
        category: 'Web'
    }, {
        name: 'bootstrap-navbar-complete',
        url: 'https://github.com/johnwargo/bootstrap-navbar-complete',
        description: 'Bootstrap Complete NavBar example application',
        category: 'Web'
    }]
},
{
    Windows: [{
        name: 'Outlook-Kill-Country-Delphi',
        url: 'https://github.com/johnwargo/Outlook-Kill-Country-Delphi',
        description: 'Delete Outlook contact country field values',
        category: 'Windows'
    }, {
        name: 'outlook-kill-completed-tasks',
        url: 'https://github.com/johnwargo/outlook-kill-completed-tasks',
        description: 'Deletes all completed tasks from a user\'s default Outlook data file',
        category: 'Windows'
    }, {
        name: 'outlook-get-categories-delphi',
        url: 'https://github.com/johnwargo/outlook-get-categories-delphi',
        description: 'Delphi application for retrieving the list of Categories from Microsoft Office',
        category: 'Windows'
    }, {
        name: 'Kill-Empty-Outlook-Calendar-Entries-Delphi',
        url: 'https://github.com/johnwargo/Kill-Empty-Outlook-Calendar-Entries-Delphi',
        description: 'A Delphi application for deleting empty Outlook calendar entries',
        category: 'Windows'
    }]
}
];

// ,{
//     name: '',
//     url: 'https://github.com/',
//     description: '',
//     category: ''
// }


// export const repoList = [
//     {
//         name: 'ionic-build-info',
//         url: 'https://github.com/johnwargo/ionic-build-info',
//         description: 'Updates a build info module in an Ionic project',
//         category: 'Node'
//     }, {
//         name: 'react-build-info',
//         url: 'https://github.com/johnwargo/react-build-info',
//         description: 'Adds build info to an React project',
//         category: 'Node'
//     }, {
//         name: 'johnwargo',
//         url: 'https://github.com/johnwargo/johnwargo',
//         description: 'my personal profile',
//         category: 'Misc'
//     }, {
//         name: 'weather-app-ionic-4',
//         url: 'https://github.com/johnwargo/weather-app-ionic-4',
//         description: 'A sample weather app built using Ionic 4',
//         category: 'Web'
//     }, {
//         name: 'tessel_weather_station',
//         url: 'https://github.com/johnwargo/tessel_weather_station',
//         description: 'Tessel 2 Weather Station with Weather Underground',
//         category: 'IoT'
//     }, {
//         name: 'tessel-m2x-weather-station',
//         url: 'https://github.com/johnwargo/tessel-m2x-weather-station',
//         description: 'Tessel 2 weather station with AT&T M2X data upload',
//         category: 'IoT'
//     }, {
//         name: 'tessel-garage-door-controller',
//         url: 'https://github.com/johnwargo/tessel-garage-door-controller',
//         description: 'Tessel 2 Garage Door Controller',
//         category: 'IoT'
//     }, {
//         name: 'seeed-studio-relay-v2',
//         url: 'https://github.com/johnwargo/seeed-studio-relay-v2',
//         description: 'An updated version of the Python library for the Seeed Studio Relay Board',
//         category: 'IoT'
//     }, {
//         name: 'seeed-studio-relay-board',
//         url: 'https://github.com/johnwargo/seeed-studio-relay-board',
//         description: 'Python library for the Seeed Studio Relay Board',
//         category: 'IoT'
//     }, {
//         name: 'react-samples-t3',
//         url: 'https://github.com/johnwargo/react-samples-t3',
//         description: 'React examples for the We Connect The Dots year 3 class',
//         category: 'Web'
//     }, {
//         name: 'raspberry-pi-relay-timer',
//         url: 'https://github.com/johnwargo/raspberry-pi-relay-timer',
//         description: 'Raspberry Pi relay timer',
//         category: 'IoT'
//     }, {
//         name: 'raspberry-pi-relay-controller-seeed',
//         url: 'https://github.com/johnwargo/raspberry-pi-relay-controller-seeed',
//         description: 'Web-based relay controller application for the Seeed Studio Raspberry Pi Relay Board V1.0',
//         category: 'IoT'
//     }, {
//         name: 'pwa-starter-course',
//         url: 'https://github.com/johnwargo/pwa-starter-course',
//         description: 'Source code for Progressive Web Apps: Enhancing Your Web Apps Using Service Workers webinar',
//         category: 'Web'
//     }, {
//         name: 'pi-remind-zero-blinkt',
//         url: 'https://github.com/johnwargo/pi-remind-zero-blinkt',
//         description: 'Pi Remind project for the Pi Zero W and Blinkt LED Array',
//         category: 'IoT'
//     }, {
//         name: 'pi-remind-hd',
//         url: 'https://github.com/johnwargo/pi-remind-hd',
//         description: 'Raspberry Pi Google Calendar Reminder app, uses the Pimoroni Unicorn HAT HD',
//         category: 'IoT'
//     }, {
//         name: 'pi-remind',
//         url: 'https://github.com/johnwargo/pi-remind',
//         description: 'Raspberry Pi Google Calendar Reminder',
//         category: 'IoT'
//     }, {
//         name: 'pi-relay-controller-modmypi',
//         url: 'https://github.com/johnwargo/pi-relay-controller-modmypi',
//         description: 'Raspberry Pi Relay Controller server for the ModMyPi Relay Board',
//         category: 'IoT'
//     }, {
//         name: 'pi-weather-station-simple',
//         url: 'https://github.com/johnwargo/pi-weather-station-simple',
//         description: 'Raspberry Pi Weather Station using simple sensor',
//         category: 'IoT'
//     }, {
//         name: 'pi-weather-station',
//         url: 'https://github.com/johnwargo/pi-weather-station',
//         description: 'Raspberry Pi Sense HAT, Weather Underground station',
//         category: 'IoT'
//     }, {
//         name: 'phonegapday-2017',
//         url: 'https://github.com/johnwargo/phonegapday-2017',
//         description: 'Source code for my PhoneGap Day 2017 presentation',
//         category: 'Misc'
//     }, {
//         name: 'Outlook-Kill-Country-Delphi',
//         url: 'https://github.com/johnwargo/Outlook-Kill-Country-Delphi',
//         description: 'Delete Outlook contact country field values',
//         category: 'Windows'
//     }, {
//         name: 'outlook-kill-completed-tasks',
//         url: 'https://github.com/johnwargo/outlook-kill-completed-tasks',
//         description: 'Deletes all completed tasks from a user\'s default Outlook data file',
//         category: 'Windows'
//     }, {
//         name: 'outlook-get-categories-delphi',
//         url: 'https://github.com/johnwargo/outlook-get-categories-delphi',
//         description: 'Delphi application for retrieving the list of Categories from Microsoft Office',
//         category: 'Windows'
//     }, {
//         name: 'NCDevCon-2017',
//         url: 'https://github.com/johnwargo/NCDevCon-2017',
//         description: 'Source code for the sample applications demonstrated during my NCDevCon 2017 session',
//         category: 'Misc'
//     }, {
//         name: 'make-readme',
//         url: 'https://github.com/johnwargo/make-readme',
//         description: 'Node module that creates a \'blank\' readme file in the current folder.',
//         category: 'Node'
//     }, {
//         name: 'make-md',
//         url: 'https://github.com/johnwargo/make-md',
//         description: 'Simple node module for creating .md files.',
//         category: 'Node'
//     }, {
//         name: 'learning-pwa-code',
//         url: 'https://github.com/johnwargo/learning-pwa-code',
//         description: 'Companion Source Code for Learning Progressive Web Apps',
//         category: 'Book'
//     }, {
//         name: 'Kill-Empty-Outlook-Calendar-Entries-Delphi',
//         url: 'https://github.com/johnwargo/Kill-Empty-Outlook-Calendar-Entries-Delphi',
//         description: 'A Delphi application for deleting empty Outlook calendar entries',
//         category: 'Windows'
//     }, {
//         name: 'johnwargo-cordova-plugin-mol',
//         url: 'https://github.com/johnwargo/johnwargo-cordova-plugin-mol',
//         description: 'Cordova JavaScript-only Plugin',
//         category: 'Mobile'
//     }, {
//         name: 'johnwargo-cordova-plugin-carrier',
//         url: 'https://github.com/johnwargo/johnwargo-cordova-plugin-carrier',
//         description: 'Cordova plugin to rettrieve carrier ID from the phone',
//         category: 'Mobile'
//     }, {
//         name: 'jekyll-copy',
//         url: 'https://github.com/johnwargo/jekyll-copy',
//         description: 'Jekyll Copy Node module',
//         category: 'Node'
//     }, {
//         name: 'ionic-slides-example',
//         url: 'https://github.com/johnwargo/ionic-slides-example',
//         description: 'A sample implementation of ion-slides',
//         category: 'Web'
//     }, {
//         name: 'ionic-edit-object-sample',
//         url: 'https://github.com/johnwargo/ionic-edit-object-sample',
//         description: 'An Ionic application demonstrating two ways to edit an object',
//         category: 'Web'
//     }, {
//         name: 'ionic-cascading-providers',
//         url: 'https://github.com/johnwargo/ionic-cascading-providers',
//         description: '',
//         category: 'Web'
//     }, {
//         name: 'ignorevscode',
//         url: 'https://github.com/johnwargo/ignorevscode',
//         description: 'Node module that updates a folder\'s .gitignore file to ignore Visual Studio Code files',
//         category: 'Node'
//     }, {
//         name: 'ics-update',
//         url: 'https://github.com/johnwargo/ics-update',
//         description: 'A Node module for updating an .ics file and launching it',
//         category: 'Node'
//     }, {
//         name: 'hackspace-article-code',
//         url: 'https://github.com/johnwargo/hackspace-article-code',
//         description: 'Source code for my Hackspace Magazine articles',
//         category: 'IoT'
//     }, {
//         name: 'glowing-pumpkin-trinket-neopixel',
//         url: 'https://github.com/johnwargo/glowing-pumpkin-trinket-neopixel',
//         description: 'Arduino-powered glowing pumpkin using NeoPixel ring',
//         category: 'IoT'
//     }, {
//         name: 'glowing-pumpkin-feather',
//         url: 'https://github.com/johnwargo/glowing-pumpkin-feather',
//         description: 'Adafruit Feather version of my Glowing Pumpkin project',
//         category: 'IoT'
//     }, {
//         name: 'flutter-navigation-sample',
//         url: 'https://github.com/johnwargo/flutter-navigation-sample',
//         description: 'Sample app that passes value between pages',
//         category: 'Flutter'
//     }, {
//         name: 'flutter-folders',
//         url: 'https://github.com/johnwargo/flutter-folders',
//         description: 'A simple node module for creating project subfolders in a Flutter project\'s lib folder',
//         category: 'Node'
//     }, {
//         name: 'flutter-dialog-sample',
//         url: 'https://github.com/johnwargo/flutter-dialog-sample',
//         description: 'A sample Flutter application highlighting how to use Flutter Doalogs',
//         category: 'Flutter'
//     }, {
//         name: 'flutter-android-connectivity-permissions',
//         url: 'https://github.com/johnwargo/flutter-android-connectivity-permissions',
//         description: 'An app that demonstrates how to prompt the user for location permissions in Flutter on Android.',
//         category: 'Flutter'
//     }, {
//         name: 'esp_touch_flutter',
//         url: 'https://github.com/johnwargo/esp_touch_flutter',
//         description: 'ESP Touch testing app',
//         category: 'Flutter'
//     }, {
//         name: 'email_input',
//         url: 'https://github.com/johnwargo/email_input',
//         description: 'A sample application that demonstrates the HTML email input type',
//         category: 'Web'
//     }, {
//         name: 'dotfiles',
//         url: 'https://github.com/johnwargo/dotfiles',
//         description: '',
//         category: 'Misc'
//     }, {
//         name: 'cordova-programming-code',
//         url: 'https://github.com/johnwargo/cordova-programming-code',
//         description: 'Source code from Apache Cordova 3 Programming',
//         category: 'Book'
//     }, {
//         name: 'cdva-make-merges',
//         url: 'https://github.com/johnwargo/cdva-make-merges',
//         description: 'Automates the creation of the Cordova merges folders for each platform added to the project',
//         category: 'Node'
//     }, {
//         name: 'cdva-make-hooks',
//         url: 'https://github.com/johnwargo/cdva-make-hooks',
//         description: 'Automating the creation of the Cordova Hooks folders',
//         category: 'Node'
//     }, {
//         name: 'cdva-create',
//         url: 'https://github.com/johnwargo/cdva-create',
//         description: 'A node module for creating a simple Cordova project with a couple of common plugins and platforms. Module is configurable via a configuration file.	',
//         category: 'Node'
//     }, {
//         name: 'bootstrap-navbar-complete',
//         url: 'https://github.com/johnwargo/bootstrap-navbar-complete',
//         description: 'Bootstrap Complete NavBar example application',
//         category: 'Web'
//     }, {
//         name: 'box-long-polling-node',
//         url: 'https://github.com/johnwargo/box-long-polling-node',
//         description: 'A simple NodeJS command that exercises the Box Long Polling API',
//         category: 'Node'
//     }, {
//         name: 'blackberry-development-fundamentals-code',
//         url: 'https://github.com/johnwargo/blackberry-development-fundamentals-code',
//         description: 'Source code from BlackBerry Development Fundamentals (book)',
//         category: 'Book'
//     }, {
//         name: 'Arduino-Twinkle-Lights-Array',
//         url: 'https://github.com/johnwargo/Arduino-Twinkle-Lights-Array',
//         description: 'A version of the Arduino Twinkle Lights code that supports more than two strands of lights.',
//         category: 'IoT'
//     }, {
//         name: 'Arduino-Twinkle-Lights',
//         url: 'https://github.com/johnwargo/Arduino-Twinkle-Lights',
//         description: 'An Arduino application for fading two strands of LED Lights up and down.',
//         category: 'IoT'
//     }, {
//         name: 'arduino-rtc-relay-static',
//         url: 'https://github.com/johnwargo/arduino-rtc-relay-static',
//         description: '',
//         category: 'IoT'
//     }, {
//         name: 'Arduino-Pinewood-Derby',
//         url: 'https://github.com/johnwargo/Arduino-Pinewood-Derby',
//         description: 'Source code for the Arduino Powered Pinewood Derby project',
//         category: 'IoT'
//     }, {
//         name: 'apache-cordova-api-cookbook-code',
//         url: 'https://github.com/johnwargo/apache-cordova-api-cookbook-code',
//         description: 'Source code for Apache Cordova API Cookbook',
//         category: 'Book'
//     }, {
//         name: 'ac4p',
//         url: 'https://github.com/johnwargo/ac4p',
//         description: 'Source code from Apache Cordova 4 Programming',
//         category: 'Book'
//     }, {
//         name: 'moddable-helper',
//         url: 'https://github.com/johnwargo/moddable-helper',
//         description: 'Node-based CLI command helper for the Moddable SDK',
//         category: 'Node'
//     }, {
//         name: 'firebase-functions-deploy-helper',
//         url: 'https://github.com/johnwargo/firebase-functions-deploy-helper',
//         description: 'Simplifies deployment of a subset of Firebase Functions (because of Firebase deployment quota limits)',
//         category: 'Node'
//     }, {
//         name: 'ionic-pipes-example',
//         url: 'https://github.com/johnwargo/ionic-pipes-example',
//         description: '',
//         category: 'Web'
//     }, {
//         name: 'pi-remind-hd-notify',
//         url: 'https://github.com/johnwargo/pi-remind-hd-notify',
//         description: 'Pi Remind HD project enhanced to work with the Remote Notify project',
//         category: 'IoT'
//     }, {
//         name: 'flutter-future-builder',
//         url: 'https://github.com/johnwargo/flutter-future-builder',
//         description: '',
//         category: 'Flutter'
//     }, {
//         name: 'flutter-logging-sample',
//         url: 'https://github.com/johnwargo/flutter-logging-sample',
//         description: 'A simple app demonstrating how to use the Flutter Logging library',
//         category: 'Flutter'
//     }, {
//         name: 'phonegap-essentials-code',
//         url: 'https://github.com/johnwargo/phonegap-essentials-code',
//         description: 'PhoneGap Essentials Book Source Code',
//         category: 'Book'
//     }
// ];
