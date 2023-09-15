---
title: Git
description: Overview of Git / Github Actions / Testing Protocol
---

:::info

- **Recurring Task**: You have to follow Git protocol every time you make commits or push code
- **Frequency**: Every time you make commits or push code

:::

## Disclaimer

Much of the following is **opinionated** policy for Git, and the Github Workflows can also be re-configured to your liking. Use your best judgement and don't be afraid to break protocol in the moment if necessary.

Feel free to edit this doc / instructions as needed, this is a living document.

## Github Actions

- See `.github/workflows` folder in existing repos for examples
- General docs - https://docs.github.com/en/actions
- In general, backend changes have to be pushed into production to fully test them (as we have no dev (secondary) database / backend).
- Frontend changes (in PR) can be fully tested in preview frontend deployments for [Energy Dashboard](http://energy-dashboard.s3-website-us-west-2.amazonaws.com/#/map) and [Carbon Calculator](http://carbon-calculator.s3-website-us-west-2.amazonaws.com/#/)
- See https://www.githubstatus.com/ if the workflows break, to check if it's just Github servers down

## Testing Pipeline / Git Protocol

### Reporting the Problem

- Try to report any problems you noticed / are trying to solve to `https://github.com/OSU-Sustainability-Office/<repo>/issues`
- Ideally, you want to separate out the problem (Issue) from the solution (Pull Request)
- Try to split the problem / task into smaller parts if possible to make delegating tasks easier, and make it easier to track incremental progress
- If you need more input on the problem or your proposed solution, email or set up a meeting with Brandon and Lety to get feedback. Consider this especially if:
  - You need to make a choice with substantial financial consequences, and you want to make sure OSU SO's money is being spent in a way your managers are okay with
  - You need guidance in terms of not understanding some environmental science or electric science etc. relevant to your question
  - You need help specific to the meter hardware (Lety's department)

### Working on New Branch

- Start from the main or master branch (`git checkout main` or `git checkout master`)
  - Usually you want to branch off of main or master branch. Do not branch off of another feature branch if possible, to avoid merge issues later
  - **For very minor fixes** or if you are working on a simple repo (e.g. this wiki) it is okay to make changes and commit directly to master / main branch, but for more substantial changes please make a new branch and PR
  - New branch / PR enables you to track all the changes together for a new feature, and also helps to ensure any careless errors don't make it into production
- Run `git pull` here to make sure you start up-to-date
- Create a new branch with (no spaces in branch name):
  - `git checkout -b "new-branch-name"`
  - It is generally a good idea to have one branch and one pull request for each fix / problem
- At this point, if only working on frontend changes, you may want to edit `.env.development`, such as setting `VUE_APP_ROOT_API` to the same value it is in `.env.production`
- Commit whenever you have made substantial changes worth saving. If in doubt, just remember the purpose of commits is to save progress, don't be afraid of messy commits or making too many commits
- If applicable (such as if you started a new project / repo), make sure that your `.gitignore` covers `node_modules/` and any other files that would be too big (e.g. `build/` files) or a security vulnerability (like some `.env` files)
  - Once you commit and especially push code, it's hard to undo. You can also use `git status` before commiting to make sure you didn't commit anything weird
- When ready to commit and push, use commands:
  - `git add .`
  - `git commit -m "commit comment"`
  - `git push`

### Other Useful Git Commands

- `git branch`
  - Double check which branch you are on
  - If the list of branches exceeds the height of your terminal, just tap `q` on keyboard to escape. Use arrow keys to scroll branches in that case
- `git fetch`
  - Retrieves latest git commits without updating your local branches yet
- `git fetch`
  - Retrieves and updates your current local branch to match the remote
- `git merge master`
  - `master` is given as an example here in the scenario that you want changes from `master` into the dev branch you are currently on
- Merge Errors
  - In case of a merge error from `git merge` or `git pull`, I like to use VSCode Source Control GUI feature (`Ctrl Shift G` on Windows) for resolving it
    - `Incoming` = parent branch e.g. `master` in scenario "I want to merge master into dev"
    - `Current` = child branch e.g. "dev" in scenario "I want to merge master into dev"
    - After all changes are resolved in the VSCode Source Control GUI, you can use `git commit "commit comment"` and `git push`
- `git stash`
  - Good for when you have some uncommited changes you want to either discard or set aside for now
  - You will want to use either this command or `git revert` (more info below) if you make some changes to the branch you would like to undo
  - Will return branch to last commit, you can restore stashed changes with `git stash pop{index}`
    - Example: https://stackoverflow.com/a/37571189
- `git revert --no-commit COMMIT-ID..HEAD`
  - For when you want to return the branch back to a certain commit, e.g. if you made some changes you want to discard
    - Unlike `git stash`, this command will work even if you already committed some unwanted changes
  - Example: https://stackoverflow.com/a/21718540
- `git log`
  - See list of commits locally on your PC

### Making a Pull Request

- You will need to make a Github Pull Request in order to trigger preview deployments (discussed in Github Actions section above) for Energy Dashboard and Carbon Calculator
- Make a PR as soon as you commit and push any new changes to your new branch
- Remember to list any concerns or important takeaways in the Pull Request Comments, or commenting the code can also work
- Again, it is best to have only one pull request for the corresponding new branch if possible
- Usually you want to be merging the PR into main or master branch
- Make sure to link the pull request to any related Github Issues, such as by linking the PR in the Issue's comments
- Note the `files` tab in the PR, this is an easy way to keep track of every file that changed for the PR

### Testing Checklist

- NOTE: Webscrapers (`automated-jobs` repo) follow a different testing / deployment pipeline, see [here](updating_webscraper) and [here](webscraper_tutorial#testing-pipeline-guide) for more
- Should test (ideally log screenshot evidence in PR comments):
  - Locally (e.g. on [http://localhost:8080](http://localhost:8080) or [http://localhost:3000](http://localhost:3000))
  - Test S3 preview deployment (if frontend only changes on [Energy Dashboard](http://energy-dashboard.s3-website-us-west-2.amazonaws.com/#/map) or [Carbon Calculator](http://carbon-calculator.s3-website-us-west-2.amazonaws.com/#/))
    - Especially important if testing any frontend changes that would affect the mobile user experience for Energy Dashboard or Carbon Calculator. These cannot be accurately tested locally on your PC
- If applicable, reset any changes `.env.development`, such as setting `VUE_APP_ROOT_API=http://localhost:3000` before merging the PR
- Please remove any debug comments (`console.log`) statements you added at this point and rename variables if any are confusingly named
- Run `npm run format` if you haven't already, make sure you ran it in the last commit for the PR
- Merge PR once you have reviewed the checklist items above, and have also conducted a general code review on any changed files, and made any last changes you would like to make
  - Pick the `Squash and Merge` option when merging the PR, to prevent bloat in the `main` / `master` branch's commit history. You can see the individual commits on the PR anyways
  <!---
  move the below bullet point to another dedicated frontend testing / devops doc maybe? idk. frontend prereqs doesn't feel like a good fit
  -->
  - NOTE: It is still necessary to do a final check on production, as there may be some issues only apparent on production version (e.g. some CORS errors)
  - Remember for testing the production frontend, the changes aren't deployed until the `gh-pages` branch (if using Github Pages) shows green deployment checkmark. Backend changes should deploy as soon as the pipeline shows green checkmark on the `master` / `main` branch
- If production looks good after the PR is merged, then make sure to mark the corresponding Github Issue as closed
- Not Git related per se, but it's also a good idea to save a brief summary of your work to Software Timeline and Software Meeting Notes in OSU SO's Shared Google Drive
  - Don't make it too technical, it is for the benefit of your managers Brandon and Lety, who are not software engineers or computer scientists
