// == Import npm
import React from 'react';
import { Icon } from 'semantic-ui-react';
import LogInModal from './LogInModal';

// == Import
import './styles.scss';

// == Composant
const Header = () => {
  let displayModal = false;
  const showModal = () => {
    displayModal = true;
    console.log('click');
    console.log(displayModal);
  };
  return (
    <div className="header">
      <div className="header__content">
        <svg className="header__logo" viewBox="0 0 106 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.1914C8.78906 16.5664 8.54297 17.0234 8.26172 17.5625C8.00391 18.0781 7.72266 18.6406 7.41797 19.25C7.11328 19.8359 6.77344 20.4336 6.39844 21.043C6.04688 21.6289 5.67188 22.168 5.27344 22.6602C4.89844 23.1523 4.5 23.5742 4.07812 23.9258C3.65625 24.2539 3.22266 24.4531 2.77734 24.5234C2.58984 24.5234 2.37891 24.5117 2.14453 24.4883C1.91016 24.4414 1.67578 24.3828 1.44141 24.3125C1.20703 24.2188 1.00781 24.1016 0.84375 23.9609C0.703125 23.7969 0.632812 23.5859 0.632812 23.3281C0.65625 20.9375 0.832031 18.7695 1.16016 16.8242C1.48828 14.8555 2.00391 13.1328 2.70703 11.6562C3.41016 10.1562 4.3125 8.91406 5.41406 7.92969C6.51562 6.94531 7.85156 6.24219 9.42188 5.82031C9.46875 5.82031 9.55078 5.82031 9.66797 5.82031C9.80859 5.79688 9.90234 5.78516 9.94922 5.78516C10.6523 5.76172 11.1562 6.08984 11.4609 6.76953C11.7891 7.42578 12.0234 8.48047 12.1641 9.93359C12.3281 11.3633 12.4336 13.2148 12.4805 15.4883C12.5508 17.7383 12.6797 20.4453 12.8672 23.6094C12.9375 23.8672 12.9727 24.0898 12.9727 24.2773C12.9961 24.4648 13.0078 24.6875 13.0078 24.9453C13.0078 25.2969 12.9023 25.5664 12.6914 25.7539C12.4805 25.918 12.2109 26 11.8828 26C11.2031 26 10.7227 25.8125 10.4414 25.4375C10.1602 25.0625 9.97266 24.5586 9.87891 23.9258C9.87891 23.9023 9.85547 23.7148 9.80859 23.3633C9.78516 23.0117 9.73828 22.6133 9.66797 22.168C9.62109 21.6992 9.57422 21.2305 9.52734 20.7617C9.48047 20.293 9.44531 19.9062 9.42188 19.6016V19.4609C9.375 19.2266 9.33984 18.9336 9.31641 18.582C9.31641 18.2305 9.29297 17.8906 9.24609 17.5625C9.19922 17.1641 9.16406 16.7656 9.14062 16.3672L9 16.1914ZM8.22656 9.23047C7.59375 9.69922 6.97266 10.332 6.36328 11.1289C5.75391 11.9258 5.32031 12.6992 5.0625 13.4492C4.94531 13.8008 4.81641 14.2812 4.67578 14.8906C4.53516 15.5 4.40625 16.1094 4.28906 16.7188C4.19531 17.3047 4.11328 17.8555 4.04297 18.3711C3.97266 18.8633 3.9375 19.1797 3.9375 19.3203C3.96094 19.3203 3.98438 19.2969 4.00781 19.25C4.05469 19.2031 4.08984 19.168 4.11328 19.1445C5.56641 17.7383 6.58594 16.2266 7.17188 14.6094C7.78125 12.9688 8.13281 11.1758 8.22656 9.23047ZM15.2227 24.9453C15.1758 22.3438 15.1055 19.7539 15.0117 17.1758C14.9414 14.5742 14.9062 11.9727 14.9062 9.37109C14.9062 9.18359 14.9062 8.85547 14.9062 8.38672C14.9062 7.89453 14.9062 7.37891 14.9062 6.83984C14.9297 6.30078 14.9414 5.79688 14.9414 5.32812C14.9414 4.85937 14.9414 4.53125 14.9414 4.34375C15.0352 3.96875 15.1758 3.67578 15.3633 3.46484C15.5508 3.23047 15.8438 3.11328 16.2422 3.11328C16.6406 3.11328 16.9922 3.24219 17.2969 3.5C17.6016 3.73437 17.8477 4.01562 18.0352 4.34375L23.0977 14.1172C23.1211 14.1641 23.2031 14.3047 23.3438 14.5391C23.4844 14.7734 23.5898 14.9375 23.6602 15.0312C23.6836 15.0547 23.7188 15.0781 23.7656 15.1016C23.8125 15.125 23.8359 15.1484 23.8359 15.1719L23.9766 14.8555L26.9648 4.34375C27.1758 4.01562 27.3281 3.65234 27.4219 3.25391C27.5391 2.83203 27.6562 2.42188 27.7734 2.02344C27.9141 1.625 28.0781 1.25 28.2656 0.898438C28.4766 0.546875 28.7812 0.253906 29.1797 0.0195312H29.4609C30.0938 0.0195312 30.5625 0.207031 30.8672 0.582031C31.1719 0.933594 31.3828 1.37891 31.5 1.91797C31.6172 2.43359 31.6641 2.98438 31.6406 3.57031C31.6406 4.13281 31.6523 4.625 31.6758 5.04688C31.6758 5.21094 31.6875 5.52734 31.7109 5.99609C31.7578 6.46484 31.8047 7.01562 31.8516 7.64844C31.8984 8.28125 31.9453 8.96094 31.9922 9.6875C32.0391 10.3906 32.0742 11.0586 32.0977 11.6914C32.1445 12.3242 32.1797 12.875 32.2031 13.3438C32.25 13.8125 32.2734 14.1172 32.2734 14.2578V14.3984C32.2969 14.6094 32.3438 14.9609 32.4141 15.4531C32.4844 15.9453 32.5547 16.4727 32.625 17.0352C32.7188 17.5742 32.8008 18.0898 32.8711 18.582C32.9414 19.0742 33 19.4141 33.0469 19.6016C33.0703 19.7188 33.1055 19.8945 33.1523 20.1289C33.2227 20.3633 33.293 20.6211 33.3633 20.9023C33.457 21.1602 33.5391 21.4062 33.6094 21.6406C33.6797 21.875 33.7383 22.0391 33.7852 22.1328C33.6914 22.6719 33.5508 23.0938 33.3633 23.3984C33.1992 23.6797 32.8242 23.8203 32.2383 23.8203C32.168 23.8203 32.0625 23.8203 31.9219 23.8203C31.7812 23.7969 31.6992 23.7852 31.6758 23.7852C31.6055 23.7383 31.4648 23.6211 31.2539 23.4336C31.0664 23.2461 30.9609 23.1172 30.9375 23.0469L30.375 21.1133L29.3203 13.0977V12.7812C29.2969 12.3594 29.2852 11.9141 29.2852 11.4453C29.2852 10.9531 29.2734 10.4609 29.25 9.96875C29.25 9.47656 29.2266 8.98438 29.1797 8.49219C29.1328 8 29.0391 7.54297 28.8984 7.12109L28.7227 7.33203L26.1914 17.5273C26.168 17.7852 26.1445 18.0664 26.1211 18.3711C26.0977 18.6523 26.0391 18.9336 25.9453 19.2148C25.8516 19.4727 25.7109 19.6953 25.5234 19.8828C25.3359 20.0703 25.0664 20.1758 24.7148 20.1992C24.5742 20.2227 24.4219 20.1992 24.2578 20.1289C24.0938 20.0586 23.9297 19.9648 23.7656 19.8477C23.6016 19.7305 23.4492 19.6016 23.3086 19.4609C23.1914 19.2969 23.1211 19.1445 23.0977 19.0039L18.6328 11.9023L17.8945 10.4258V13.4492C17.8945 14.8789 17.918 16.2852 17.9648 17.668C18.0352 19.0273 18.0703 20.4219 18.0703 21.8516C18.0703 21.9688 18.0703 22.1797 18.0703 22.4844C18.0703 22.7656 18.0586 23.0703 18.0352 23.3984C18.0352 23.7266 18.0352 24.043 18.0352 24.3477C18.0352 24.6289 18.0352 24.8281 18.0352 24.9453C17.9414 25.2266 17.8008 25.4727 17.6133 25.6836C17.4492 25.8945 17.2031 26 16.875 26C16.4297 26 16.0781 25.9297 15.8203 25.7891C15.5859 25.625 15.3867 25.3438 15.2227 24.9453ZM43.5938 16.1914C43.3828 16.5664 43.1367 17.0234 42.8555 17.5625C42.5977 18.0781 42.3164 18.6406 42.0117 19.25C41.707 19.8359 41.3672 20.4336 40.9922 21.043C40.6406 21.6289 40.2656 22.168 39.8672 22.6602C39.4922 23.1523 39.0938 23.5742 38.6719 23.9258C38.25 24.2539 37.8164 24.4531 37.3711 24.5234C37.1836 24.5234 36.9727 24.5117 36.7383 24.4883C36.5039 24.4414 36.2695 24.3828 36.0352 24.3125C35.8008 24.2188 35.6016 24.1016 35.4375 23.9609C35.2969 23.7969 35.2266 23.5859 35.2266 23.3281C35.25 20.9375 35.4258 18.7695 35.7539 16.8242C36.082 14.8555 36.5977 13.1328 37.3008 11.6562C38.0039 10.1562 38.9062 8.91406 40.0078 7.92969C41.1094 6.94531 42.4453 6.24219 44.0156 5.82031C44.0625 5.82031 44.1445 5.82031 44.2617 5.82031C44.4023 5.79688 44.4961 5.78516 44.543 5.78516C45.2461 5.76172 45.75 6.08984 46.0547 6.76953C46.3828 7.42578 46.6172 8.48047 46.7578 9.93359C46.9219 11.3633 47.0273 13.2148 47.0742 15.4883C47.1445 17.7383 47.2734 20.4453 47.4609 23.6094C47.5312 23.8672 47.5664 24.0898 47.5664 24.2773C47.5898 24.4648 47.6016 24.6875 47.6016 24.9453C47.6016 25.2969 47.4961 25.5664 47.2852 25.7539C47.0742 25.918 46.8047 26 46.4766 26C45.7969 26 45.3164 25.8125 45.0352 25.4375C44.7539 25.0625 44.5664 24.5586 44.4727 23.9258C44.4727 23.9023 44.4492 23.7148 44.4023 23.3633C44.3789 23.0117 44.332 22.6133 44.2617 22.168C44.2148 21.6992 44.168 21.2305 44.1211 20.7617C44.0742 20.293 44.0391 19.9062 44.0156 19.6016V19.4609C43.9688 19.2266 43.9336 18.9336 43.9102 18.582C43.9102 18.2305 43.8867 17.8906 43.8398 17.5625C43.793 17.1641 43.7578 16.7656 43.7344 16.3672L43.5938 16.1914ZM42.8203 9.23047C42.1875 9.69922 41.5664 10.332 40.957 11.1289C40.3477 11.9258 39.9141 12.6992 39.6562 13.4492C39.5391 13.8008 39.4102 14.2812 39.2695 14.8906C39.1289 15.5 39 16.1094 38.8828 16.7188C38.7891 17.3047 38.707 17.8555 38.6367 18.3711C38.5664 18.8633 38.5312 19.1797 38.5312 19.3203C38.5547 19.3203 38.5781 19.2969 38.6016 19.25C38.6484 19.2031 38.6836 19.168 38.707 19.1445C40.1602 17.7383 41.1797 16.2266 41.7656 14.6094C42.375 12.9688 42.7266 11.1758 42.8203 9.23047ZM59.4492 24.8047C59.1211 24.3359 58.8398 23.6914 58.6055 22.8711C58.3945 22.0273 58.1836 21.1484 57.9727 20.2344C57.7852 19.2969 57.6094 18.3945 57.4453 17.5273C57.2812 16.6367 57.1055 15.9336 56.918 15.418C56.7539 14.8789 56.5664 14.5742 56.3555 14.5039C56.1445 14.4336 55.8984 14.75 55.6172 15.4531L52.5586 24.875C52.4414 25.2031 52.3008 25.4375 52.1367 25.5781C51.9727 25.6953 51.7031 25.7539 51.3281 25.7539C51.1406 25.7539 50.9414 25.7305 50.7305 25.6836C50.5195 25.6133 50.3203 25.5195 50.1328 25.4023C49.9453 25.2852 49.7812 25.1445 49.6406 24.9805C49.5234 24.8164 49.4531 24.6289 49.4297 24.418C49.5 24.1367 49.5586 23.6211 49.6055 22.8711C49.6758 22.1211 49.7227 21.2539 49.7461 20.2695C49.7695 19.2852 49.7812 18.2539 49.7812 17.1758C49.8047 16.0742 49.8047 15.0547 49.7812 14.1172C49.7812 13.1562 49.7695 12.3359 49.7461 11.6562C49.7227 10.9531 49.6992 10.4961 49.6758 10.2852C49.6758 10.0508 49.6758 9.81641 49.6758 9.58203C49.6992 9.32422 49.7344 9.08984 49.7812 8.87891C49.8516 8.66797 49.957 8.50391 50.0977 8.38672C50.2617 8.24609 50.5078 8.17578 50.8359 8.17578C51.2812 8.17578 51.6914 8.36328 52.0664 8.73828C52.4648 9.11328 52.6641 9.51172 52.6641 9.93359C52.6641 10.543 52.6289 11.1523 52.5586 11.7617C52.5117 12.3477 52.4883 12.9453 52.4883 13.5547C52.4883 13.9297 52.4883 14.2461 52.4883 14.5039C52.4883 14.7617 52.5352 15.0781 52.6289 15.4531C52.6992 15.2656 52.8164 14.9375 52.9805 14.4688C53.1445 14 53.3203 13.5078 53.5078 12.9922C53.7188 12.4766 53.9062 11.9961 54.0703 11.5508C54.2344 11.082 54.3516 10.7539 54.4219 10.5664C54.5859 10.0977 54.832 9.65234 55.1602 9.23047C55.4883 8.78516 55.9219 8.53906 56.4609 8.49219C56.8125 8.46875 57.1289 8.5625 57.4102 8.77344C57.7148 8.98438 57.9727 9.26562 58.1836 9.61719C58.3945 9.94531 58.5703 10.2969 58.7109 10.6719C58.8516 11.0234 58.957 11.3281 59.0273 11.5859L60.9258 20.3398L62.4023 24.3477C62.4258 24.3711 62.4375 24.4414 62.4375 24.5586C62.4375 24.6523 62.4375 24.7227 62.4375 24.7695C62.4375 25.0508 62.3672 25.332 62.2266 25.6133C62.1094 25.8711 61.8867 26 61.5586 26C61.1602 26 60.75 25.8945 60.3281 25.6836C59.9062 25.4492 59.6133 25.1562 59.4492 24.8047ZM65.707 38.2695C65.6133 38.0117 65.6133 37.7188 65.707 37.3906C65.8242 37.0625 66.0469 36.8516 66.375 36.7578C66.9141 36.9922 67.4766 37.1445 68.0625 37.2148C68.6484 37.2852 69.2344 37.2969 69.8203 37.25C70.4297 37.2031 71.0273 37.1094 71.6133 36.9688C72.1992 36.8281 72.7617 36.6641 73.3008 36.4766C73.8398 36.0312 74.2148 35.4453 74.4258 34.7188C74.6367 34.0156 74.7188 33.043 74.6719 31.8008C74.625 30.582 74.4609 29.0469 74.1797 27.1953C73.9219 25.3672 73.582 23.1172 73.1602 20.4453C73.1602 20.375 73.1602 20.2695 73.1602 20.1289C73.1836 19.9883 73.1836 19.8594 73.1602 19.7422C73.1367 19.6016 73.0898 19.4961 73.0195 19.4258C72.9727 19.3555 72.9023 19.3555 72.8086 19.4258C72.5039 20.0117 72.1406 20.6562 71.7188 21.3594C71.3203 22.0391 70.8516 22.6836 70.3125 23.293C69.7969 23.8789 69.2109 24.3711 68.5547 24.7695C67.9219 25.168 67.207 25.3672 66.4102 25.3672C65.707 25.3672 65.0859 25.168 64.5469 24.7695C64.0312 24.3477 63.7734 23.75 63.7734 22.9766C63.7734 22.3906 63.8906 21.6523 64.125 20.7617C64.3828 19.8711 64.7227 18.9336 65.1445 17.9492C65.5664 16.9414 66.0586 15.9453 66.6211 14.9609C67.1836 13.9766 67.7695 13.0859 68.3789 12.2891C68.9883 11.4922 69.6094 10.8477 70.2422 10.3555C70.875 9.83984 71.4844 9.58203 72.0703 9.58203C72.3047 9.58203 72.6094 9.62891 72.9844 9.72266C73.3828 9.79297 73.7578 9.91016 74.1094 10.0742C74.4844 10.2383 74.8008 10.4258 75.0586 10.6367C75.3398 10.8477 75.4805 11.0938 75.4805 11.375V14.2227L77.7656 30.8164C77.7656 31.7539 77.7422 32.6445 77.6953 33.4883C77.6719 34.3555 77.5195 35.1523 77.2383 35.8789C76.9805 36.6055 76.5586 37.25 75.9727 37.8125C75.3867 38.375 74.543 38.832 73.4414 39.1836C73.3008 39.2539 73.0078 39.3125 72.5625 39.3594C72.1172 39.4062 71.6016 39.4414 71.0156 39.4648C70.4531 39.4883 69.8438 39.4883 69.1875 39.4648C68.5547 39.4414 67.9688 39.3828 67.4297 39.2891C66.9141 39.2188 66.4922 39.1016 66.1641 38.9375C65.8359 38.7734 65.6836 38.5508 65.707 38.2695ZM71.1914 12.7109C70.957 12.9688 70.6406 13.3789 70.2422 13.9414C69.8672 14.5039 69.4805 15.125 69.082 15.8047C68.6836 16.4844 68.2852 17.1992 67.8867 17.9492C67.5117 18.6758 67.207 19.3555 66.9727 19.9883C66.7383 20.6211 66.5859 21.1602 66.5156 21.6055C66.4688 22.0508 66.5742 22.3203 66.832 22.4141C67.3242 22.1562 67.8516 21.7344 68.4141 21.1484C68.9766 20.5391 69.5039 19.8711 69.9961 19.1445C70.5117 18.3945 70.957 17.6328 71.332 16.8594C71.7305 16.0625 72 15.3477 72.1406 14.7148C72.3047 14.082 72.3164 13.5781 72.1758 13.2031C72.0586 12.8047 71.7305 12.6406 71.1914 12.7109ZM93.3047 16.0156C93.2578 16.4375 93.1992 16.7656 93.1289 17C93.082 17.2344 92.9883 17.4453 92.8477 17.6328C92.707 17.8203 92.5078 18.0195 92.25 18.2305C91.9922 18.418 91.6406 18.6992 91.1953 19.0742C90.75 19.4258 90.1992 19.8945 89.543 20.4805C88.8867 21.0664 88.0898 21.8281 87.1523 22.7656C86.7773 23.1172 86.3906 23.4805 85.9922 23.8555C85.5938 24.2305 85.1719 24.5703 84.7266 24.875C84.3047 25.1562 83.8594 25.3906 83.3906 25.5781C82.9219 25.7656 82.4297 25.8594 81.9141 25.8594C80.9062 25.8594 80.168 25.5195 79.6992 24.8398C79.2305 24.1602 78.9961 23.375 78.9961 22.4844C78.9961 21.8984 79.0078 21.4062 79.0312 21.0078C79.0781 20.6094 79.1719 20.0938 79.3125 19.4609C79.0547 19.2266 78.832 19.0273 78.6445 18.8633C78.457 18.6758 78.3633 18.4297 78.3633 18.125C78.3633 17.8438 78.4219 17.6562 78.5391 17.5625C78.6797 17.4688 78.832 17.4102 78.9961 17.3867C79.1836 17.3398 79.3594 17.293 79.5234 17.2461C79.6875 17.1992 79.8047 17.1055 79.875 16.9648C79.9219 16.8242 80.0039 16.5664 80.1211 16.1914C80.2617 15.8164 80.4023 15.4297 80.543 15.0312C80.6836 14.6094 80.8125 14.2227 80.9297 13.8711C81.0703 13.4961 81.1641 13.2383 81.2109 13.0977C81.375 12.6992 81.5508 12.3008 81.7383 11.9023C81.9492 11.4805 82.1836 11.1055 82.4414 10.7773C82.7227 10.4492 83.0391 10.1797 83.3906 9.96875C83.7656 9.75781 84.1992 9.65234 84.6914 9.65234C84.9727 9.65234 85.3125 9.78125 85.7109 10.0391C86.1328 10.2969 86.5312 10.6133 86.9062 10.9883C87.2812 11.3398 87.5977 11.7148 87.8555 12.1133C88.1133 12.5117 88.2422 12.8516 88.2422 13.1328C88.2422 13.4844 88.1602 13.8125 87.9961 14.1172C87.832 14.3984 87.6211 14.668 87.3633 14.9258C87.1289 15.1602 86.8711 15.3828 86.5898 15.5938C86.3086 15.8047 86.0508 16.0039 85.8164 16.1914C85.793 16.1914 85.7461 16.2148 85.6758 16.2617C85.6055 16.3086 85.5469 16.3438 85.5 16.3672C85.4766 16.3906 85.418 16.4492 85.3242 16.543C85.2539 16.6133 85.1719 16.6953 85.0781 16.7891C84.9844 16.8828 84.8906 16.9766 84.7969 17.0703C84.7266 17.1641 84.6797 17.2227 84.6562 17.2461C84.5859 17.3164 84.4453 17.4336 84.2344 17.5977C84.0469 17.7383 83.8359 17.9023 83.6016 18.0898C83.3672 18.2539 83.1445 18.418 82.9336 18.582C82.7461 18.7227 82.6172 18.8164 82.5469 18.8633L82.4062 19.1445C82.3594 19.2383 82.3125 19.4492 82.2656 19.7773C82.2422 20.082 82.207 20.4336 82.1602 20.832C82.1133 21.2305 82.0664 21.6406 82.0195 22.0625C81.9961 22.4609 81.9844 22.7891 81.9844 23.0469C81.9844 23.0703 81.9961 23.0938 82.0195 23.1172C82.0664 23.1641 82.1016 23.1875 82.125 23.1875C82.3125 23.1875 82.4883 23.1055 82.6523 22.9414C82.8164 22.7773 82.9922 22.6602 83.1797 22.5898L88.8047 17.3867L90.2461 15.1719C90.3633 15.0078 90.5859 14.832 90.9141 14.6445C91.2656 14.4336 91.6172 14.3281 91.9688 14.3281C92.3203 14.3047 92.625 14.4102 92.8828 14.6445C93.1641 14.8789 93.3047 15.3359 93.3047 16.0156ZM85.5703 13.2734C85.6875 13.1797 85.7344 13.0391 85.7109 12.8516C85.6875 12.6641 85.6172 12.5 85.5 12.3594C85.4062 12.2188 85.2773 12.1367 85.1133 12.1133C84.9492 12.0664 84.7969 12.1484 84.6562 12.3594C84.5859 12.4531 84.457 12.6406 84.2695 12.9219C84.1055 13.2031 83.9297 13.4961 83.7422 13.8008C83.5781 14.082 83.4375 14.3281 83.3203 14.5391C83.2031 14.75 83.1797 14.832 83.25 14.7852L85.5703 13.2734ZM95.8359 24.4883C95.7891 23.6445 95.707 22.5195 95.5898 21.1133C95.4961 19.6836 95.3789 18.207 95.2383 16.6836C95.1211 15.1602 94.9922 13.7188 94.8516 12.3594C94.7109 11 94.5938 9.94531 94.5 9.19531C94.5 8.89062 94.6406 8.69141 94.9219 8.59766C95.2031 8.50391 95.4727 8.45703 95.7305 8.45703C96.0586 8.45703 96.3984 8.55078 96.75 8.73828C97.125 8.92578 97.3594 9.18359 97.4531 9.51172C97.4531 9.60547 97.4648 9.78125 97.4883 10.0391C97.5117 10.2734 97.5234 10.5195 97.5234 10.7773C97.5469 11.0352 97.5703 11.293 97.5938 11.5508C97.6172 11.7852 97.6289 11.9492 97.6289 12.043C97.6289 12.1836 97.6289 12.2891 97.6289 12.3594C97.6289 12.4297 97.6289 12.5 97.6289 12.5703C97.6289 12.6172 97.6406 12.6758 97.6641 12.7461C97.6875 12.8164 97.7227 12.9336 97.7695 13.0977C97.8164 13.0508 97.8633 12.9922 97.9102 12.9219C97.9805 12.8516 98.0273 12.8047 98.0508 12.7812C98.4258 12.2422 98.7891 11.7734 99.1406 11.375C99.4922 10.9531 99.8555 10.5664 100.23 10.2148C100.605 9.83984 101.016 9.45312 101.461 9.05469C101.93 8.63281 102.469 8.15234 103.078 7.61328C103.219 7.49609 103.324 7.41406 103.395 7.36719C103.465 7.29688 103.523 7.25 103.57 7.22656C103.641 7.17969 103.711 7.15625 103.781 7.15625C103.852 7.13281 103.945 7.12109 104.062 7.12109C104.461 7.12109 104.859 7.26172 105.258 7.54297C105.68 7.80078 105.891 8.16406 105.891 8.63281C105.891 8.79688 105.832 8.97266 105.715 9.16016C105.598 9.32422 105.457 9.48828 105.293 9.65234C105.129 9.79297 104.953 9.92188 104.766 10.0391C104.602 10.1562 104.449 10.2383 104.309 10.2852C103.699 10.8242 103.055 11.4453 102.375 12.1484C101.695 12.8281 101.062 13.5664 100.477 14.3633C99.8906 15.1602 99.4102 15.9922 99.0352 16.8594C98.6602 17.7266 98.4727 18.5938 98.4727 19.4609C98.4727 20.2578 98.5312 21.043 98.6484 21.8164C98.7656 22.5898 98.8242 23.375 98.8242 24.1719V25.4023C98.6367 25.5898 98.4727 25.7422 98.332 25.8594C98.1914 25.9766 97.9922 26.0352 97.7344 26.0352C97.3359 26.0352 96.9492 25.8711 96.5742 25.543C96.1992 25.1914 95.9531 24.8398 95.8359 24.4883Z" fill="#2ECC71" />
        </svg>
        <div className="connexion__zone">
          <Icon name="user circle outline" size="huge" className="login__icon" onClick={showModal} />
          <p>S'incrire / Se connecter</p>
          <LogInModal />
        </div>
      </div>
      <div className="separator" />
    </div>
  );
};

// == Export
export default Header;
