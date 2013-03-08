#!/bin/sh
do_commit() {
    cmd = "git commit -a -m\"$log\""
    echo $cmd
    git add .;
    git commit -a -m"$log"
    git push origin master;
}

while [ $# -gt 0 ]
do
  case $1 in
    -commit |-u) shift; log = $1; do_commit; exit 0;;
  esac
  shift
done