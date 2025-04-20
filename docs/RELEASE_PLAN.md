# Release plan

In order to create and publish a release, you need to take the following steps:

1. Make sure the [CHANGELOG.md](../CHANGELOG.md) is up-to-date. This means it should include all the relevant changes for the next release.
2. After that is done, the [Bump version pipeline](https://github.com/dnd-mapp/dma-ui/actions/workflows/bump-version.yml) needs to be triggered to bump the version in all the relevant places. This will be done automatically for you. A pull request will be created which you much merge/approve in order to proceed with the release plan.
3. After that multiple pipelines will be triggered from that in order to:
   - Create git tags and to publish a GitHub release.
   - Deploy the Storybook documentation to GitHub Pages.
   - Create and publish a package to the GitHub Package Registry which contains the compiled library.
4. After the GitHub release has been published, you'll need to take the relevant Changelog notes for the release version from the [CHANGELOG.md](../CHANGELOG.md) and update the description of the published GitHub release with those notes.
