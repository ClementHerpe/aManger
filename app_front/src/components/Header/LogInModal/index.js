// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Icon } from 'semantic-ui-react';
// == Import
import './styles.scss';
// == Composant
const LogInModal = ({
  logInEmail, // valeur du champ email dans le form login
  logInPassword, // valeur du champ email dans le form login
  email, // Value du champ email
  password, // Value du champ password
  firstName, // Value du champ prénom
  lastName, // Value du champ nom
  userName, // Value du champ pseudo
  changeField, // Fonction qui met à jour le champ avec 2 params value et name du champ
  handleLogin, // Fonction à la soumission du formulaire sans param
  isLogged,
  handler, // fonction du parent pour fermer la modale
  logInError,
  handleSignin,
  signInWentSuccesfully,
  handleToggleLogInComponent, // fonction pour toggle le formulaire visible
  displaySignInComponent, // boolean représentant quel formulaire est affiché
  errorMessage, // tableau qui contient l'erreur retournée par le serveur dans la case message
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  const handleLoginClick = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const handleClick = () => {
    handler();
  };
  const handleSigninClick = (evt) => {
    evt.preventDefault();
    handleSignin();
  };
  const toggleLogInComponent = () => {
    handleToggleLogInComponent();
  };
  return (
    <div className="login__modal">
      <Icon id="close__modal__icon" name="close" size="big" color="red" onClick={handleClick} />
      {!isLogged && (
      <div className="login__form">
        {logInError && (
          <p className="logIn__error">Cette combinaison utilisateur/mot de passe n'est pas reconnue</p>
        )}
        {!displaySignInComponent && (
          <form id="login__form__1">
            <Input onChange={handleChange} name="logInEmail" placeholder="Adresse Email" value={logInEmail} />
            <Input onChange={handleChange} name="logInPassword" type="password" placeholder="Mot de passe" value={logInPassword} />
            <div className="login__form__button__container">
              <Button primary type="submit" className="login-form-button" onClick={handleLoginClick}>Se Connecter</Button>
              <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Créer un compte</Button>
            </div>
          </form>
        )}
        {signInWentSuccesfully && (
          <p className="signIn__validation">Votre compte est bien crée, vous pouvez désormais vous connecter</p>
        )}
        {signInWentSuccesfully === false && (
          errorMessage.map((error) => (
            <p className="logIn__error">{error.message}</p>
          ))
        )}
        {displaySignInComponent && (
          <form id="login__form__2">
            <Input onChange={handleChange} name="email" placeholder="Adresse Email" value={email} />
            <Input onChange={handleChange} name="password" type="password" placeholder="Mot de passe" value={password} />
            <Input onChange={handleChange} name="firstName" type="text" placeholder="Prénom" value={firstName} />
            <Input onChange={handleChange} name="lastName" type="text" placeholder="Nom" value={lastName} />
            <Input onChange={handleChange} name="userName" type="text" placeholder="Pseudo" value={userName} />
            <div className="login__form__button__container">
              <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Se Connecter</Button>
              <Button primary type="submit" className="login-form-button" onClick={handleSigninClick}>Créer un compte</Button>
            </div>
          </form>
        )}
      </div>
      )}
      {isLogged && (handler())}
    </div>
  );
};
LogInModal.propTypes = {
  logInEmail: PropTypes.string.isRequired,
  logInPassword: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  logInError: PropTypes.bool.isRequired,
  handleSignin: PropTypes.func.isRequired,
  signInWentSuccesfully: PropTypes.bool.isRequired,
  handleToggleLogInComponent: PropTypes.func.isRequired,
  displaySignInComponent: PropTypes.bool.isRequired,
  errorMessage: PropTypes.array.isRequired,
};
// == Export
export default LogInModal;
