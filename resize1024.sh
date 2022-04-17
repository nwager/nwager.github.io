cd $1
for f in *
do
  # don't resize already-resized images
  if ! [[ "$f" =~ .*1024\..* ]]; then
    NAME="${f%.*}"
    EXT="${f#*.}"
    NAME1024="$NAME-1024.$EXT"
    # check if file has not already been resized
    # https://stackoverflow.com/a/6364244
    if ! compgen -G "$NAME-1024.*" > /dev/null; then
      cp "$f" "$NAME1024"
      sips -Z 1024 "$NAME1024"
    fi;
  fi;
  
done