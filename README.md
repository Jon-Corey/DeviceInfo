# Device Info

Ever wondered what information websites can access about your device? Device Info is a simple resource for finding out. Just go to [DeviceInfo.JonCorey.Dev](https://deviceinfo.joncorey.dev/) and see what information is displayed about your device.

This is not a comprehensive resource. I've only included the items that I thought were useful, interesting, and/or relevant. And I've only included the information that I know how to get to. There is definitely other information that isn't displayed on this tool.

## For Developers

Want to know how I got this info? All of the logic for getting the info is in `/js/App.js`. Each function corresponds to a section in the UI. And if you want to find a particular data point, just search the JavaScript file for the element's ID.

## Notice an Issue?

Feel free to create an Issue right here on GitHub by going to the Issues tab and clicking "New Issue". Make sure to include a lot of detail so that there's enough information for the issue to be found and fixed.

## Want to Request a Feature?

With this project, I want to keep a balance of simplicity and usefulness. Adding features usually increase complexity, so I want to be strategic about which features I add and which ones I don't. If you have a feature suggestion, feel free to create an Issue by going to the Issues tab and clicking "New Issue". Make sure to prefix the title with "Feature: " so that people know it's a feature request and not an issue. Also, make sure to include a lot of detail so that whoever reviews it knows exactly what you're asking for.

Note that not all feature requests will be approved. And of those that are approved, not all of them will be added. And even if it is added, it will not be immediately.

## Want to Contribute?

I'd love to accept Pull Requests that fix issues or add features. If you create a pull request, please make sure to follow the existing code's style. Also, make sure to include a lot of details about what issue the PR fixes or what feature the PR adds (and why the feature is useful).

Note that I do have a job and a life, so there will be a delay before I can review the PR. Also, your PR may not be accepted - even if the code looks great and the logic is sound and the feature it adds is really cool. I'm trying to keep this tool both simple and useful, which might mean turning down some cool features.

As for running the site locally and making changes, this is just a normal website with no JavaScript frameworks. No need to install any dependencies or tools. If you want to run this locally, I do suggest using something like the [Live Server](https://marketplace.visualstudio.com/items/?itemName=ritwickdey.LiveServer) plugin for VS Code as it allows you to easily run the site locally.

If you add, remove, or rename files, you'll need to update `service-worker-assets.js` accordingly. I've written a PowerShell script called `list-assets.ps1` that will update it automatically. Once you've added, removed, or renamed the files just run the script. This makes sure that the web cache has all of the files it need when the site is installed as a PWA.
