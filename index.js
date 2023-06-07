
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
      asset = document.getElementById("asset").value;
      serial = document.getElementById("serial").value;
      modelo = document.getElementById("modelo").value;
      marca = document.getElementById("marca").value;
      org = document.getElementById("organizacion").value;
      let sel6 = document.getElementById("Status");
      estatus = sel6.options[sel6.selectedIndex].text;

      let headset = {
        asset,
        serial,
        modelo,
        marca,
        org,
        estatus
      }

      if (localStorage.getItem("Headsets") === null) {
        let headsets = [];
        headsets.push(headset);
        localStorage.setItem("Headsets", JSON.stringify(headsets));
      } else {
        let headsets = JSON.parse(localStorage.getItem("Headsets"));
        headsets.push(headset);
        localStorage.setItem("Headsets", JSON.stringify(headsets));
      }
      break;
    case '4':
      cantidad = document.getElementById("cantidad").value;

      let mouse = {
        cantidad
      }
      if (localStorage.getItem("Mouses") === null) {
        let mouses = [];
        mouses.push(mouse);
        localStorage.setItem("Mouses", JSON.stringify(mouses));
      } else {
        let mouses = JSON.parse(localStorage.getItem("Mouses"));
        mouses.push(mouse);
        localStorage.setItem("Mouses", JSON.stringify(mouses));
      }
      break;
    case '5':
      cantidad = document.getElementById("cantidad").value;

      let teclado = {
        cantidad
      }
      if (localStorage.getItem("Teclados") === null) {
        let teclados = [];
        teclados.push(teclado);
        localStorage.setItem("Teclados", JSON.stringify(teclados));
      } else {
        let teclados = JSON.parse(localStorage.getItem("Teclados"));
        teclados.push(teclado);
        localStorage.setItem("Teclados", JSON.stringify(teclados));
      }
      break;
  }


}
function leer() {
  let sele = document.getElementById("inv").value;
  switch (sele) {
    case '1':
      let pcs = JSON.parse(localStorage.getItem("PCs"));
      document.getElementById("tbody").innerHTML = "";
      for (let i = 0; i < pcs.length; i++) {
        let asset = pcs[i].asset;
        let serial = pcs[i].serial;
        let modelo = pcs[i].modelo;
        let marca = pcs[i].marca;
        let cpu = pcs[i].cpu;
        let org = pcs[i].org;
        let tipo = pcs[i].tipo;
        let estatus = pcs[i].estatus;
        let so = pcs[i].so;
        let ram = pcs[i].ram;

        document.getElementById("tbody").innerHTML +=
          `<tr>
            <td>${asset}</td>
            <td>${serial}</td>
            <td>${modelo}</td>
            <td>${marca}</td>
            <td>${cpu}</td>
            <td>${org}</td>
            <td>${tipo}</td>
            <td>${estatus}</td>
            <td>${so}</td>
            <td>${ram}</td>
            <td><button onClick="eliminar('${asset})" class="btn btn-danger">Eliminar</button></td>
            <td><button onClick="editar('${asset})" class="btn btn-success">Editar</button></td>
        </tr>
        `
      }
      break;
    case '2':
      let monitors = JSON.parse(localStorage.getItem("Monitors"));
      document.getElementById("datos").innerHTML = "";
      for (let i = 0; i < monitors.length; i++) {
        let asset = monitors[i].asset;
        let serial = monitors[i].serial;
        let modelo = monitors[i].modelo;
        let marca = monitors[i].marca;
        let org = monitors[i].org;
        let estatus = monitors[i].estatus;

        document.getElementById("datos").innerHTML +=
          `<thead>
            <tr>
              <th scope="col">Asset</th>
              <th scope="col">Serial</th>
              <th scope="col">Modelo</th>
              <th scope="col">Marca</th>
              <th scope="col">Organizacion</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${asset}</td>
              <td>${serial}</td>
              <td>${modelo}</td>
              <td>${marca}</td>
              <td>${org}</td>
              <td>${estatus}</td>
              <td><button onClick="eliminar('${asset})" class="btn btn-danger">Eliminar</button></td>
              <td><button onClick="editar('${asset})" class="btn btn-success">Editar</button></td>
            </tr>
          </tbody>
        `
      }
      break;
    case '3':
      let headsets = JSON.parse(localStorage.getItem("Headsets"));
      document.getElementById("datos").innerHTML = "";
      for (let i = 0; i < headsets.length; i++) {
        let asset = headsets[i].asset;
        let serial = headsets[i].serial;
        let modelo = headsets[i].modelo;
        let marca = headsets[i].marca;
        let org = headsets[i].org;
        let estatus = headsets[i].estatus;

        document.getElementById("datos").innerHTML +=
          `<thead>
            <tr>
              <th scope="col">Asset</th>
              <th scope="col">Serial</th>
              <th scope="col">Modelo</th>
              <th scope="col">Marca</th>
              <th scope="col">Organizacion</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${asset}</td>
              <td>${serial}</td>
              <td>${modelo}</td>
              <td>${marca}</td>
              <td>${org}</td>
              <td>${estatus}</td>
              <td><button onClick="eliminar('${asset})" class="btn btn-danger">Eliminar</button></td>
              <td><button onClick="editar('${asset})" class="btn btn-success">Editar</button></td>
            </tr>
          </tbody>
        `
      }
      break;
    case '4':
      let mouses = JSON.parse(localStorage.getItem("Mouses"));
      document.getElementById("datos").innerHTML = "";
      for (let i = 0; i < mouses.length; i++) {
        let cantidad = mouses[i].cantidad;

        document.getElementById("datos").innerHTML +=
          `<thead>
            <tr>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${cantidad}</td>
              <td><button onClick="eliminar('${asset})" class="btn btn-danger">Eliminar</button></td>
              <td><button onClick="editar('${asset})" class="btn btn-success">Editar</button></td>
            </tr>
          </tbody>
        `
      }
      break;
    case '5':
      let teclados = JSON.parse(localStorage.getItem("Teclados"));
      document.getElementById("datos").innerHTML = "";
      for (let i = 0; i < teclados.length; i++) {
        let cantidad = teclados[i].cantidad;

        document.getElementById("datos").innerHTML +=
          `<thead>
            <tr>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${cantidad}</td>
              <td><button onClick="eliminar('${asset})" class="btn btn-danger">Eliminar</button></td>
              <td><button onClick="editar('${asset})" class="btn btn-success">Editar</button></td>
            </tr>
          </tbody>
        `
      }
      break;
  }
}