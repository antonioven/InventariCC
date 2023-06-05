
function leer(){
    let sel = document.getElementById("inicial").value;
    console.log(sel);
    switch(sel){
        case '1':
            document.getElementById("formulario").innerHTML=`
            <div class="data">
            <div id="texto">
              <input type="text" id="asset" class="form-control my-3" placeholder="Asset">
              <input type="text" id="serial" class="form-control my-3" placeholder="Serial">
              <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo">
              <input type="text" id="marca" class="form-control my-3" placeholder="Marca">
              <input type="text" id="cpu" class="form-control my-3" placeholder="CPU">
              <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion">
            </div>
            <div id="seleccion" class="border border-2">
              <p class="opc">Tipo: </p>
              <select id="Tipo" class="form-select" aria-label="Default select example">
                <option selected>--Tipo--</option>
                <option value="1">Desktop</option>
                <option value="2">Laptop</option>
              </select>
              <p class="opc">Status: </p>
              <select id="Status" class="form-select" aria-label="Default select example">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
              <p class="opc">Sistema Operativo: </p>
              <select id="SO" class="form-select" aria-label="Default select example">
                <option selected>--Sistema Operativo--</option>
                <option value="1">Windows</option>
                <option value="2">MAC</option>
                <option value="3">Linux</option>
              </select>
              <p class="opc">RAM: </p>
              <select id="RAM" class="form-select" aria-label="Default select example">
                <option selected>--RAM--</option>
                <option value="1">4 GB</option>
                <option value="2">8 GB</option>
                <option value="3">12 GB</option>
                <option value="4">16 GB</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir" onClick="crear()">Enviar</button>
            `
            break;
        case '2':
            document.getElementById("formulario").innerHTML=`
            <div class="data">
            <div id="texto">
              <input type="text" id="asset" class="form-control my-3" placeholder="Asset">
              <input type="text" id="serial" class="form-control my-3" placeholder="Serial">
              <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo">
              <input type="text" id="marca" class="form-control my-3" placeholder="Marca">
              <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion">
            </div>
            <div id="seleccion" class="border border-2">
              <p class="opc">Status: </p>
              <select id="Status" class="form-select" aria-label="Default select example" onchange="leer()">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
        case '3':
            document.getElementById("formulario").innerHTML=`
            <div class="data">
            <div id="texto">
              <input type="text" id="asset" class="form-control my-3" placeholder="Asset">
              <input type="text" id="serial" class="form-control my-3" placeholder="Serial">
              <input type="text" id="modelo" class="form-control my-3" placeholder="Modelo">
              <input type="text" id="marca" class="form-control my-3" placeholder="Marca">
              <input type="text" id="organizacion" class="form-control my-3" placeholder="Organizacion">
            </div>
            <div id="seleccion" class="border border-2">
              <p class="opc">Status: </p>
              <select id="Status" class="form-select" aria-label="Default select example" onchange="leer()">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
            break;
        case '4':
            document.getElementById("formulario").innerHTML=`
            <div class="data">
            <div id="texto">
              <input type="text" id="cantidad" class="form-control my-3" placeholder="Cantidad">
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
            break;
        case '5':
            document.getElementById("formulario").innerHTML=`
            <div class="data">
            <div id="texto">
              <input type="text" id="cantidad" class="form-control my-3" placeholder="Cantidad">
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir">Enviar</button>
            `
            break;
    }
}
function crear(e){
    let Fasset = document.getElementById("asset").value;
    let Fserial = document.getElementById("serial").value;
    let Fmodelo = document.getElementById("smodelo").value;
    let Fmarca = document.getElementById("marca").value;
    let Fcpu = document.getElementById("cpu").value;
    let Forg = document.getElementById("organizacion").value;
    let sel1 = document.getElementById("Tipo");
    let sel2 = document.getElementById("Status");
    let sel3 = document.getElementById("SO");
    let sel4 = document.getElementById("RAM");
    var text = sel1.options[sel1.selectedIndex].text;
    var text1 = sel2.options[sel2.selectedIndex].text;
    var text2 = sel3.options[sel3.selectedIndex].text;
    var text3 = sel4.options[sel4.selectedIndex].text;

}