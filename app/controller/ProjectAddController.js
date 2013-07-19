/*
 * File: app/controller/ProjectAddController.js
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

Ext.define('app.controller.ProjectAddController', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Project'
        ],
        views: [
            'ProjectAddPanel'
        ],

        control: {
            "#submitButton": {
                tap: 'onButtonTap'
            }
        }
    },

    onButtonTap: function(button, e, eOpts) {
        var name = Ext.ComponentMgr.get("projectName").getValue();
        var desc = Ext.ComponentMgr.get("projectDesc").getValue();

        if(!name || name === ""){
            Ext.Msg.alert('A name is required');
            return;
        }

        if(!desc || desc === ""){
            Ext.Msg.alert('A description is required');
            return;
        }

        var submission = {
            name: name,
            description: desc
        };

        Ext.Ajax.request({
            url: "https://"+settings.server_host+"/api/projects",
            method: "POST",
            params: submission,
            success: function(response){
                console.log(response);
                Ext.ComponentMgr.get("MainMenuView").pop();
            }
        });


    }

});