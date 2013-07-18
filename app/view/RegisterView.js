/*
 * File: app/view/RegisterView.js
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

Ext.define('app.view.RegisterView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.registerView',

    config: {
        hidden: false,
        id: 'registerView',
        itemId: 'registerView',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Register',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'usernameField',
                                placeHolder: 'Username'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'password1Field',
                                placeHolder: 'Password'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'password2Field',
                                placeHolder: 'Confirm Password'
                            },
                            {
                                xtype: 'emailfield',
                                id: 'emailField',
                                placeHolder: 'email@example.com'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'registerButton',
                        itemId: 'register',
                        margin: '10%',
                        ui: 'confirm',
                        width: '80%',
                        text: 'register'
                    },
                    {
                        xtype: 'button',
                        itemId: 'cancel',
                        margin: '10%',
                        ui: 'decline',
                        width: '80%',
                        text: 'cancel'
                    }
                ]
            }
        ]
    }

});