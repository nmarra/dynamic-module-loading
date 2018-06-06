# Dynamic Module Loading
* This project was based on work done by Thibaud Arnault: https://github.com/webshell/materia-sendgrid
* The addon module is now served using http-server and the main application runs in a browser instead of Electron.
* Some extraneous code was removed and the package files are updated to use the latest Angular 5.2.
* The webpack.config file is a newly created Angular 5.2 project that has been ejected (ng eject), no additional changes
 were made to the webpack configuration.

# Install
```
git clone git@github.com:nmarra/dynamic-module-loading.git
cd dynamic-module-loading
chmod +x setup.sh
./setup.sh
```

# Serve the Addon Module
```
cd addon
npm run serve
```

# Run the Main App
```
cd main-app
npm run webpack-start
```

# Testing dynamic reloading
* Once the main application is running and the user has loaded the dynamic component and seen it working, then 
go into the addon-view.component.css and change one of the colors and rebuild the addon ( npm run build in /addon ).
Then clear the browser cache, refresh the main application, and notice when pressing the 'load dynamic component' button that
 the new dynamic component is now loaded without needing to rebuild/redeploy the main application.