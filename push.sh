function usage {
  echo "usage: ./push.sh [-A] [commit message]"
  exit 1
}

# check for -A flag to git add all
if [ $# == 2 ]; then
  if [ "$1" != "-A" ]; then
    usage;
  else
    git add -A;
  fi
fi

git commit -m "$1" && git push && npm run deploy