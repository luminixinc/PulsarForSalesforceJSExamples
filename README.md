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
- Pulsar is available for iOS, Android and Chromebooks, and Windows 10.  Download, and start syncing your organization!  For premium use, which allows full customization, contact Sales at [Luminix, Inc](https://www.luminixinc.com).
- And... you can completely customize the UI by writing HTML/CSS/Javascript apps for embedding in Pulsar, (which is what the remainder of this document is about ;)

Pulsar Javascript API Examples
------------------------------

This repository contains canonical example code of how to interact with the Pulsar platform from a custom embedded HTML/CSS/Javascript app.

### `hello.html`

A simple, self-contained, "hello world" example that exercises the Pulsar Javascript API.  Performs some simple queries and prints out the results.

### `testserve.js`

The purpose here is to provide an example "Local Development Server"

Running the Examples in Pulsar
------------------------------

To view these examples in Pulsar:

- Upload the HTML file(s) to Salesforce, specifically upload them into your org's Content Library (or Files section)
- Launch Pulsar on your device, login again if prompted, and resync Pulsar
- After sync, navigate to the document under the Pulsar Content Library (Files) tab and open it

Extra Resources
---------------

- [Admin/developer Pulsar for Salesforce Wiki](https://luminix.atlassian.net/wiki/spaces/PD) &mdash; toplevel wiki for Pulsar Setting for Salesforce admins
- [Pulsar as a Platform](https://luminix.atlassian.net/wiki/spaces/PD/pages/49152017/3-1.+Pulsar+as+a+Platform) &mdash; information about building HTML/JS apps for Pulsar, _`.pulsarapp`_ format, etc
- [Local Development Server](https://luminix.atlassian.net/wiki/spaces/PD/pages/831029249/Local+Development+Server)
- [More complex Examples]()

Lightning Web Components
------------------------

Pulsar currently has preliminary support for LWC.  For more information, please inquire with our [Support team](https://www.luminixinc.com).

Contributing
------------

We appreciate your comments, issues, ideas!
