# Express Template
A template for easily creating Express.js Websites.

___
Cloning
---
Use the following command to get started:
```shell
$    git clone 'https://github.com/LiamGlasson/Express-Template'
```
___
Dependencies
---

To install the required dependencies, open a terminal and run the following command:
```
$    npm install
```
___
Usage
---
- To start the server normally, use:
```
$    npm run start
```
- To start the server in ***developer*** mode, use:
```
$    npm run dev
```
___
`.env` File
---
The template is set by default to use a `.env` file when configuring which port to run on. This file can also be configured to store other secrets such as database credentials, and as such should never be uploaded publicly. <br>
<br>**If you do not wish to use a `.env` file, you should delete it and update the following code:**

```js
// File Location: ./Express-Template/bin/www

// Before:
const port = normalizePort(process.env.PORT);

// After:
const port = normalizePort(3000);
```
