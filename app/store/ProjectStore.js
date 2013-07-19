/*
 * File: app/store/ProjectStore.js
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

Ext.define('app.store.ProjectStore', {
    extend: 'Ext.data.Store',

    requires: [
        'app.model.Project'
    ],

    config: {
        autoLoad: true,
        model: 'app.model.Project',
        storeId: 'projectStore',
        proxy: {
            type: 'ajax',
            url: 'https://whiteboard-latchd.rhcloud.com/api/projects',
            reader: {
                type: 'json'
            }
        }
    }
});