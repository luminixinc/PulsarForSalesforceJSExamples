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

This repository contains canonical example code of the HTML/CSS/Javascript interaction with the Pulsar App.  To view any of these in Pulsar:

- Upload the HTML document to your Salesforce Content Library (Files) section
- Launch Pulsar app on your device, login again if prompted, and resync Pulsar
- After sync, navigate to the document in Pulsar Content Library (Files) and open it

### `hello.html`

A simple, self-contained, "hello world" example that exercises the Pulsar Javascript API.  Performs some simple queries and prints out the results.

### `helloembed.html`

Similar to `hello.html` example, but launches another document/app within an iframe.  This document can also make API calls into Pulsar.

### `hellosync.html`

Similar to `hello.html` example, but also sets up to monitor sync process updates.  Homework assignment: Suppress the main Pulsar sync banner using the appropriate Pulsar Setting and implement your own sync banner in HTML/CSS Javascript! ;)

Extra Resources
---------------

- [Admin/developer Pulsar for Salesforce Wiki](https://luminix.atlassian.net/wiki/spaces/PD)

Lightning Web Components
------------------------

Pulsar currently has preliminary support for LWC.  For more information, please inquire with our [Support team](https://www.luminixinc.com).

Contributing
------------

We appreciate your comments, issues, ideas!

