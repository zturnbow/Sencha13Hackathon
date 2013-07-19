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
            'User'
        ],

        control: {
            "#loginButton": {
                tap: 'onLogin'
            },
            "#registerNewUserButton": {
                tap: 'onRegister'
            },
            "#LoginView": {
                activate: 'onFormpanelActivate'
            }
        }
    },

    onLogin: function(button, e, eOpts) {
        var uname = Ext.ComponentMgr.get("loginUsernameField").getValue();
        var pass = Ext.ComponentMgr.get("password").getValue();
        Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Logging in...' });
        Ext.Ajax.request({
            url: settings.server_prefix+settings.server_host+"/api/login",
            method: "POST",
            params: { username: uname, password: pass },
            success: function(response) {
                var msg = Ext.JSON.decode(response.responseText);
                if(msg.authenticated == true){
                    //console.log("YEEEAAHHH!");
                    settings.setUsername(uname);
                    var listView = Ext.create("app.view.ProjectPanel");
                    listView.config.title = "Project List";

                    var button = Ext.ComponentManager.get("AddNewButton");
                    if(button){
                        button.setVisibility(true);
                        button.setText("Project");
                    }


                    Ext.Viewport.setMasked(false);
                    Ext.ComponentMgr.get("MainMenuView").push(listView);
                }else{
                    Ext.Viewport.setMasked(false);
                    Ext.Msg.alert('Login Failure', 'Username or Password Not Found');
                }
            }
        });


    },

    onRegister: function(button, e, eOpts) {
        console.log("register view!!!");
        var register;
        register = Ext.ComponentMgr.get("registerView");
        if(!register)
        register = Ext.create("app.view.RegisterView");
        register.config.title="Register New User";
        Ext.ComponentMgr.get("MainMenuView").push(register);
    },

    onFormpanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var button = Ext.ComponentManager.get("AddNewButton");
        if(button){
            button.setVisibility(false);
        }
    }

});