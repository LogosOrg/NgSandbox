# NgSandbox - Angular Practice Project Setup Guide

This guide will help you set up your environment and get started with the NgSandbox Angular project.

---

## 1. Install Node.js

- Visit [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Download the **LTS version** for your operating system (Windows, Mac, or Linux).
- Run the installer with default settings (no special configuration needed).
- After installation, open **Command Prompt** (Windows) or **Terminal** (Mac/Linux) and check the versions:

  ```bash
  node -v
  npm -v
  ```

  You should see version numbers for both Node.js and npm.

---

## 2. Install Angular CLI

- Open a new **Command Prompt** or **Terminal** window.
- Install Angular CLI globally:

  ```bash
  npm install -g @angular/cli@19.2
  ```

- After installation, check the Angular CLI version:

  ```bash
  ng version
  ```

  (You should see Angular CLI v19.2.x and Angular versions listed.)

---

## 3. Clone the Practice Project

- Create or navigate to a directory where you want to store your practice projects.
- Run:

  ```bash
  git clone https://github.com/LogosOrg/NgSandbox.git
  cd NgSandbox
  ```

---

## 4. Open the Project in Visual Studio Code

- Launch **Visual Studio Code**.
- Go to **File > Open Folder** (or just **Open** on Mac).
- Select the `NgSandbox` folder you just cloned.

---

## 5. Ready to Start!

You’re now ready to start practicing with Angular using the NgSandbox project.

---

### Troubleshooting

- If you encounter permission issues with `npm install -g`, try running your terminal as administrator (Windows) or use `sudo` (Mac/Linux):

  ```bash
  sudo npm install -g @angular/cli@19.2
  ```

- Make sure you have [Git](https://git-scm.com/) installed for the `git clone` command.

---

Happy coding!

