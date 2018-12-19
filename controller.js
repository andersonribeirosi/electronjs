$(document).ready(function(){

    const app = require('electron').remote.app;
    const {remote} = require('electron');

    $('#mini').click(function(){
        console.log('minimizar');
        remote.BrowserWindow.getFocusedWindow().minimize();
    });

    $('#max').click(function(){
        console.log('maximizar');
        if(remote.BrowserWindow.getFocusedWindow().isMaximized()){
            remote.BrowserWindow.getFocusedWindow().restore();
        } else{
            remote.BrowserWindow.getFocusedWindow().maximize();
        }
    });

    $('#fechar').click(function(){
        console.log('fechar');
        remote.BrowserWindow.getFocusedWindow().close();
    });

});