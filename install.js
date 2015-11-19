var exec = require('child_process').exec,
    execPrint = function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if(stderr)
            console.log('stderr: ' + stderr);
        if (error)
            console.log('exec error: ' + error);
    };

//TODO loop all files
// Create replacing files from "home" folder with links from dotfiles1
exec('ln -sfv "' + __dirname + '/.gitconfig" ~', execPrint);
exec('ln -sfv "' + __dirname + '/.bashrc" ~', execPrint);

// EXAMPLE: sudo apt-get update&&sudo apt-get install foo bar baz foo-dev foo-dbg
//exec('sudo add-apt-repository ppa:webupd8team/java', execPrint);
//exec('sudo apt-get update', execPrint); //downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies.
//exec('sudo apt-get install git-core git-gui gitk meld oracle-java8-installer vim', execPrint);