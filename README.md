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

## Pipeline Setup Steps and How to Access Reports

**CI Pipeline Setup**:

This project is configured to use GitHub Actions for Continuous Integration (CI). The pipeline is automatically triggered on every push to the main branch.

* **CI Configuration File**: The GitHub Actions configuration file is located at:
```
.github/workflows/playwright.yml
```

**Key Steps in the Pipeline:**
1. **Checking out the code**: This ensures the repository code is checked out into the GitHub Actions runner.
2. **Setting up Node.js**: The pipeline uses the actions/setup-node GitHub Action to set the Node.js version.
3. **Installing dependencies**: Installs all Node.js dependencies using yarn.
4. **Installing Playwright browsers**: This installs the required browsers with Playwright.
5. **Running the Playwright tests**: Executes the Playwright tests using the yarn playwright test command.
6. **Uploading the test results**: Once tests are complete, the test results and reports are uploaded as artifacts for later review.

**Accessing CI Reports**:
Once the tests have run, the report is automatically generated and stored in the **playwright-report** folder. You can download the Playwright HTML report from the GitHub Actions workflow.

To access reports:
1. Navigate to the Actions tab in this GitHub repository.
2. Select the workflow run you want to see the result.
3. Under the Artifacts section, download the playwright-report folder.
4. Download and Extract the folder and open the HTML report to view the detailed test results.

![img.png](img.png)

**HTML Report**:
![img_1.png](img_1.png)
