# chatgptufa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Application Overview

This Vue 3 application provides a secure and reliable platform for sharing secrets. It is designed to allow users to create time-sensitive secrets that can be shared securely with others through generated links. The application consists of two main routes:

1. **Home Route (`/`)**:
   - **Hero Section**: Introduces the service with a striking visual and headline, emphasizing the secure and reliable nature of the secret sharing service.
   - **Create Secret Section**: Allows users to input a secret message, set an expiration time, and generate a unique, secure link that encapsulates the secret. This link can be shared with others who can access the secret until the expiration time.
   - **Benefits Section**: Outlines the key advantages of using the service, such as enhanced security features, ease of use, and the ability to handle sensitive information with care.
   - **Footer**: Provides additional information and navigation options within the site.

2. **Secret Route (`/secret/:token`)**:
   - Upon navigating to this route with a specific token, the application checks if the secret associated with the token is valid and has not expired. If the secret is valid and accessible:
     - **Valid Secret Message**: Displays a message indicating that a secret is available and provides an option to reveal the secret.
     - **Reveal Secret**: A button allows users to view the secret once they are ready, ensuring that the information is disclosed securely and consciously.
   - If the token is invalid or the secret has expired:
     - **Invalid or Expired Message**: Informs the user that the link has either expired or did not exist, offering a button to return to the home page for creating new secrets or accessing other services.

This application utilizes Vue 3's composition API for state management, along with Vue Router for navigation and Axios for HTTP requests, ensuring a modern, reactive user experience.

### Key Functionalities:

- **Secure Secret Creation and Handling**: Ensures that secrets are stored securely and are only accessible through unique tokens.
- **Time-sensitive Links**: Enhances security by allowing secrets to expire after a predefined duration, making them inaccessible post-expiration.
- **Responsive Design**: The application is fully responsive, providing a seamless experience across various devices and screen sizes.

### Use Case Scenario:

A user wishes to share sensitive information, such as a password or confidential note, with someone else. They can enter the information into the application, set an expiration time, and generate a secure link. This link can then be shared with the intended recipient, who can access the information securely before the link expires.
