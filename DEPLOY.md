# Cómo publicar Outlier Software en GitHub Pages

Este instructivo explica paso a paso cómo subir el proyecto a GitHub y publicarlo en GitHub Pages como página de proyecto (`tu-usuario.github.io/outliersoftware`).

## Requisitos

- Cuenta en [GitHub](https://github.com)
- Git instalado en tu máquina
- Node.js y npm instalados

---

## 1. Crear el repositorio en GitHub

1. Entra en [GitHub](https://github.com) e inicia sesión.
2. Haz clic en **New** (o **+** → **New repository**).
3. Configura el repo:
   - **Repository name:** `outliersoftware` (o el nombre que quieras; si cambias el nombre, debes actualizar `base` en `vite.config.js` y el `basename` en `main.jsx`).
   - **Visibility:** Public (o Private si tienes GitHub Pro).
   - No marques "Add a README" si ya tienes el proyecto en tu PC.
4. Clic en **Create repository**.

---

## 2. Subir el código al repositorio

En la carpeta del proyecto (donde está `package.json`):

```bash
# Inicializar Git si aún no lo has hecho
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: Outlier Software landing"

# Añadir el remoto (sustituye TU_USUARIO por tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/outliersoftware.git

# Subir a la rama main
git branch -M main
git push -u origin main
```

Si el repo ya existía con archivos (por ejemplo README), puede que tengas que hacer antes `git pull origin main --rebase` y luego `git push`.

---

## 3. Configurar `base` si el nombre del repo no es `outliersoftware`

Si tu repositorio tiene otro nombre (por ejemplo `mi-landing`), la URL será `tu-usuario.github.io/mi-landing`. Debes usar ese path en dos sitios:

1. **`vite.config.js`** — cambia `base`:
   ```js
   base: '/mi-landing/',   // mismo nombre que el repo
   ```

2. **`src/main.jsx`** — cambia `basename` en `BrowserRouter`:
   ```js
   <BrowserRouter basename="/mi-landing">
   ```

Luego vuelve a ejecutar `npm run build` antes de desplegar.

---

## 4. Desplegar en GitHub Pages

Tienes dos opciones: **manual con `gh-pages`** o **automático con GitHub Actions**.

### Opción A: Despliegue manual con `gh-pages`

1. Instala dependencias y genera el build:
   ```bash
   npm install
   npm run build
   ```

2. Publica la carpeta `dist` en la rama `gh-pages`:
   ```bash
   npx gh-pages -d dist
   ```
   (O usa el script: `npm run deploy`.)

3. La primera vez que ejecutes `gh-pages`, se creará la rama `gh-pages` en tu repo y se subirá el contenido de `dist`.

### Opción B: Despliegue automático con GitHub Actions (recomendado)

Cada vez que hagas push a `main`, GitHub construirá el proyecto y publicará el resultado en `gh-pages`.

1. Crea la carpeta y el archivo del workflow:
   - Carpeta: `.github/workflows`
   - Archivo: `.github/workflows/deploy.yml`

2. Contenido de `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. En GitHub: **Settings** del repositorio → **Pages** → **Build and deployment**:
   - **Source:** GitHub Actions.
   - No uses "Deploy from a branch" si eliges esta opción.

4. Haz push del workflow a `main`:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions deploy"
   git push
   ```

5. En la pestaña **Actions** verás el workflow; cuando termine, el sitio estará publicado.

---

## 5. Activar GitHub Pages en la configuración del repo

- Si usaste **Opción A** (rama `gh-pages`):
  1. Ve a **Settings** → **Pages**.
  2. En **Build and deployment**, **Source** elige **Deploy from a branch**.
  3. **Branch:** `gh-pages`, carpeta **/ (root)**.
  4. Guarda.

- Si usaste **Opción B** (GitHub Actions):
  1. **Settings** → **Pages**.
  2. **Source:** **GitHub Actions** (como en el paso 4.B anterior).

---

## 6. Ver el sitio

La URL será:

- **`https://TU_USUARIO.github.io/outliersoftware/`**

(Reemplaza `TU_USUARIO` por tu usuario de GitHub y `outliersoftware` por el nombre del repo si es distinto.)

Puede tardar 1–2 minutos en verse la primera vez. Si ves 404, espera un poco y recarga; asegúrate de que la URL termina en `/`.

---

## Troubleshooting: página en blanco o 404

Si al abrir `https://tu-usuario.github.io/outliersoftware/` ves página en blanco o error 404:

1. **Comprueba el origen de GitHub Pages**
   - Repo → **Settings** → **Pages**.
   - En **Build and deployment**, **Source** debe ser **GitHub Actions**, no "Deploy from a branch".
   - Si estaba en "Deploy from a branch", cámbialo a **GitHub Actions** y guarda.

2. **Comprueba que el workflow se ejecutó**
   - Repo → pestaña **Actions**. Debe haber una ejecución de "Deploy to GitHub Pages" en verde (éxito).
   - Si falló, abre la ejecución y revisa el error. Si no hay ejecuciones, haz un push a `main` para disparar el workflow.

3. **Nombre del repositorio**
   - La URL es `https://<usuario>.github.io/<nombre-repo>/`. Si el repo se llama `outlierapps`, la URL será `.../outlierapps/`. Entonces en `vite.config.js` y en `src/main.jsx` el `base` / `basename` debe ser `'/outlierapps/'` y `"/outlierapps"` (mismo nombre que el repo).

4. **Caché del navegador**
   - Prueba en ventana privada o borra caché; a veces se sirve una versión antigua.

---

## Resumen de comandos (despliegue manual)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU_USUARIO/outliersoftware.git
git branch -M main
git push -u origin main
npm install
npm run build
npx gh-pages -d dist
```

Luego en GitHub: **Settings** → **Pages** → Source: rama **gh-pages**, carpeta **/ (root)**.
