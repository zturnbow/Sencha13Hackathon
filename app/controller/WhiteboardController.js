/*
 * File: app/controller/WhiteboardController.js
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

Ext.define('app.controller.WhiteboardController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#whiteboardAddPhoto": {
                tap: 'onAddPhoto'
            },
            "#WhiteboardPanel": {
                activate: 'onWhiteboardPanelActivate'
            }
        }
    },

    onAddPhoto: function(button, e, eOpts) {
        Ext.device.Camera.capture({
            source: 'camera',
            destination: 'file',

            success: function(url) {
                this.fireEvent('change', this, url);
            },
            failure: function() {
                Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
            },
            scope: this
        });
    },

    onWhiteboardPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var button = Ext.ComponentManager.get("AddNewButton");
        if(button){
            button.setVisibility(true);
            button.setText("Whiteboard");
        }
    }

});