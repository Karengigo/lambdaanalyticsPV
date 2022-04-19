const envio=()=>{
    geotab.addin.integrationExample = function(api, state) {
    const BotonEnvio=()=>{
    const div=document.getElementById("envio")
    div.innerHTML+=`<iframe width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZmU5NmMwM2EtYTQ2MS00MTVjLWE1YmItZWY1OGQzM2ZiOTFiIiwidCI6IjFlNDFhMGVmLTQ4MDctNGVlNS1hZjk0LTYwZjJkMDNjMzRlYSIsImMiOjR9&pageName=ReportSectionf46a0a018606010b0595" frameborder="0" allowFullScreen="true"></iframe>`;
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





