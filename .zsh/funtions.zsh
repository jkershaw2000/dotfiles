mkcdir() {
  mkdir -p -- "$1" &&
    cd -P -- "$1"
}

lls() {
    clear
    ls
}

reload-zshrc() {
    source ~/.zshrc
}

ex() {
    if [ -f $1 ]; then
        case $1 in
        *.tar*) tar xvf $1 ;;
        *.bz2) bunzip2 $1 ;;
        *.rar) unrar x $1 ;;
        *.gz) gunzip $1 ;;
        *.t*z*) tar xvf $1 ;;
        *.zip) unzip $1 ;;
        *.Z) uncompress $1 ;;
        *.7z) 7z x $1 ;;
        *) echo "'$1' cannot be extracted via ex()" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}
