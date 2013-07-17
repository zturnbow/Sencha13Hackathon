/*
 * File: app/model/meetings.js
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

Ext.define('MyApp.model.meetings', {
    extend: 'Ext.data.Model',

    uses: [
        'MyApp.model.meeting',
        'MyApp.model.users'
    ],

    config: {
        hasMany: [
            {
                model: 'MyApp.model.meeting',
                name: 'meetings'
            },
            {
                model: 'MyApp.model.users',
                name: 'users'
            }
        ]
    }
});