const servers = {
  dev: {
    name: 'Dev',
    url: 'https://project-back-dev.appelloproject.xyz/',
  },
  stage: {
    name: 'Stage',
    url: 'https://project-back-stage.appelloproject.xyz/',
  },
  prod: {
    name: 'Prod',
    url: 'https://project-back-prod.appelloproject.xyz/',
  },
};

const server = servers.dev;

const SERVER_NAME = server.name;
const API_URL = server.url;

export { API_URL, SERVER_NAME };
