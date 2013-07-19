/*
 * File: app/view/ProjectAddPanel.js
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

Ext.define('app.view.ProjectAddPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.projectaddpanel',

    config: {
        id: 'ProjectAddPanel',
        layout: {
            type: 'vbox'
        },
        scrollable: 'vertical',
        items: [
            {
                xtype: 'fieldset',
                flex: 1,
                items: [
                    {
                        xtype: 'textfield',
                        docked: 'top',
                        id: 'projectName',
                        itemId: 'projectName',
                        label: 'Name'
                    },
                    {
                        xtype: 'textareafield',
                        docked: 'top',
                        id: 'projectDesc',
                        itemId: 'projectDesc',
                        label: 'Desc',
                        autoCapitalize: true
                    }
                ]
            },
            {
                xtype: 'fieldset',
                flex: 2,
                layout: {
                    type: 'fit'
                },
                title: 'Peeps',
                items: [
                    {
                        xtype: 'list',
                        id: 'PeepsList',
                        ui: 'round',
                        modal: true,
                        mode: 'MULTI',
                        itemTpl: [
                            '<div>{username}</div>'
                        ],
                        store: 'UserStore'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'submitButton',
                itemId: 'submit',
                margin: '10 0 0 0',
                ui: 'confirm',
                text: 'Submit'
            }
        ]
    }

});