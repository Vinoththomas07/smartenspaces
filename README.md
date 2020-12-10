Smarten Spaces

The application will list the IPs on every change of network( on every change if IPs) and upon clicking on the IP you should be able to see the details of the IP like address, type, time is changed and from what state it has changed.

Steps to test:

1. In project directory
2. npm install
3. cd ios && pod install && cd ..
4. react-native link
5. To run debug application:
    ** To run in debug the ip address will remain same in the emulator/simulator so to test the feature use build app or you can test it by commenting the line 8 to 10 and uncomment line 12 to 14 so that you should be able to detect the change based on time. (But i'll prefer using the build app to test the actual requirement)
    1. npx react-native run-ios --simulator "iPhone 11" 
    2. npx react-native run-android
6. To build app.
    1. For android use - cd android && ./gradlew app:assembleRelease
    2. For ios use xcode.


Issues you might face:(depends on the xcode version)

While building iOS debug app, you might get error for `multiple commands produce`, in that case apply this fix https://stackoverflow.com/a/50719379