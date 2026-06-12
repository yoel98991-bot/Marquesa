document.addEventListener("DOMContentLoaded", () => {
  // 1. Crear el contenedor principal de la pantalla de carga
  const splashContainer = document.createElement("div");
  splashContainer.id = "custom-splash-screen";

  // Estilos del contenedor: Fondo marrón, ocupa toda la pantalla y se pone por encima de todo
  splashContainer.style.position = "fixed";
  splashContainer.style.top = "0";
  splashContainer.style.left = "0";
  splashContainer.style.width = "100vw";
  splashContainer.style.height = "100vh";
  splashContainer.style.backgroundColor = "#5D4037"; // Color marrón elegante
  splashContainer.style.display = "flex";
  splashContainer.style.flexDirection = "column";
  splashContainer.style.justifyContent = "center";
  splashContainer.style.alignItems = "center";
  splashContainer.style.zIndex = "999999"; // Asegura que tape todo tu index
  splashContainer.style.transition = "opacity 0.5s ease-out"; // Para desvanecerse suavemente al final

  // 2. Inyectar las animaciones CSS
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes slideUp {
      0% { transform: translateY(80px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes pulseText {
      0% { opacity: 0.5; }
      50% { opacity: 1; }
      100% { opacity: 0.5; }
    }
  `;
  document.head.appendChild(style);

  // 3. Crear la imagen del logo
  const logo = document.createElement("img");
  // Usamos el enlace de tu logo
  logo.src = "https://i.ibb.co/d44g4TYY/file-00000000e344720c86944cf6036a31aa.png";
  logo.style.width = "180px";
  // Aplicamos la animación de abajo hacia arriba
  logo.style.animation = "slideUp 1.2s ease-out forwards";

  // 4. Crear el texto indicador de carga
  const loadingText = document.createElement("p");
  loadingText.innerText = "Cargando panel...";
  loadingText.style.color = "#FFFFFF";
  loadingText.style.fontFamily = "sans-serif";
  loadingText.style.marginTop = "30px";
  loadingText.style.fontSize = "16px";
  loadingText.style.letterSpacing = "1px";
  // Aplicamos una animación de pulso elegante
  loadingText.style.animation = "pulseText 1.5s infinite";

  // 5. Ensamblar todo y agregarlo al cuerpo del documento
  splashContainer.appendChild(logo);
  splashContainer.appendChild(loadingText);
  document.body.appendChild(splashContainer);

  // 6. Configurar el temporizador de 5 segundos (5000 milisegundos)
  setTimeout(() => {
    // Primero hacemos que se desvanezca
    splashContainer.style.opacity = "0";
    
    // Esperamos medio segundo a que termine el desvanecimiento y lo borramos del código
    setTimeout(() => {
      splashContainer.remove();
    }, 500); 
  }, 5000);
});
