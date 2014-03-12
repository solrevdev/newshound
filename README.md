newshound
=========

node.js application to display news from the bbc and sky. kicking the tyres of new tech.

Newly added a Vagrant VM provisioned with Chef Solo using new vagrant cloud



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

* use express web server to serve static resources (bootstrap images jquery etc)
* use [nedb](https://github.com/solrevdev/nedb) as an embedded database for storage
* tidy up UI by using bootstrap, angularJS and mustache etc etc
* tie into heroku toolkit so pushes to github deploy to heroku
* more besides...


