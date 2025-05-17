
# Spotify API Consumer
A web app built in React.js with Vite that consumes the Spotify for developers API.


## Authors

- Juan David Correa Franco


## Installation 📦

Clone this repository.


```bash
  git clone https://github.com/jDaviDEV/spotify-project.git
```
    
## Deployment

Install this project with npm, execute the following command lines in the root directory.

```bash
  npm install
  npm run dev
```


## Technologies

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://es.react.dev/learn)
- [TailWind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [React Router Dom](https://reactrouter.com/home)
- [Spotify API](https://developer.spotify.com/documentation/web-api)
## Usage/Examples

If you need to change the local server address, you can do it by modifying the vite.config file.

```javascript
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim') //this line sets the server to localhost:5173 by default

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // change the ip adress, it can be ipv4 or ipv6
    port: '5173' // change the port number
  }
})
```
This is useful when working with the Spotify API due to security matters in the redirect URLs when setting the dashboard app in the https://developer.spotify.com/dashboard.



