# 🎮 GameVault

## 📝 Descripción del Proyecto
**GameVault** es una plataforma web de alto rendimiento diseñada para entusiastas del gaming, la cual permite explorar, descubrir y gestionar un catálogo masivo de videojuegos en tiempo real. 

El sistema actúa como una biblioteca digital interactiva donde los usuarios pueden analizar las especificaciones técnicas de sus títulos favoritos, filtrar por categorías y estructurar su propia bóveda personal de favoritos con persistencia local de datos.

### 🔌 Integración de API
La plataforma está integrada de forma nativa con el servicio de producción de RAWG Video Games Database API (https://rawg.io/apidocs). El consumo de datos se realiza de manera híbrida mediante patrones de *Server Components* para maximizar la velocidad de carga inicial y asegurar el SEO dinámico del catálogo.

---

## 👥 Equipo

**Grupo N°11**

| Integrante       |
|------------------|
| Mateo Johnston   |
| Federico Ramirez |
| Juan Laporte     |

---

---

## 🚀 Instrucciones para Ejecución Local

Seguí estos pasos secuenciales para clonar, configurar e iniciar el entorno de desarrollo local.

### 1. Prerrequisitos
Asegurate de tener instalados los siguientes entornos en tu máquina local:
* **Node.js** (Versión v18.x o superior recomendada)
* **npm** (Viene integrado con Node)

### 2. Clonar el Repositorio e Instalar Dependencias
Abrí tu terminal y ejecutá los comandos para descargar el proyecto e instalar los paquetes de Node:
```bash
git clone [https://github.com/tu-usuario/gamevault.git](https://github.com/tu-usuario/gamevault.git)
cd gamevault
npm install
```

### 3. Configuración de Variables de Entorno
El proyecto requiere una llave de acceso para comunicarse de forma segura con los servidores de RAWG.

1. Creá un archivo llamado `.env.local` en la raíz de la carpeta del proyecto.
2. Añadí tu API Key provista por la plataforma de RAWG:

```env
NEXT_PUBLIC_RAWG_API_KEY=tu_api_key_aqui
```

### 4. Levantar el Servidor de Desarrollo
Una vez configurado todo el entorno, ejecutá el compilador en tiempo real de Next.js en consola:
```bash
'npm run dev'
```
Abrí tu navegador web e ingresá a: http://localhost:3000


## 🛠️ Stack Tecnológico utilizado
* **Framework Principal:** Next.js 14+ (App Router) utilizando arquitectura híbrida (*Server Components* y *Client Components*).
* **Manejador de Estado Global:** React Context API para la persistencia transparente de favoritos.
* **Estilos y Layout:** Tailwind CSS para un diseño ultra-responsivo con modo oscuro nativo.