Pulsar for Salesforce Javascript API Examples
=============================================

Pulsar for Salesforce is a desktop/mobile app developed by Luminix, Inc that allows organizations to sync and work with Salesforce data, all while completely offline.

Pulsar also allows for complete customization of the UI/UX using your favorite HTML/CSS/Javascript web development frameworks.  Your custom code can interact with Salesforce data on the local device, even when completely offline using the Pulsar Javascript API.

Pulsar for Salesforce Features
------------------------------
- Pulsar allows complete sync of your Salesforce data to your mobile device or desktop PC. Work offline, then quickly perform a "catch-up" sync when you get back online.
- Pulsar is NOT a data cache.  Your data is stored and encrypted locally in a SQLite database on the device.
- Pulsar is NOT a separate cloud.  Your data is stored only in Salesforce cloud and on the device.
- Allows complete Create Read Update Delete (CRUD) of object records, including child and related records, all while completely offline, subject to Salesforce permissions and access controls you are already familiar with.
- Also supports offline access to files and documents, roll-up summary fields, formula fields, validation rules, flows and quick actions, all while completely offline, and subject to Salesforce permissions.
- If you "know" Salesforce, then working with Pulsar as an admin or developer is simply easy!
- Pulsar App is available for iOS, Android and Chromebooks, and Windows 10.  Download, and start syncing your organization!  For premium use, which allows full customization, contact Sales at [Luminix, Inc](https://www.luminixinc.com).
- And... you can completely customize the UI by writing HTML/CSS/Javascript apps for embedding in Pulsar, (which is what the remainder of this document is about ;)

Pulsar Javascript API Examples
------------------------------

This repository contains canonical example code of the HTML/CSS/Javascript interaction with the Pulsar App.

### `pulsar-js-bridge.html`

This file contains a minimal example that demonstrates how to setup the Pulsar JS bridge from within any context in the Pulsar App. There are two <script> blocks in the header. The first contains all the code required to prepare the bridge for your application. The second is a minimal example of how to start an application. The connecting bit of code between these two in this particular case is the function startApp(). This is defined in second <script> block, and called in the first. You can rename this function, but make sure that you modify the function calls in the first block of code to reflect any naming changes.

### `hello.html`

A simple, self-contained, "hello world" example that exercises the Pulsar Javascript API.  Performs some simple queries and prints out the results.

### `helloembed.html`

Similar to `hello.html` example, but launches another document/app within an iframe.  This document can also make API calls into Pulsar.

### `hellosync.html`

Similar to `hello.html` example, but also sets up to monitor sync process updates.  Homework assignment: Suppress the main Pulsar sync banner using the appropriate Pulsar Setting and implement your own sync banner in HTML/CSS Javascript! ;)

Running the Examples in Pulsar
------------------------------

To view these examples in Pulsar:

- Upload the HTML file(s) to Salesforce, specifically upload them into your org's Content Library (or Files section)
- Launch Pulsar app on your device, login again if prompted, and resync Pulsar
- After sync, navigate to the document under the Pulsar Content Library (Files) tab and open it

Pulsar Developer REPL
---------------------

The process to upload changes to Salesforce, resync Pulsar to view them, and edit/repeat, is extremely time-consuming and error-prone.  Luckily, after you have the file(s) initially uploaded and displaying in Pulsar, you can switch to a quicker _local REPL experience (Read, Eval/Edit, Print, Loop)_...

For quicker editing and debugging of your HTML/JS code you will need to set up a [local development server](https://luminix.atlassian.net/wiki/spaces/PD/pages/831029249/Local+Development+Server).  

WARNING: running a local development server is only recommended for testing orgs, not orgs that are in production.  Caveat Programmer!

### `testserve.js`

Running `node testserve.js` will serve the `hello.html` file at http://127.0.0.1:3002.  (Note that if the _Node.js_ server fails to start, then you may need to install _Node.js_ on your development machine).

Once Pulsar is configured correctly, (don't forget to toggle the "ENABLE DEVELOPMENT SERVER" switch on the advanced settings page), go back to the `hello.html` document in the Content Library (Files) tab.  Pulsar will now connect to http://127.0.0.1:3002 when you next (re-)open the document.

At this point, you can locally change `hello.html`, and when you restart the server and/or refresh the page (or re-open the document) from Pulsar, you should see your changes show up.

### `testservedir.js`

This is a more complex example server that is designed to serve a toplevel `index.html` as well as a hierarchy of other HTML, JS, CSS, fonts, etc, files.  Incidentally, for any moderately complex app designed to run in Pulsar, you will want to [develop and bundle it as a _`.pulsarapp`_ format](https://luminix.atlassian.net/wiki/spaces/PD/pages/49152017/3-1.+Pulsar+as+a+Platform#id-3-1.PulsarasaPlatform-Bundlinganddeployingyourwebappas.pulsarappformat).

### Third Party Tooling

Now because you are serving file(s) to Pulsar locally from your development machine, you can use all your favorite HTML/JS tools (Visual Studio Code, Edge DevTools, Chromium developer tools, etc) to edit and actually debug your code live running in Pulsar.

Extra Resources
---------------

- [Admin/developer Pulsar for Salesforce Wiki](https://luminix.atlassian.net/wiki/spaces/PD) &mdash; toplevel wiki for Pulsar Setting for Salesforce admins
- [Pulsar as a Platform](https://luminix.atlassian.net/wiki/spaces/PD/pages/49152017/3-1.+Pulsar+as+a+Platform) &mdash; information about building HTML/JS apps for Pulsar, _`.pulsarapp`_ format, etc
- [Local Development Server](https://luminix.atlassian.net/wiki/spaces/PD/pages/831029249/Local+Development+Server)

Lightning Web Components
------------------------

Pulsar currently has preliminary support for LWC.  For more information, please inquire with our [Support team](https://www.luminixinc.com).

Contributing
------------

We appreciate your comments, issues, ideas!
