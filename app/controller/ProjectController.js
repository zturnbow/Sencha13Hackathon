/*
 * File: app/controller/ProjectController.js
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

Ext.define('app.controller.ProjectController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#ProjectListView": {
                itemtap: 'onListItemTap'
            },
            "#AddNewButton": {
                tap: 'onButtonTap'
            },
            "#ProjectPanel": {
                activate: 'onProjectPanelActivate'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        Ext.Viewport.setMasked({ xtype: 'loadmask', message: 'Loading Whiteboards...' });

        var newView = Ext.create("app.view.WhiteboardPanel");

        var store = Ext.StoreManager.get("WhiteboardStore");

        if(store){
            var url = encodeURI("https://"+settings.server_host+"/api/whiteboards/"+record.data.name);
            store.config.proxy.url = url;
            console.log("loading "+url);

            store.setProxy({
                type: 'ajax',
                url: url,
                reader: {
                    type: 'json'
                }
            });


            store.load({
                callback: function(records,operation,success){
                    Ext.ComponentMgr.get("WhiteboardList").refresh();
                    Ext.ComponentMgr.get("MainMenuView").push(newView);
                    Ext.Viewport.setMasked(false);
                }
            });

        }


    },

    onButtonTap: function(button, e, eOpts) {
        var view = Ext.ComponentManager.get("MainMenuView");
        var newProject = Ext.create("app.view.ProjectAddPanel");
        var newWhite = Ext.create("app.view.WhiteboardAddPanel");
        var reg = Ext.create("app.view.RegisterView");

        var id = view.getActiveItem().id;

        switch(id){
            case "ProjectPanel":
            view.push(newProject);
            break;
            case "WhiteboardPanel":
            view.push(newWhite);
            break;
            case "Login View":
            //view.push(reg);
            break;
            default:
            break;
        }
    },

    onProjectPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var button = Ext.ComponentManager.get("AddNewButton");
        if(button){
            button.setVisibility(true);
            button.setText("Project");
        }

    }

});