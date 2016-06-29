# BNB Website

Website for local business.

Contains a homepage, admin area and online ordering application.

Project written in Laravel/Angular2

# Features:

##Business Homepage
You know, for visibility and stuff.

##Online Ordering Application
Client side application and a page for restaraunt use, which updates
when orders are recieved. The client facing application is in Angular2

##Timeclock Application
Current employees can clock in/out and managers are allowed to login and edit/add time 
records when errors occur due to employee not clocking out etc.

At set intervals the application will generate excel documents containing a sheet for 
each employee with their time records for that pay period. Upon creation the document 
can be emailed to a user to evaluate.

##Sales Reporting
End of day sales records can be input into the database and every night at 11:55pm local
time a single page report can be emailed to a user.

##Future Plans

-Configure web sockets in ordering application

-Online Employment applications

-For the business exclusively, plans to set up a VPN from the server to the restaraunt
and interface with an escpos printer to automatically fire order reciepts from the kitchen
using [escpos-php](https://github.com/mike42/escpos-php) and some VPN service

-The order application is pretty modular as is, creating a dynamic application was 
the idea the whole time. But some tweaks are needed, and once I get around to it a completely
generic system should be available and will be open sourced, possibly as a Laravel package also.
I hope so anyway :)

