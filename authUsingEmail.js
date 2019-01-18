import firebase from "./api";

export const verifyEmail = async () => {
  const user = firebase.auth().currentUser;
  console.info(`User for verifyEmail : ${JSON.stringify(user, null, 4)}`);
  if (user.emailVerified === false) {
    user.sendEmailVerification().then(() => {
      console.info("Verification email sent");
    }).catch((error) => {
      console.warn(`Errors in Email Verification : ${error}`);
    });
  } else {
    console.info("Email already verfied!");
  }
};

export const signOutUser = async () => {
  firebase.auth().signOut().then(() => {
    console.info("Signout successfull");
  }).catch((error) => {
    console.warn(error);
  });
};

export const getUser = async () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.info("In userAuthStateChanged()");
      let response;
      if (user.emailVerified === false) {
        response = "emailVerified = false";
      }
      const state = {
        user: {
          name: user.displayName,
          email: user.email,
          photo: user.photoUrl,
          uid: user.uid
        },
        response
      };
      console.info(JSON.stringify(state, null, 4));
      return state;
    }
    throw new Error("No User: Make sure you are logged In");
  });
};

export const signupFire = async (email, password) => {
  console.info("In signupFire");
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.info(res);
    return res;
  } catch (err) {
    throw err;
  }
};

export const loginFire = async (email, password) => {
  console.info("In LoginFire");
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.info(JSON.stringify(res, null, 4));
    return res;
  } catch (error) {
    throw error;
  }
};
