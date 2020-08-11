# react-native-barcodescanner

## iOS

### Enviorment Installation

#### Step 1: Installing Node and Watchman

Official guide suggests to use Homebrew to install Node and Watchman. So first thing first, run this command to install Homebrew
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
After brew is installed, run these commands to install Node and Watchman respectively.
```sh
$ brew install node
$ brew install watchman
```

#### Step 2: Installing Xcode

Open your AppStore and search Xcode to install. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.
We shall also need to install the Xcode Command Line Tools.

* Open Xcode.
* Choose "Preferences..." from the Xcode menu.
* Go to the Locations tab and install the tools by selecting the most recent version in the Command Line Tools dropdown.

And to install an iOS simulator.
* Open Xcode.
* Choose "Preferences..." from the Xcode menu.
* Go to the Components tab and download a simulator you want to use.

#### Step 3: Installing CocoaPods

```sh
$ brew install cocoapods
```

### Run the App

First, clone the repo via github:

And then install the dependencies with yarn.

```bash
# Install the dependencies.
$ cd react-native-barcodescanner
$ yarn
```
And then, run the app
```bash
$ yarn start
```

## Android

### Enviorment Installation

#### Installing Android studio

[https://techstacker.com/how-to-set-up-react-native-cli-mac-android/]


### Run the App

First, clone the repo via github:

And then install the dependencies with yarn.

```bash
# Install the dependencies.
$ cd react-native-barcodescanner
$ yarn
```
And then, run the app
```bash
$ yarn start
```
