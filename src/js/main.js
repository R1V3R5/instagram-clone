import angular from 'angular';
import 'angular-ui-router';
import { config } from './config';
import { serverConstant } from './server.constant';
import { AddController } from './controllers/add.controller';
import { HomeController } from './controllers/home.controller';


angular
  .module('app', ['ui.router'])
  .constant('SERVER', serverConstant)
  .config(config)
  .controller('AddController', AddController)
  .controller('HomeController', HomeController)
;