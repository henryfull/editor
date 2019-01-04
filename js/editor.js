window.addEventListener("load", sumarItemsMenu);
window.addEventListener("resize", sumarItemsMenu);
document.getElementsByTagName("aside")[0].addEventListener("click", muestraOculta);

document.getElementById("menu-items").addEventListener("click", actionButtons)

document.getElementById("editor-texto").designMode = "on";

function sumarItemsMenu(event) {
    var sampleImage = document.getElementById("ringoImage"),
    canvas = convertImageToCanvas(sampleImage);
    // Actions
    document.getElementById("canvasHolder").appendChild(canvas);
 //   document.getElementById("pngHolder").appendChild(convertCanvasToImage(canvas));



    var contador = 0;
    var itemMenu = document.getElementsByClassName("item-menu");
    var menuPrincipal = document.getElementById("menu-items");
    var submenu = document.getElementById("submenu-otros");
    var countMenu = document.getElementsByClassName("count-menu")[0];
    var anchoMenu = document.getElementById("menu-left").clientWidth;
    var widthLogo = document.getElementById("logotipo").clientWidth;
    var widthBody = document.getElementsByTagName("body")[0].clientWidth;
    var countItemsMenu = itemMenu.length;

    var maxWidthMenu = widthBody - widthLogo - submenu.clientWidth;
    var sumaTotal = 0;

    if (event.type == "load" || event.type == "resize") {
        for (let i = 0; i < itemMenu.length; i++) {
            //       console.log(menuPrincipal);
            sumaTotal += itemMenu[i].clientWidth;
            if (sumaTotal > maxWidthMenu) {
                console.log("arriba " + i);
                var contenido = itemMenu[i].textContent;
                itemMenu[i].parentNode.removeChild(itemMenu[i]);
                addColumna("submenu-otros", "item-submenu", contenido);
                contador = submenu.childNodes.length - 1;
                console.log(contador);
                if (contador > 0) {
                    countMenu.textContent = contador;
                    document.getElementsByClassName("submenu")[0].style.opacity = "1";
                }
                else {
                    document.getElementsByClassName("submenu")[0].style.opacity = "0";
                }


                i--;
            }
            else if (sumaTotal < maxWidthMenu) {
                if (submenu.childNodes.length > 1) {
                    console.log("abajo " + i);
                    var contenido = submenu.lastElementChild.textContent;
                    submenu.removeChild(submenu.lastElementChild);
                    addColumna("menu-items", "item-menu", contenido);
                    if (contador == 0) {
                        countMenu.textContent = contador;
                        document.getElementsByClassName("submenu")[0].style.opacity = "0"
                    }

                }
            }
        }

    }



}

// Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);
    canvas.fillStyle = "red";

    return canvas;
}

// Converts canvas to an image
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}



function addColumna(typeMenu, clase, contenido) {
    var submenu = document.getElementById(typeMenu);
    var creacionColumnas = document.createElement("li"); 		// Crea una columna 
    var contenidoHijo = document.createTextNode(contenido);
    creacionColumnas.classList.add(clase);		// Le añade contenido a la columna
    creacionColumnas.appendChild(contenidoHijo);				// Le introduce el contenido al Elemento columna
    return submenu.appendChild(creacionColumnas);	// Añade la columna a la fila		
}


function actionButtons(e) {

    // Style Text
    if (e.target.id == "btn-bold") {
        document.execCommand('bold', false, '');
    }
    else if (e.target.id == "btn-emphasis") {
        document.execCommand('italic', false, '');
    }
    else if (e.target.id == "btn-underline") {
        document.execCommand('underline', false, '');
    }
    else if (e.target.id == "btn-strikethrough") {
        document.execCommand("strikethrough", false, '');
    }

    else if (e.target.id == "btn-foreColor") {
        document.execCommand("foreColor", false, document.getElementById("btn-foreColor").value);
    }
    else if (e.target.id == "btn-uppercase") {
        document.execCommand("foreColor", false, document.getElementById("btn-foreColor").value);
    }

    // Font Size
    else if (e.target.id == "btn-fontSize1") {
        document.execCommand("fontSize: 48px");
    }
    else if (e.target.id == "btn-fontSize2") {
        document.execCommand("fontSize", false, "2");
    } 
    else if (e.target.id == "btn-fontSize3") {
        document.execCommand("fontSize", false, "3");
    }

    else if (e.target.id == "btn-fontSize4") {
        document.execCommand("fontSize", false, "4");
    }
    else if (e.target.id == "btn-fontSize5") {
        document.execCommand("fontSize", false, "5");
    } 
    else if (e.target.id == "btn-fontSize6") {
        document.execCommand("fontSize", false, "6");
    } 
    else if (e.target.id == "btn-fontSize7") {
        document.execCommand("fontSize", false, "7");
    }

       // Header Title Size
       else if (e.target.id == "btn-heading1") {
        document.execCommand("formatBlock", false, "H1");
    }
    else if (e.target.id == "btn-heading2") {
        document.execCommand("heading", false, "H2");
    } 
    else if (e.target.id == "btn-heading3") {
        document.execCommand("heading", false, "H3");
    }

    else if (e.target.id == "btn-heading4") {
        document.execCommand("heading", false, "H4");
    }
    else if (e.target.id == "btn-heading5") {
        document.execCommand("heading", false, "H5");
    } 
    else if (e.target.id == "btn-heading6") {
        document.execCommand("heading", false, "H6");
    } 
   


    // Align Text
    else if (e.target.id == "btn-justifyLeft") {
        document.execCommand('justifyLeft', false, '');
    }
    else if (e.target.id == "btn-justifyCenter") {
        document.execCommand('justifyCenter', false, '');
    }
    else if (e.target.id == "btn-justifyRight") {
        document.execCommand('justifyRight', false, '');
    }
    else if (e.target.id == "btn-justifyFull") {
        document.execCommand('justifyFull', false, '');
    }


    else if (e.target.id == "btn-outdent") {
        document.execCommand('outdent', false, '');
    }

    // Options of Copy Paste
    else if (e.target.id == "btn-copy") {
        document.execCommand('copy', false, '');
    }
    else if (e.target.id == "btn-cut") {
        document.execCommand('cut', false, '');
    }
    else if (e.target.id == "btn-paste") {
        document.execCommand('paste', false, '');
    }

    // Select all
    else if (e.target.id == "btn-selectAll") {
        document.execCommand('selectAll', false, '');
    }

}


function muestraOculta(e) {

    //    console.log(e.target.className);

    if (e.target.classList.contains("collapse")) {
        var tagBlock = e.target;
        tagBlock = tagBlock.parentNode.lastElementChild;
        if (tagBlock.style.display == "block") {
            tagBlock.style.display = "none";
            e.target.classList.remove("active");

        }
        else {
            tagBlock.style.display = "block";
            e.target.classList.add("active");
        }

    }







}


