#!/bin/bash
git fetch origin "+refs/heads/master:refs/remotes/origin/master"
git merge origin/master