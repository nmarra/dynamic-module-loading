# Dynamic Module Loading
* This project was based on some work done by Thibaud Arnault: https://github.com/webshell/materia-sendgrid
* The addon module is now served using http-server and the main application runs in a browser instead of Electron.
* Some extraneous code was removed and the package files are updated to use the latest Angular 5.2.
* The webpack.config file is a newly created Angular 5.2 project ejected, no additional changes.

# Bug with Angular5/Material - dynamic module loading

Link of the issue: https://stackoverflow.com/questions/47342589/angular5-dynamic-component-loading-containing-material-component-in-template

# Install

```
git clone git@github.com:thyb/repro-dynamic-loading.git
cd repro-dynamic-loading
chmod +x setup.sh
./setup.sh
```

**view => toggle developer tools**

![Screenshot](https://raw.githubusercontent.com/thyb/repro-dynamic-loading/master/screen.png)

- first button works (dynamic import of a normal button)
- second button don't work (dynamic import of a material button)

# Start

After the install, if you want to restart the app, run `npm start` or `./node_modules/.bin/electron .`

# Build

Build: `npm build`

Watch mode: `npm build --watch`
