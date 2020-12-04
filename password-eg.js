// code challenge answer

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
}

console.log(isValidPassword('45678stephen','stephen'))

// refactored

function validPass(password,username) {
    if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
        return false
    }
    return true
}

console.log(`test ${validPass('12345678', 'Stephen')}`)

// code challenge my attempt

function passWrd(password, username) {
    if (password.length >= 8) {
      console.log("Yes more than 8 characters: " + password);
    } else {
      console.log("No less than 8 characters " + password);
    }
    if (password.includes(username)) {
      console.log("Yes " + username + " is in password");
    } else {
      console.log("No " + username + " is not in password");
    }
    if (password.indexOf(" ") == -1) {
      console.log("No space detected");
    } else {
      console.log("Space detected");
    }
  }

  console.log(passWrd("456789999", "ste"));

  // another example using variables

  function varPass(password, username) {
      const tooshort = password.length < 8;
      const spacer = password.indexOf(' ') !== -1;
      const hasnameIn = password.indexOf(username) !== -1;
      if (tooshort || spacer || hasnameIn) return false;
      return true;
  }
  console.log(varPass("456789999", "ste"));