npm install express  , for node js
Add  "type": "module", into package.json
Run node backend/server.js

JSON Viewer > https://chrome.google.com/webstore/detail/json-viewer/aimiinbnnkboelefkjlenlgimcabobli

For automatically update server (after change server.js) install npm install --save-dev nodemon
Add  "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"  to package.JSON
Run npm start
For STOP server express    taskkill -F -IM node.exe

Install axios    npm install axios (Axios это один из самых популярных HTTP клиентов для браузеров и node. js, основанный на промисах. В Axios есть поддержка запросов, получение ответов от сервера, их трансформация и автоматическая конвертация в JSON)

No CORS https://github.com/vercel/next.js/issues/8544

JSON SERVER https://github.com/typicode/json-server
https://www.npoint.io/docs/30a0855e2a6690bf3f20