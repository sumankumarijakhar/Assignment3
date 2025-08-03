# Assignment 3 - CI/CD with Jenkins and Azure Functions

**Course**: PROG8860  
**Student**: Suman Jakhar  
**Date**: August 3, 2025

## 🔧 Overview

This project demonstrates a CI/CD pipeline setup using Jenkins to build, test, and deploy a Node.js Azure Function.

The Azure Function returns a simple "Hello, World!" HTTP response when triggered.

## 🧪 Test Cases

Test cases are written using **Jest** and **Supertest**, and cover:

- ✅ Returns correct message: "Hello, World!"
- ✅ HTTP status code is 200
- ✅ Response body is not empty

```bash
npm test
```

> ✔️ All 3 tests passed (see screenshot)

## ⚙️ Jenkins Pipeline

A Jenkins pipeline was created with the following stages:

- **Build**: Installs dependencies via `npm install`
- **Test**: Runs the Jest test suite
- **Deploy**: Uses Azure CLI to deploy the zipped function (currently fails due to missing secrets)

> ✔️ Code pulled from GitHub  
> ❌ Deployment failed due to missing Azure credentials (see screenshot)

## 💬 Notes

- Azure Function was tested locally and manually using `npm start` + Jest tests.
- Jenkins pipeline successfully runs **Build** and **Test** stages.
- Deploy step is correctly configured but fails due to missing Azure secrets in Jenkins.