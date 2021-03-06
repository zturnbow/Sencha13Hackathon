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
        centered: false,
        fullscreen: false,
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
            androidAnimation: false,
            layout: {
                pack: 'center',
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'logout',
                    itemId: 'logout',
                    ui: 'decline',
                    iconAlign: 'center',
                    text: 'Logout'
                }
            ]
        },
        items: [
            {
                xtype: 'formpanel',
                title: 'Login',
                centered: false,
                hideAnimation: 'fadeOut',
                id: 'LoginView',
                itemId: 'loginView',
                showAnimation: 'fadeIn',
                style: '',
                scrollable: false,
                standardSubmit: true,
                items: [
                    {
                        xtype: 'container',
                        ui: '',
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
                                margin: '0 0 0 10%',
                                style: '',
                                ui: 'confirm',
                                width: '80%',
                                text: 'Login'
                            },
                            {
                                xtype: 'button',
                                id: 'registerNewUserButton',
                                itemId: 'register',
                                margin: '5 0 0 10%',
                                top: '',
                                ui: 'action',
                                width: '80%',
                                text: 'Register'
                            },
                            {
                                xtype: 'container',
                                style: 'text-align:center;',
                                styleHtmlContent: true,
                                items: [
                                    {
                                        xtype: 'image',
                                        centered: true,
                                        height: 45,
                                        id: 'loginAboutImage',
                                        itemId: 'loginAboutImage',
                                        width: 45,
                                        src: 'resources/images/icon_menu_info.png'
                                    },
                                    {
                                        xtype: 'label',
                                        html: 'About',
                                        margin: '50 0 0 0',
                                        style: 'text-align:center;',
                                        styleHtmlContent: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 0,
                        height: 38,
                        id: 'AddNewButton',
                        ui: 'action',
                        iconAlign: 'center',
                        iconCls: 'add',
                        text: 'Add'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();
        try{
            settings.getUsername();
        }catch(e){}

            if(settings.username && settings.username !== null && settings.username !== ""){
                //Ext.ComponentMgr.get("MainMenuView").pop();
                Ext.ComponentMgr.get("MainMenuView").push(Ext.create("app.view.ProjectPanel"));
                //alert(settings.getUsername());
            }
    }

});