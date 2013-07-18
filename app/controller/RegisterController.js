/*
 * File: app/controller/RegisterController.js
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

Ext.define('app.controller.RegisterController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'User'
        ],
        views: [
            'RegisterView'
        ],

        control: {
            "#registerButton": {
                tap: 'onRegister'
            },
            "registerView #cancel": {
                tap: 'onCancel'
            }
        }
    },

    onRegister: function(button, e, eOpts) {
        var uname = Ext.ComponentMgr.get("usernameField").getValue();
        var pass1 = Ext.ComponentMgr.get("password1Field").getValue();
        var pass2 = Ext.ComponentMgr.get("password2Field").getValue();
        var email = Ext.ComponentMgr.get("emailField").getValue();

        if(pass1 == pass2){

            var submission = {
                username: uname,
                password: pass1,
                email: email
            };

            Ext.Ajax.request({
                url: "https://"+settings.server_host+"/api/users",
                method: "POST",
                params: submission,
                success: function(response){
                    console.log(response);
                    Ext.ComponentMgr.get("loginUsernameField").setValue(uname);
                    Ext.Msg.alert('Successfully registered!');
                    Ext.ComponentMgr.get("MainMenuView").pop();
                }
            });


        }else{
            Ext.Msg.alert('Validation Failure', 'Your Passwords Must Match');

        }

    },

    onCancel: function(button, e, eOpts) {
        var login = Ext.create("app.view.LoginView");
        Ext.Viewport.remove(Ext.ComponentMgr.get("registerView"));
        Ext.Viewport.add(login);
        Ext.Viewport.setActiveItem(login);
    }

});