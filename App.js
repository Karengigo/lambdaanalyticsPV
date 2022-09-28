const envio=()=>{
    geotab.addin.integrationExample = function(api, state) {
    const BotonEnvio=()=>{
    const div=document.getElementById("envio")
    div.innerHTML+=`<iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMmY3OTRlYzQtZDMwZC00MjI2LTlkOTYtZTlmOGNkZjk3MTkyIiwidCI6Ijg5ODA1OTQ2LTEzN2UtNDhjOS1hYzE1LWQ2NDM0YTE5ODkyNiJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>`;
    }
    const EliminacionBoton=()=>{
        const div=document.getElementById("envio")
        div.innerHTML=""
    }
    const refreshPage =()=> {
            api.call("Get", {
                typeName: "Device"
            }, function(result) {
                center.addEventListener("click", BotonEnvio, false);
               /*center.appendChild(listCreator(result));*/
            }, function(error) {
                console.log(error.message);
            });
        },
    
   return {
       initialize: (api, state, callback) =>{
            document.getElementById("vehiclesButton")
                .addEventListener("click", function() {
                    state.gotoPage("devices");
                }, false);
            callback();
        },
        focus: function(api, state) {
            refreshPage();
        },
        blur: function(api, state) {
            EliminacionBoton();
        }
   } 

}
}

envio()





