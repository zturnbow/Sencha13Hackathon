/*
 * File: app/controller/LogoutController.js
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

Ext.define('app.controller.LogoutController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'User'
        ],
        views: [
            'MainMenuView'
        ],

        control: {
            "#logout": {
                tap: 'onLogout'
            }
        }
    },

    onLogout: function(button, e, eOpts) {
        //var loginView = Ext.create("app.view.LoginView");
        settings.setUsername("");
        //Ext.Viewport.remove(Ext.ComponentMgr.get("mainMenuView"));
        //Ext.Viewport.add(loginView);
        //Ext.Viewport.setActiveItem(loginView);
        Ext.ComponentMgr.get("MainMenuView").reset();
    }

});