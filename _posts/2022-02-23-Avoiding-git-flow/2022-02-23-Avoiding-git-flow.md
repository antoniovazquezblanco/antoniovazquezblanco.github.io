---
layout: post
title: Avoiding git flow
---

Soon after I started using Git I discovered flow. It has been difficult not to cross paths with the workflow that I also adopted as a dogma soon after I read about it.

As many other people, I have tried to fit Git flow into my projects disregarding the needs of many of them. That was the way good software was developed and that was the way I wanted to develop good software.

As time went by, my laziness started kicking into my workflow habits simplifying them. It was just a matter of realizing that I did not wanted or used many of the features git flow gave me.

Git flow is a super complete workflow model for git that fits complex software or particular maintenance requirements for a software piece. This certainly does not fit almost 99% of the software I write...

I have never needed to support older releases other than the latest one. If a bug was found on a piece of software, a fix was issued and a release was made. No bugfixes merged onto multiple branches for older and newer releases.

This was even more present whenever I discovered continuous integration and deployment. Automating the testing and release steps just made it easier to issue fixes right away with more confidence reducing the downsides of just maintaining a single "rolling" release.

Time has oversimplified my git workflow again, even to the point of affecting the way I have to plan and organize my stuff. Fortunately, this oversimplified workflow has forced me to adopt what I now see as better practices.

Currently, unless specific requirements of a project force me to change my habits, my default workflow is as follows... 

A `master` or `main` branch which holds the latest usable code. Releases take place only in this branch and there may be commits after the latest release. The latest commit can be seen as the latest unstable release.

Changes take place in `dev/xxx` branches that spawn from `main`. Merging issues are always fixed in the `dev/xxx` branch. This allows an in-depth review before merging back into `main`. Code must be thoroughly tested. This forces code changes to be split into smaller chunks per branch to allow for better and faster review.

From time to time it is inevitable to deal with breaking changes that mess the rest of pending reviews but planning usually limits those cases to the minimum.

Of course, testing and performing thorough reviews of the code are a must in order to be able to provide quick bugfix releases when there is code in `main` that has not been released yet.

As a side note, I like to squash merge the `dev/xxx` branches to keep the history as clean as possible. If the branch is small enough to squash it, this is also a good time to rewrite the commit message. If the branch is too big or has a complex history, the merge will not be squashed.

This may be obvious for many people but to come to this realization and to be able to write this down has required a mental effort. Maybe this will be of use for others that tend to overthink things like I do.

Thanks!
