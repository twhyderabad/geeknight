#!/usr/bin/env bash

cd $SNAP_WORKING_DIR
bundle install
echo "Building site..."
bundle exec nanoc

echo "Checking for changes..."
cd gh-pages
if [[ -z $(git status -s) ]]; then
  echo "No changes to push"
  exit 0
fi

echo "Pushing result..."
git add --all .
git commit --amend --allow-empty -q -m "Built $SNAP_COMMIT_SHORT"
git push -fq origin gh-pages
