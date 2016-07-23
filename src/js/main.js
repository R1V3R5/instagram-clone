import angular from 'angular';
import 'angular-ui-router';
import { config } from './config';
import { serverConstant } from './server.constant';
import { AddController } from './controllers/add.controller';
import { HomeController } from './controllers/home.controller';
import { DetailController } from './controllers/detail.controller';
import { EditController } from './controllers/edit.controller';


angular
  .module('app', ['ui.router'])
  .constant('SERVER', serverConstant)
  .config(config)
  .controller('AddController', AddController)
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)
  .controller('EditController', EditController)
;