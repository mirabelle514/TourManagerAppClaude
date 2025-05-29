#!/bin/bash

# Build script for Tour Manager App

echo "Building Tour Manager App..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build iOS
echo "Building iOS..."
cd ios
pod install
cd ..
npm run build:ios

# Build Android
echo "Building Android..."
npm run build:android

echo "Build complete!" 