#!/bin/sh

cd lib
git init
git config user.name "Takahide Kondoh"
git config user.email tkondoh@ktrick.com
git remote add origin bitbucket_ktrick:tkondoh_ktrick_com/formio.js.git
git add -A
git commit -m "First commit"
git branch -m master
git push --force -u origin master
cd ..
