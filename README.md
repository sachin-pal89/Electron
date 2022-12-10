# Electron - EV Battery Monitoring System with Solar Powered Charging
## Problem Analysis
Despite advances in technology, there has not been many systems developed to monitor the battery health for Electric vehicles and even any effective method for solar based charging. Due to certain criteria, there are many cases of battery exploding and unhealthy battery conditions. There are also situations for EV vehicles discharging and waiting in long queues for charging the battery. Hence a system is being developed for monitoring the battery health and maintaining the temperature, humidity and voltage of the battery. Also, a battery swapping technique being developed for charging the battery with solar power and then using it as a replacement for the existing battery.

##	Objectives
The objectives of this project are to :   
•	Ensure battery safety and user safety.\
•	Constantly monitor the battery health and maintain the battery.\
•	Provide visual statistics about the battery.\
•	Implement solar powered battery swapping technique.\
•	Provide a faster renewable source of energy for the batteries.

## Proposed System
**Electron -** EV Battery Monitoring and Solar powered charging by Battery Swapping Technique. Electron consists of two parts. One part is Battery Monitoring System and another one is Solar powered charging by Battery Swapping Technique. 

Most EVs used rechargeable battery which is lithium-ion battery. Battery is the most essential component of any vehicle. So perfect maintenance of any battery is very much essential for it to function properly. Our Battery Monitoring System consists of ESP8266 Wifi Module, Rechargeable battery, DHT11 (Temperature and humidity sensor), Voltage Sensor and OLED display. 
The temperature of the battery is a very important parameter, as it decides the current state of the battery. If the temperature of the battery is high, it is a clear indication of the instability of the battery or to be more precise, it depicts the behavior of the battery under abnormal conditions. In order to measure the temperature, we go for a certain DHT11 sensor which will help in monitoring the temperature and humidity protocol. This DHT11 sensor will monitor and keep an eye on this parameter and will give an alert when it crosses a certain limit.
The developed battery monitoring system is also consists of a web-based user interface. The user interface is capable to monitor multiple battery monitoring devices and the conditions of batteries. Therefore, the idea of the user interface has taken into consideration the situation where there is a need to monitor multiple batteries conditions. The main page for the web-based user interface shows the details about the battery monitoring according to battery health, measure the Temperature, voltage and humidity and will give an alert when a certain limit is crossed.  

In the Electron, we charged the discharged battery with the help of Solar panel and Battery Swapping Technique which is an alternative that involves exchanging discharged batteries with the charged ones. Battery swapping is popularly used for smaller vehicles, such as two and three-wheelers, which have smaller batteries that are easier to swap. For this charging system we are using solar panel, DC-DC converter / Buck boost converter, charge controller and EV batteries.

## Softwares and Modules Used
**React -** ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application.

**Material UI -** MUI is a massive library of UI components designers and developers can use to build React applications. The open-source project follows Google’s guidelines for creating components, giving you a customizable library of foundational and advanced UI elements.

**Axios -** Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.

**MongoDB -** MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables.

**Node.js -** Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

**Express.js -** Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

**Render -** Render is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.

**ThingSpeak -** ThingSpeak is an IoT analytics platform service that allows you to aggregate, visualize and analyze live data streams in the cloud. ThingSpeak provides instant visualizations of data posted by your devices to ThingSpeak. With the ability to execute MATLAB® code in ThingSpeak you can perform online analysis and processing of the data as it comes in. ThingSpeak is often used for prototyping and proof of concept IoT systems that require analytics.

## Preliminary Results
<p align="center">
  <img src="https://github.com/varunkanbhat18/Electron/blob/master/Assets/BMS.jpg" width=40% height=40%>
  <img src="https://github.com/varunkanbhat18/Electron/blob/master/Assets/Solar1.jpg" width=35.8% height=35.8%>
  <img align="center" src="https://github.com/varunkanbhat18/Electron/blob/master/Assets/Electron.png" width=90% height=90%>
</p>
