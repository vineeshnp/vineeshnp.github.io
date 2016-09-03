---
layout: post
title: "MEAN Stack on top of Vagrant"
description: "A hassle free way to setup MEAN stack environment."
tags: [MEAN Stack, Javascript, Vagrant, Mongo, Angular, blog]
image:
  feature: meanstack_vagrant/header.jpg

---

We all know how monotonous it is to setup the development environment. The same
thing again and again, long wait for dependencies resolution. And fixing all the
issues to get project up and running. Well Vagrant will put a period to that.

# Development Environment

All of us know the pain of initially setting up the development environment. And
then we started loving [Docker](http://www.docker.com), which took away that
pain upto a great extend. Even though docker is great tool, for newbies docker
seems to be a hard ball to hit. An alternative is the [Vagrant](https://www.vagrantup.com/).
Vagrant is an easy to setup virtual OS environment. Vagrant will have vagrant `boxes`.
Each boxes are configured for a particular environment. For example you can configure
a box for LAMP Stack or MEAN Stack,... etc. Boxes can be stored locally, or hosted
online. Vagrant will boot the `vagrant box` to the corresponding environment.

# [Vagrant](https://www.vagrantup.com/)

* Vagrant is computer software that creates and configures virtual development environments.
* There are [vagrant boxes](https://atlas.hashicorp.com/boxes/search),
which will gives us a particular vagrant environment.
* Several boxes are available online which covers most of the environment.
* Some boxes covers only OS, like Ubuntu, CentOS, etc...
* Others are configured for a specific stack along with the OS.
* So if you want to create your own stack, you can do that and deploy the box anywhere.

## How to setup vagrant.
* Vagrant needs [VirtualBox](https://www.virtualbox.org/wiki/Downloads) in your machine, please do install that.
* Vagrant is available for all platforms,  get it
from [Vagrant](https://www.vagrantup.com/).
* Once vagrant is installed, test if its working or not.
* Go to command line and execute.

```

vagant

```
* It should generate something like

```

Usage: vagrant [options] <command> [<args>]

    -v, --version                    Print the version and exit.
    -h, --help                       Print this help.

Common commands:
     box             manages boxes: installation, removal, etc.
     connect         connect to a remotely shared Vagrant environment
     destroy         stops and deletes all traces of the vagrant machine
     global-status   outputs status Vagrant environments for this user
     halt            stops the vagrant machine
     help            shows the help for a subcommand
     init            initializes a new Vagrant environment by creating a Vagrantfile
     login           log in to HashiCorps Atlas
     package         packages a running vagrant environment into a box
     plugin          manages plugins: install, uninstall, update, etc.
     port            displays information about guest port mappings
     powershell      connects to machine via powershell remoting
     provision       provisions the vagrant machine
     push            deploys code in this environment to a configured destination
     rdp             connects to machine via RDP
     reload          restarts vagrant machine, loads new Vagrantfile configuration
     resume          resume a suspended vagrant machine
     share           share your Vagrant environment with anyone in the world
     snapshot        manages snapshots: saving, restoring, etc.
     ssh             connects to machine via SSH
     ssh-config      outputs OpenSSH valid configuration to connect to the machine
     status          outputs status of the vagrant machine
     suspend         suspends the machine
     up              starts and provisions the vagrant environment
     version         prints current and latest Vagrant version

For help on any individual command run `vagrant COMMAND -h`

Additional subcommands are available, but are either more advanced
or not commonly used. To see all subcommands, run the command
`vagrant list-commands`.

```
* If you get something similar to the above, your vagrant is ready to go.
* If its not running, make sure vagrant is added to environment variables.

## How vagrant works.

* Vagrant usually make use of virtual box installed on your machine.
* Whenever we download a `box` we run it with `vagrunt up`.
* On the back it will run the `box` on `VirtualBox`.
* You never have to deal with `virtual box`, its just for your information.

## Live explanation

<iframe width="854" height="480" src="https://www.youtube.com/embed/FSxS6iPJMFw" frameborder="0" allowfullscreen></iframe>

# MEAN Stack with Vagrant

As I had mentioned, there is MEAN stack box is already available  on
the cloud. All you have to do is, use vagrant to kick the box up.

* Create a folder called `vagrantMEAN`
* Navigate to the folder in commnad line.
* Run the following in command line

```bash
vagrant init arvindr21/mean-box
```
* This will initialize a vagrant file in the folder `vagrantMEAN`
* Now run

```bash
vagrant up
```
* This will download an Ubuntu BOX viz preinstalled with MEAN stack. Its only one
time download[~700MB], and may take few minutes depending on you internet connection
* Upon completing the download, you may see something like this

```
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Box 'arvindr21/mean-box' could not be found. Attempting to find and install...
    default: Box Provider: virtualbox
    default: Box Version: >= 0
==> default: Loading metadata for box 'arvindr21/mean-box'
    default: URL: https://atlas.hashicorp.com/arvindr21/mean-box
==> default: Adding box 'arvindr21/mean-box' (v0.1) for provider: virtualbox
    default: Downloading: https://atlas.hashicorp.com/arvindr21/boxes/mean-box/versions/0.1/providers/virtualbox.box
    default: Progress: 100% (Rate: 1735k/s, Estimated time remaining: --:--:--)
==> default: Successfully added box 'arvindr21/mean-box' (v0.1) for 'virtualbox'!
==> default: Importing base box 'arvindr21/mean-box'...
==> default: Matching MAC address for NAT networking...
==> default: Checking if box 'arvindr21/mean-box' is up to date...
==> default: Setting the name of the VM: MEANStackBox_default_1472877186724_9819
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 22 (guest) => 2222 (host) (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2222
    default: SSH username: vagrant
    default: SSH auth method: private key
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
    default: The guest additions on this VM do not match the installed version of
    default: VirtualBox! In most cases this is fine, but in rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please make sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your host and reload your VM.
    default:
    default: Guest Additions Version: 4.2.0
    default: VirtualBox Version: 5.0
==> default: Mounting shared folders...
    default: /vagrant => E:/workhouse/vagrant/MEANStackBox

```

* Now your MEAN Stack machine is ready to go.
```bash
vagrant ssh
```
* This will take you to the command line of your Ubuntu machine.
* You can test if the node, mongo are installed by hitting
`node -v` or `mongo`
* If you are getting error saying `ssh` is not available, please install `ssh` in
your host machine.

>MongoDB will start automatically whenever the VM starts

# Sharing files between your machine and vagrant box.

You might be wondering how am I gonna use my favorite IDE/TextEditor with this
command line tool. Don't get panic, vagrant have a good way of handling that.
* Vagrant will keep `/vagrant` synced with your host machines `vagrantMEAN` folder
that we created at the beginning.

## Your  `hello world`  nodejs app.

* I assume you are already running in your vagrant box.
* If not hit `vagrant ssh`
* Navigate to `/vagrant`

```
cd /vagrant
```

* create a folder `helloWorld`

```
mkdir helloWorld

cd helloWorld

```

* Now goto `vagrantMEAN` folder on yout host machine, you will be seeing
a folder called helloWorld.
* Open that folder in your favorite editor, in my case its [atom](http://www.atom.io)
* create a file `server.js`

```js
//server.js

console.log("Hello World!");

```
* Now you get back to terminal of your vagrant machine.

* hit `ls`

```
vagrant@precise32:/vagrant/helloWorld$ ls
server.js

```
* run `node server.js`

```

vagrant@precise32:/vagrant/helloWorld$ node server.js
Hello World!
vagrant@precise32:/vagrant/helloWorld$

```
* voila... your first program has run on your vm.

## Managing big projects

* You can put the entire project in this directory and execute it on vagrant machine.
* You could also make use of git.
* If you are using mongoDB, make sure to do backup in your host machine.
* The entire box can be packed and moved to another system without any trouble.

# Conclusion.

* With vagrant you could set up work environment quickly.
* The project files of vm will be synced with host machines files, thus editing
can be done on your host machine itself.
* You can even pack the instance to your own vagrant box, so that the initialization
time of your project can again brought down.
* Unlike running directly on virtual box, vagrant is fast in terms of performance.
* For more [vagrant boxes](https://atlas.hashicorp.com/boxes/search)
