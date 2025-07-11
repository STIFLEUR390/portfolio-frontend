import * as Sentry from '@sentry/nuxt';

Sentry.init({
    // If set up, you can use your runtime config here
    // dsn: useRuntimeConfig().public.sentry.dsn,
    dsn: process.env.SENTRY_DSN || "https://c821d2fc811749f0888bd580ddf5703f@glitchtip-ywgws00kck80ggsgcoksk4s0.applix.fr/5",

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // If the entire session is not sampled, use the below sample rate to sample
    // sessions when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // If you don't want to use Session Replay, just remove the line below:
    integrations: [Sentry.replayIntegration()],

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
});
