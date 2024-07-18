const loginUrl = 'https://www.therapist.tube/login';
const logoutUrl = 'https://www.therapist.tube/logout';
const frontendUrl = 'https://video.therapist.tube/';
const backendUrl =  'https://api.therapist.tube/';

// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';
const wasabiUrl = 'https://freedom-social.s3.us-east-1.wasabisys.com/'


export const environment = {
  production: false,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.therapist.tube',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet.facetime.tube/',
  logoutUrl: logoutUrl
};

