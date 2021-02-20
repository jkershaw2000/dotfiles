alias ls="exa"
alias mkdir="mkdir -p"
alias neofetch="clear; neofetch"
alias poweroff="sudo poweroff"
alias reboot="sudo reboot"
alias dl="cd ~/Downloads"
alias docs="cd ~/Documents"
alias brewup="brew update; brew upgrade; brew cleanup; brew doctor"
alias zshconfig="vim ~/.zshrc"

alias ls="exa -lhbm --git "
alias lsa="exa -lhbma --git"
alias zshrc-reload="reload-zshrc"


# If neovim installed use that else, fallback to vim then vi.
if type nvim >/dev/null; then
    alias vi="nvim"
    alias vim="nvim"
    export EDITOR=nvim
    export VISUAL=nvim
elif type vim >/dev/null; then
    alias vi="vim"
    alias nvim="vim"
    export EDITOR=vim
    export VISUAL=vim
else
    alias vim="vi"
    alias nvim="vi"
    export EDITOR=vi
    export VISUAL=vi
fi
