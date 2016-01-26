printf "Enter Website version:  "
read VER
cd awesomePavi.github.io
git add --all
git commit -m VER
git push -u origin master