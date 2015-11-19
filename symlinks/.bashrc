# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
   PS1='\[\033[1;36m\](\t) \[\033[00m\]\[\033[01;34m\]\w\[\033[00m\]\[\e[0;35m\]$(parse_git_branch)\n\[\e[0m\]★ '
    ;;
*)
    ;;
esac

parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* (.*)/ (1)/'
}