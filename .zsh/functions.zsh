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

python-venv() {
    mkcdir $1
    virtualenv venv --system-site-packages;
    source venv/bin/activate
}

python-venv-activate() {
    if [ -d "./venv" ] && [ "$#" -eq 0 ]; then
        source venv/bin/activate
    else
        cd $1
        if [ -d "./venv" ]; then
            source venv/bin/activate
        else
            echo "No venv found"
        fi
    fi
}
