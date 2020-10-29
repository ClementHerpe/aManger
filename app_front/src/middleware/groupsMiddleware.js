/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_GROUPS_DATAS,
  sendGroupsDatas,
  SEND_TARGETED_VALUES,
  saveNewMeal,
  fetchGroupsDatasAction,
  REMOVE_MEAL_ACTION,
  ADD_RECIPE_TO_DB,
  REMOVE_RECIPE_ACTION,
  FETCH_GROUP_MEMBERS,
  sendGroupMembers,
  DELETE_GROUP_ACTION,
  LEAVE_GROUP_ACTION,
  CREATE_GROUP_ACTION,
  toggleCreateGroupModalAction,
  FETCH_ALL_USERS,
  sendAllUsers,
  ADD_MEMBER_TO_GROUP_ACTION,
  toggleAddMemberModalAction,
  fetchGroupMembers,

} from '../actions/groups';


const groupsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  let mealId;
  let recipeId;
  switch (action.type) {
    case FETCH_GROUPS_DATAS:
      const { id } = state.user;
      axios.get(`${process.env.APISERVER}/user/${id}`, {}, { withCredentials: true })
        .then((response) => {
          // On trie l'ordre des groupes renvoyé afin d'avoir toujours le même
          const lowestIdFirstSort = (a, b) => (a.id - b.id);
          response.data.groups.sort(lowestIdFirstSort);
          // On appelle les fonctions
          store.dispatch(sendGroupsDatas(response.data));
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case SEND_TARGETED_VALUES:
      const { choosenDay, choosenTime } = action;
      let groupId = state.groups.activeGroupId;
      const dayString = `${choosenDay}`;
      const day = dayString.split('/').join('-');
      const time = choosenTime;
      axios.post(`${process.env.APISERVER}/meal/create`, { day, time, groupId }, { withCredentials: true })
        .then(() => {
          store.dispatch(saveNewMeal());
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case REMOVE_MEAL_ACTION:
      const mealIdForURL = action.targetMealId;
      axios.delete(`${process.env.APISERVER}/meal/${mealIdForURL}`, {}, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case ADD_RECIPE_TO_DB:
      mealId = action.mealId;
      recipeId = action.recipeId;
      const { numberPeople } = state.groups;
      axios.post(`${process.env.APISERVER}/meal/addRecipe`, { recipeId, mealId, numberPeople }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case REMOVE_RECIPE_ACTION:
      mealId = action.mealId;
      recipeId = action.recipeId;
      axios.post(`${process.env.APISERVER}/meal/removeRecipe`, { mealId, recipeId }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case FETCH_GROUP_MEMBERS:
      groupId = action.groupId;
      axios.get(`${process.env.APISERVER}/group/${groupId}`, { withCredentials: true })
        .then((response) => {
          console.log('valeur de response :', response.data);
          store.dispatch(sendGroupMembers(response.data));
          
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case DELETE_GROUP_ACTION:
      groupId = action.groupId;
      axios.delete(`${process.env.APISERVER}/group/${groupId}`, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case LEAVE_GROUP_ACTION:
      groupId = action.groupId;
      let { userId } = action;
      axios.post(`${process.env.APISERVER}/group/removeMember`, { groupId, userId }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case CREATE_GROUP_ACTION:
      name = action.groupName;
      userId = action.userId;
      axios.post(`${process.env.APISERVER}/group/create`, { name, userId }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          store.dispatch(toggleCreateGroupModalAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case FETCH_ALL_USERS:
      axios.get(`${process.env.APISERVER}/users/pseudos`, { withCredentials: true })
        .then((response) => {
          store.dispatch(sendAllUsers(response.data));
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case ADD_MEMBER_TO_GROUP_ACTION:
      groupId = action.groupId;
      userId = action.userId;
      const userRole = 'Lecture';
      axios.post(`${process.env.APISERVER}/group/addMember`, { groupId, userId, userRole }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupMembers(groupId));
          store.dispatch(toggleAddMemberModalAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default groupsMiddleware;
