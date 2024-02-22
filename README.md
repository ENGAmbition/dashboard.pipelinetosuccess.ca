# dashboard.pipelinetosuccess.ca

dashboard.pipelinetosuccess.ca

## GitHub Workflow

When making changes to the library, you should create a new branch for your changes.

### Making Changes

If you're making changes to a repo on GitHub, copy/paste the following commands when you're making your **first** commit:

```
git checkout -b "your-name/feature"
git add .
git commit -m "New Feature"
git push --set-upstream origin "your-name/feature"
git checkout dev
```

REPLACE `your-name/feature` with your name and the feature you're adding! If it's not your first commit, use `git push` rather than `git push --set-upstream origin your-name/feature`

Then head over to the GitHub repo online and create a pull request from the branch you just created.

After the first commit you don't need to copy/paste the above again, you can make commits as usual.
