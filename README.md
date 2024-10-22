# automation-exercise

This repository contains automated end-to-end tests for the project, built using Playwright.

## Automated Test Scripts
The test scripts are written using Playwright and TypeScript. These scripts cover the end-to-end flow for key user functionalities of the application `https://automationexercise.com/`.

The tests include:
* Login functionality
* Adding products to cart
* Contact form submission
* Product search

## Steps for Setting Up the Project Locally and Running Tests

### Prerequisites:

* Node.js (version >=16.x.x)
* Yarn (for package management)

### Setup Instructions:

1. Clone the Repository:

```bash 
git clone https://github.com/itsanjeev/automation-exercise.git
```
and navigate to the folder:
```bash
cd automation-exercise
```
2. Install Dependencies: Install the necessary dependencies, including Playwright browsers, using the following commands:

```bash
yarn install
yarn playwright install --with-deps
```
3. Running Tests locally: Execute the Playwright tests with the following command:

```bash
yarn run:local
```
4. Generating Reports: Playwright generates HTML reports by default. After running the tests, you can view the report using:
```bash
yarn playwright show-report
```