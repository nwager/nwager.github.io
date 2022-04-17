for f in $(find $1 -name "*.jpeg");
do
  mv -- "$f" "${f%.jpeg}.jpg"
  echo "renamed $f"
done;