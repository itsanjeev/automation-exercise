import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    retries: 1,
    workers: 5,

    reporter: [['html', {open: 'never'}], ['list', {printSteps: true}]],

    use: {
        headless: true,
        baseURL: 'https://automationexercise.com',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'Google Chrome',
            use: {...devices['Desktop Chrome'], channel: 'chrome'},
        }
    ],

});
