
function opcion() {
  let sel = document.getElementById("inicial").value;
  console.log(sel);
  switch (sel) {
    case '1':
      document.getElementById("formulario").innerHTML = `
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
      document.getElementById("formulario").innerHTML = `
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
              <select id="Status" class="form-select" aria-label="Default select example">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir" onClick="crear()">Enviar</button>
            `
    case '3':
      document.getElementById("formulario").innerHTML = `
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
              <select id="Status" class="form-select" aria-label="Default select example">
                <option selected>--Status--</option>
                <option value="1">Operaciones</option>
                <option value="2">Stock</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir" onClick="crear()">Enviar</button>
            `
      break;
    case '4':
      document.getElementById("formulario").innerHTML = `
            <div class="data">
            <div id="texto">
              <input type="text" id="cantidad" class="form-control my-3" placeholder="Cantidad">
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir" onClick="crear()">Enviar</button>
            `
      break;
    case '5':
      document.getElementById("formulario").innerHTML = `
            <div class="data">
            <div id="texto">
              <input type="text" id="cantidad" class="form-control my-3" placeholder="Cantidad">
            </div>
          </div>
          <button type="submit" class="btn btn-primary" id="anadir" onClick="crear()">Enviar</button>
            `
      break;
  }
}
function crear(e) {
  let selc = document.getElementById("inicial").value;
  switch (selc) {
    case '1':
      asset = document.getElementById("asset").value;
      serial = document.getElementById("serial").value;
      modelo = document.getElementById("modelo").value;
      marca = document.getElementById("marca").value;
      cpu = document.getElementById("cpu").value;
      org = document.getElementById("organizacion").value;
      let sel1 = document.getElementById("Tipo");
      let sel2 = document.getElementById("Status");
      let sel3 = document.getElementById("SO");
      let sel4 = document.getElementById("RAM");
      tipo = sel1.options[sel1.selectedIndex].text;
      estatus = sel2.options[sel2.selectedIndex].text;
      so = sel3.options[sel3.selectedIndex].text;
      ram = sel4.options[sel4.selectedIndex].text;

      let pc = {
        asset,
        serial,
        modelo,
        marca,
        cpu,
        org,
        tipo,
        estatus,
        so,
        ram
      }

      if (localStorage.getItem("PCs") === null) {
        let pcs = [];
        pcs.push(pc);
        localStorage.setItem("PCs", JSON.stringify(pcs));
      } else {
        let pcs = JSON.parse(localStorage.getItem("PCs"));
        pcs.push(pc);
        localStorage.setItem("PCs", JSON.stringify(pcs));
      }
      break;
    case '2':
      asset = document.getElementById("asset").value;
      serial = document.getElementById("serial").value;
      modelo = document.getElementById("modelo").value;
      marca = document.getElementById("marca").value;
      org = document.getElementById("organizacion").value;
      let sel5 = document.getElementById("Status");
      estatus = sel5.options[sel5.selectedIndex].text;
      alert(estatus);
      

      let monitor = {
        asset,
        serial,
        modelo,
        marca,
        org,
        estatus
      }

      if (localStorage.getItem("Monitors") === null) {
        let monitors = [];
        monitors.push(monitor);
        localStorage.setItem("Monitors", JSON.stringify(monitors));
      } else {
        let monitors = JSON.parse(localStorage.getItem("Monitors"));
        monitors.push(monitor);
        localStorage.setItem("Monitors", JSON.stringify(monitors));
      }
      break;
    case '3':
      alert("entraste al caso 3");
      break;
    case '4':
      alert("entraste al caso 4");
      break;
    case '5':
      alert("entraste al caso 5");
      break;
  }


}