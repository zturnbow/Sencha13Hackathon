/*
 * File: app/view/MainMenuView.js
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

Ext.define('app.view.MainMenuView', {
    extend: 'Ext.navigation.View',

    config: {
        hideAnimation: 'fadeOut',
        id: 'MainMenuView',
        showAnimation: 'fadeIn',
        layout: {
            animation: {
                type: 'slide',
                duration: 200
            },
            type: 'card'
        },
        navigationBar: {
            docked: 'top',
            androidAnimation: false
        },
        items: [
            {
                xtype: 'formpanel',
                title: 'Login',
                fullscreen: true,
                hideAnimation: 'fadeOut',
                id: 'LoginView',
                itemId: 'loginView',
                showAnimation: 'fadeIn',
                style: '',
                ui: 'dark',
                layout: {
                    type: 'fit'
                },
                standardSubmit: true,
                items: [
                    {
                        xtype: 'container',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'fieldset',
                                centered: false,
                                docked: 'top',
                                showAnimation: 'fadeIn',
                                ui: 'dark',
                                layout: {
                                    type: 'fit'
                                },
                                items: [
                                    {
                                        xtype: 'textfield',
                                        centered: false,
                                        docked: 'top',
                                        id: 'loginUsernameField',
                                        showAnimation: 'fadeIn',
                                        labelAlign: 'bottom',
                                        labelWidth: '100%',
                                        required: true,
                                        placeHolder: 'Username'
                                    },
                                    {
                                        xtype: 'passwordfield',
                                        centered: false,
                                        docked: 'top',
                                        id: 'password',
                                        labelAlign: 'bottom',
                                        required: true,
                                        placeHolder: 'Password'
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                centered: false,
                                height: 32,
                                id: 'loginButton',
                                itemId: 'submit',
                                margin: '10%',
                                style: '',
                                ui: 'confirm',
                                width: '80%',
                                text: 'Login'
                            },
                            {
                                xtype: 'button',
                                id: 'registerNewUserButton',
                                itemId: 'register',
                                margin: '10%',
                                top: '',
                                ui: 'action',
                                width: '80%',
                                text: 'Register'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});