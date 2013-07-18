/*
 * File: app/controller/LoginController.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.controller.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'user'
        ],
        views: [
            'LoginView'
        ],

        control: {
            "loginView #submit": {
                tap: 'onLogin'
            },
            "loginView #register": {
                tap: 'onRegister'
            }
        }
    },

    onLogin: function(button, e, eOpts) {
        var uname = Ext.ComponentMgr.get("username").getValue();
        var pass = Ext.ComponentMgr.get("password").getValue();

        /*Ext.Ajax.request({

        });*/

        var mainMenu = Ext.create("app.view.MainMenuView");
        Ext.Viewport.remove(Ext.ComponentMgr.get("loginView"));
        Ext.Viewport.add(mainMenu);
        Ext.Viewport.setActiveItem(mainMenu);
    },

    onRegister: function(button, e, eOpts) {
        var register = Ext.create("app.view.RegisterView");
        Ext.Viewport.remove(Ext.ComponentMgr.get("loginView"));
        Ext.Viewport.add(register);
        Ext.Viewport.setActiveItem(register);
    }

});