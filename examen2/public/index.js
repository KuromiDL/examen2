let table = document.getElementById('contenidoTablaTareas');


    async function getTareas() {
        var response = await fetch('/listarTareas/recibir');
        var data = await response.json();
        return data;
    }
    
    async function deleteTareas() {
    
      let id = localStorage.getItem('id');
      var enlace = ('/eliminarTareas/borrar/' + id);
      const res = await fetch(enlace, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json"
          }
      });
      var data = await res.json();
      return data;
    
    }
    
    document.addEventListener("DOMContentLoaded", async function renderTareas() {
    
        let tareas = await getTareas();
        console.log(tareas);
      
        for (let i = 0; i < tareas.length; i++) {
      
      
          let tr = document.createElement("tr");
          

          let td_nombre = document.createElement("td");
          let texto_nombre= document.createTextNode
            (tareas[i].nombre);
            
          td_nombreTarea.appendChild(texto_nombre);
          tr.appendChild(td_nombre);
          table.appendChild(tr);
        
        
          let td_fechaTarea = document.createElement("td");
          let texto_fechaTarea= document.createTextNode
            (tareas[i].fechaTarea);
          td_fechaTarea.appendChild(texto_fechaTarea);
          tr.appendChild(td_fechaTarea);
          table.appendChild(tr);

          let td_descripcion = document.createElement("td");
          let texto_descripcion = document.createTextNode
            (tareas[i].descripcion);
          td_descripcion.appendChild(texto_descripcion);
          tr.appendChild(td_descripcion);
          table.appendChild(tr);


          let td_prioridad = document.createElement("td");
          let texto_prioridad = document.createTextNode
            (tareas[i].prioridad);
          td_prioridad.appendChild(texto_prioridad);
          tr.appendChild(td_prioridad);
          table.appendChild(tr);

          let td_encargado = document.createElement("td");
          let texto_encargado = document.createTextNode
            (tareas[i].prioridad);
          td_encargado.appendChild(texto_encargado);
          tr.appendChild(td_encargado);
          table.appendChild(tr);



          let td_modificar = document.createElement("td");
          let anchor_modificar = document.createElement("a");
          anchor_modificar.classList.add("iconoEditarBorrar");
        
          let image_modificar = document.createElement("img");
          image_modificar.setAttribute("src", "img/edit.png");
          anchor_modificar.appendChild(image_modificar);
        
          anchor_modificar.addEventListener('click', () => {
            localStorage.setItem('id', listarTareas[i]._id);

          });
        
          td_modificar.appendChild(anchor_modificar);
          tr.appendChild(td_modificar);
          table.appendChild(tr);
        
   
        
          let td_eliminar = document.createElement("td");
          let anchor_eliminar = document.createElement("a");
          anchor_eliminar.classList.add("iconoEditarBorrar");
        
          let image_eliminar = document.createElement("img");
          image_eliminar.setAttribute("src", "img/delete.png");
          anchor_eliminar.appendChild(image_eliminar);
        
          anchor_eliminar.addEventListener('click', () => {
            localStorage.setItem('id', listarTareas[i]._id);
            borrarlistarTareas();
          });
        
          td_eliminar.appendChild(anchor_eliminar);
          tr.appendChild(td_eliminar);
          table.appendChild(tr);
        }
      
      });
      
    
    
    
        function buscar() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("inputBuscar");
            filter = input.value.toUpperCase();
            table = document.getElementById("contenidoTablaTareas");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }
            }
          }
    
          async function borrarlistarTareas() {
            var response = await deleteListarTareas()
            console.log(response);
            window.location.reload(true);
            }