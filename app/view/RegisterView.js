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

    config: {
        id: 'registerView',
        itemId: 'registerView',
        items: [
            {
                xtype: 'fieldset',
                title: 'Register',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Username'
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password'
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Confirm Password'
                    },
                    {
                        xtype: 'emailfield',
                        placeHolder: 'email@example.com'
                    }
                ]
            },
            {
                xtype: 'button',
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

});