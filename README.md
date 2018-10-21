<p align="center">
  <a href="https://facebook.github.io/react-native/">
    <img src="reactnative.png" alt="" width=200 height=174>
  </a>

  <p align="center">
    Learning ReactNative to make awesome native Mobile Applications :smile:
    <br>
  </p>

## References

 - Recommended Courses
    - [React Native Do Zero Ao Profissional - Bonieky](http://lp.b7web.com.br/rn-pre-venda/)
 
## Expo Deploy Reference

 - [Expo](https://expo.io)
    - [Learn Expo.io](https://expo.io/learn)
    - $ sudo npm install -g expo-cli
    - $ create-react-native-app app_name_here
    - $ cd app_name_folder
    - $ expo start
 - Deploying Expo Site
    - In app.json
    ```json
    {
      "expo": {
        "sdkversion": "23.0",
        "name": "App_Name_Here",
        "icon": "./icon.png",
        "version":"1.0.0",
        "slug": "exp.host/@alexgalhardo/app_name_here",
        "android":{
          "package":"com.galhardoo.app_name_here"
        }
      }
    }
    ```
    - Install exp
       - $ sudo npm install -g exp
    - Deploy To Cloud Repositoy
       - $ cd app_folder/
       - $ exp login
       - Edit slug
       ```
       "slug": "app_name_here",
       ```
       - $ exp start
       - $ exp build:android
          - Choose Option 1 -> Lets Expo Handle This
          - The expo will start to build APK in the cloud!
          - Download APK in Expo Account!
       - $ exp build:status

## Tools
 
 - Icons For Apps
    - [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)
 - Resize Images
    - [iLoveImg](https://www.iloveimg.com/)
 - Publish Google Play
    - https://play.google.com/apps/publish/signup/