function sendNotification(email) {
  if (typeof email !== 'string') {
    return "Invalid Email";
  }
  if (email.includes('@') !== true) {
    return "Invalid Email";
  }
  const splitEmail = email.split('@');
  const userName = splitEmail[0];
  const domainName = splitEmail[1];
  const notification = userName + ' sent you an email from ' + domainName;
  return notification;
}

const notify = sendNotification('zihad@gmail.com');
console.log(notify);

