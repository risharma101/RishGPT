# RishGPT 
#### A Custom ChatGPT UI

![image](assets/chatclone-demo.png =250x)

## About this Project
### Built With
- [![Express][Express.js]][Express-url]
- [![React][React.js]][React-url]
- [![OpenAI][OpenAI]][OpenAI-url]
  
### Description/Motivation
RishGPT acts as a clone of OpenAI's ChatGPT but with a custom UI. Currently, the UI is directly replicated from ChatGPT, but the goal is to make it more user friendly and visually aesthetic. Users can also enter customized prompt instructions such as for generating SQL queries or writing cover letters. Additionally, users can store interactions in SQL databases on-prem instead of in the cloud as traditional ChatGPT does.

This project was built for full-stack experience including frontend development with React, HTML, and CSS, and backend development with Express and API calls with OpenAI's Chat Completions API.

### Video demo
![video](https://github.com/risharma101/ChatGPT-Clone/assets/52262619/d021fe6b-0591-4630-add8-57eb5efe0229)

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
   git clone https://github.com/risharma101/RishGPT/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file in the main project folder and enter your API Key in it
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
### Launching
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

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



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

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()
   
[OpenAI]: https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white
[OpenAI-url]: https://platform.openai.com/docs/guides/text-generation
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
