# Express-Template
A template for easily creating Express Websites.

___
Cloning
---

If you wish to copy the template into a renamed directory:
```shell
$ git clone 'https://github.com/LiamGlasson/Express-Template' 'application_name'
```
Otherwise, use:
```shell
$ git clone 'https://github.com/LiamGlasson/Express-Template'
```
___
Installing Dependencies
---

Open a terminal in **Visual Studio Code** using `Ctrl + Shift + '` and run the following command:
```
$ npm install
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
