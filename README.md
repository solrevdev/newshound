newshound
=========

node.js application to display news from the bbc and sky. kicking the tyres of new tech.

Newly added a Vagrant VM provisioned with Chef Solo using new vagrant cloud using Vagrant 1.5



** Vagrant install **

 * git clone git@github.com:solrevdev/newshound.git
 * Install latest 1.5.0 version [from here](http://www.vagrantup.com/downloads.html) so can use features from [Vagrant Cloud](https://www.vagrantcloud.com/)
 * Install latest VirtualBox [from here](https://www.virtualbox.org/wiki/Downloads) 
 
```bash

$ cd newshound
$ vagrant up
$ vagrant ssh
$ cd /vagrant
$ node newshound.js 
```
then visit [http://localhost:5000](http://localhost:5000) http://localhost:5000 in browser on your local machine.
 

** Manually **

Clone the repo into a folder. 

*  git clone git@github.com:solrevdev/newshound.git

Then grab the dependancies via node

* cd into the newshound directory pulled from github
* sudo npm install

Then run the app

* node newshound.js 
* visit http://localhost:5000 in browser

Todo:

* add images and tidy up, ensure it streams and uses callbacks properly or usesocket.io perhaps?
* use [nedb](https://github.com/solrevdev/nedb) as an embedded database for storage
* tie into heroku toolkit so pushes to github deploy to heroku
* tie into vagrant-aws or use aws tools to deploy

* add http://community.opscode.com/cookbooks/npm package to vagrantfile
* add npm_package "supervisor@0.5.7" into json so it restarts node server on file changes
* apt-get package json doesnt do the update on the new box
* folder share or copy files onto vm for speed



