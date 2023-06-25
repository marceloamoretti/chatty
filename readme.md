# Welcome to Chatty!

This is a simple React Native implemented to test ChatGPT integration.

## Tech Stack

- React Native
- React Query
  
# How to run

- Checkout this repository
- run `yarn install` to install node modules
- run `cd ios && pod install && cd -` to install Pods if you're on a Macbook.
- create a `.env` file.
- To use this project you will need an OpenAI api key. Add this Key to `.env` file: `GPT_KEY=<key>`

## Run iOS

- `yarn start --reset-cache` once bundler loads, press `i` to run iOS simulator

## Run Android

- `yarn start --reset-cache` once bundler loads, press `a` to run Android Simulator
