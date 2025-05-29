#!/bin/bash

# Test script for Tour Manager App

echo "Running tests..."

# Run unit tests
echo "Running unit tests..."
npm run test:unit

# Run integration tests
echo "Running integration tests..."
npm run test:integration

# Run E2E tests
echo "Running E2E tests..."
npm run test:e2e

echo "Tests complete!" 