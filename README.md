# RishGPT 
#### A Custom ChatGPT UI

<!-- ![image](assets/chatclone-demo.png) -->
<img src="assets/chatclone-demo.png" alt="Image" height="600">


## About this Project
### Built With
- [![Express][Express.js]][Express-url]
- [![React][React.js]][React-url]
- [![OpenAI][OpenAI]][OpenAI-url]
  
### Description/Motivation
RishGPT acts as a clone of OpenAI's ChatGPT but with a custom UI. Currently, the UI is directly replicated from ChatGPT, but the goal is to make it more user friendly and visually aesthetic. Users can also enter customized prompt instructions such as for generating SQL queries or writing cover letters. Additionally, users can store interactions in SQL databases on-prem instead of in the cloud as traditional ChatGPT does.

This project was built for full-stack experience including frontend development with React, HTML, and CSS, and backend development with Express and API calls with OpenAI's Chat Completions API.




## Getting Started
### Prerequisites
* npm
  ```sh
  npm install npm@latest -g
  ```
### Installation
1. Create an Open AI API Key at [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Clone the repo
   ```sh
   git clone https://github.com/risharma101/RishGPT
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file in the main project folder and enter your API Key in it
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
### Launch
1. Launch the frontend
   ```sh
   npm run start:frontend
   ```
2. Launch the backend
   ```sh
   npm run start:backend
   ```

<!-- USAGE EXAMPLES -->
## Usage
- Basic usage is just through entering questions as you would in ChatGPT
  - Video Demo: ![video](https://github.com/risharma101/ChatGPT-Clone/assets/52262619/d021fe6b-0591-4630-add8-57eb5efe0229)
- Custom usage: entering specified prompts
  - Change the message content in `server.js`
  - eg. for SQL query generation: change line 21 to
    ```js
    messages: [{role: "user", content: "Generate an SQL query to " + req.body.message}],
    ```
  - eg. for cover letter generation: change line 21 to
    ```js
    messages: [{role: "user", content: "Act as a candidate looking for a job. Write me a cover letter for the following role and qualifications " + req.body.message}],
    ```
- Increasing response size: in `server.js`, change line 22
  ```js
  max_tokens: YOUR_NUM_TOKENS,
  ```
  - Note: token limit (including request and response) for gpt-3.5-turbo is 4096
- Changing model:
  - if you have a gpt-4 subscription, you can change the model to gpt-4 for better responses
  - change server.js line 20
  ```js
  model: "gpt-4",
  ```

<!-- ROADMAP -->
## Roadmap
- [X] Replicated ChatGPT UI
- [X] Added OpenAI API call for chat completions
- [ ] Change UI to make it more visually aesthetic and user-customizable
    - [ ] Add various background and text colors which user can choose
    - [ ] Allow user to change name and title according to their choosing
- [ ] Add config for easily customizable prompts instead of user changing prompt code themselves
    - [ ] Add SQL query generation prompt config
    - [ ] Add cover letter generation prompt config
    - [ ] Add other common prompt configs
- [ ] Add script so user can store past interactions on-prem and access later
- [ ] Increase max tokens for larger user messages and responses

<!-- CONTRIBUTING -->
## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Rishabh Sharma - rishabhsharma@ucla.edu

Project Link: [https://github.com/risharma101/RishGPT](https://github.com/risharma101/RishGPT)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* FreeCodeCamp for providing tutorial of React, JavaScript, HTML, CSS, and connecting to OpenAI API
* [README Template](https://github.com/othneildrew/Best-README-Template)
   
[OpenAI]: https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white
[OpenAI-url]: https://platform.openai.com/docs/guides/text-generation
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
