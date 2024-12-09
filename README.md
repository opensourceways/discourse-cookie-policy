# Discourse cookie policy

The repository contains JS and CSS to generate a cookie policy modal. It is build off of the [canonical cookie policy](https://github.com/canonical/cookie-policy).

## Using this component

You can install this component from within the admin dashboard in discourse. There is a more detailed guide here: https://meta.discourse.org/t/installing-a-theme-or-theme-component/63682

## Contributing

We should keep the project aligned with the [canonical cookie policy](https://github.com/canonical/cookie-policy). To do this we have to make sure we are using the latest version of the npm package, then we can:

`pnpm install`

`pnpm run build-cookie-policy`

Once merged into main, maintainers of any discourse instance where this is used will be notified and prompted to pull in the latest changes.

*If you are actively making changes to this repository I reccomend you [install discourse_theme](https://meta.discourse.org/t/install-the-discourse-theme-cli-console-app-to-help-you-build-themes/82950). This is a CLI that actively watches for changes in the working repository and reflects them in the specified discourse instance. This avoids having to run a local instance or make changes to a remote branch.*
