# RishGPT - A Custom ChatGPT UI

## About this Project
![image](assets/chatclone-demo.png)

### Description/Motivation
RishGPT acts as a clone of OpenAI's ChatGPT but with a custom UI. Currently, the UI is directly replicated from ChatGPT, but the goal is to make it more user friendly and visually aesthetic. Users can also enter customized prompt instructions such as for generating SQL queries or writing cover letters. Additionally, users can store interactions in SQL databases on-prem instead of in the cloud as traditional ChatGPT does.

This project was built for full-stack experience incuding frontend development with React, HTML, and CSS, and backend development with Express and API calls with OpenAI's Chat Completions API.

### Built With
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]


#### Video demo
![video](https://github.com/risharma101/ChatGPT-Clone/assets/52262619/d021fe6b-0591-4630-add8-57eb5efe0229)


## To launch the project:
- Download the project zip and unzip
- In the main folder, create a file called `.env`
  - Add a line `API_KEY = '{OPEN AI API KEY}'` where the {} are replaced by your personal Open AI API Key
- Open two terminal windows and `cd react-chatgpt-clone` on each
  - Run `npm install` on the first one
  - Run `npm run start:frontend` on the first 
  - Run `npm run start:backend` on the second
  




[Express.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Express-url]: https://expressjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
