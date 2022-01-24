function usage {
  echo "usage: ./push.sh [-A] [commit message]"
  exit 1
}

if (( $# < 1 || $# > 2 )); then
  usage;
fi

MSG="$1"

# check for -A flag to git add all
if [ $# == 2 ]; then
  if [ "$1" != "-A" ]; then
    usage;
  else
    MSG="$2"
    git add -A || exit 1;
  fi
fi

git commit -m "$MSG" && git push && npm run deploy
