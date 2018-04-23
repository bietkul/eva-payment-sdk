# MrzScanner ReactNative Module

# How to use

Add `“mrz-scanner”: “git+ssh://git@git.geekyants.com:valapay/mrz-scanner.git”` in your package.json file.
Run
`npm install`
`react-native-link`

#Set Up 
This is the first time set up to integrate the module in your app.
All the resources required for the set up of ios & android are available in the resources folder of this repo respectively.

##Android
- Create a folder named `libs` in android -> app
- Save the `ReadID-core-1.10.0.aar` &  `ReadID-MRZ-3.5.0.aar` files in `libs` folder.
- Add this code in android -> app -> build.gradle (If not present)
    `repositories {
      flatDir {
       dirs 'libs'
     }
    }`

##IOS
- Drag the `ScannerSDKFramework` in root of your project.
- Add the  ScannerSDKFramework.framework & OCREngine.framework in Embedded Binaries Section of your xcode app.
- Go to build settings, search `Always Embed Swift Standard Libraries` & set it to yes.

#Methods
To start Scan
`startScan(Callback Success, Callback Error)`
