# Project NC News The App

App that fetches data from the Northcoder's News Database and displays it on the web.

- Currently this project is hosted on https://project-nc-news.netlify.com/
- And the repo can be found on https://github.com/manloeng/fe-nc-news

### Back-end of Nc-News

- Currently the back end of the project is hosted on https://project-nc-news.herokuapp.com/api
- And the repo can be found on https://github.com/manloeng/nc-news

## Prerequisites

What things you need:

- `Code Editor` (We're using Visual Studio Code)
- `Node.js` (Version to Date : v12.1.0)


## Step 1 - Setting up your own repository

`Clone` the repo:

```bash
git clone https://github.com/manloeng/nc-news

cd nc-news
```
Once you have cloned the repo, you should have the repo on your system.

You will need to install the required modules to run the api successfully.

## Step 2 - Installing

On your terminal you will want to run:
```bash
npm install
```
This will install all the modules that are listed in the `package.json`

## Step 3 - Starting Up The Project

`npm run start` will start up the server on its default `PORT` of `3000`

you should see this message on your terminal:

```bash
Starting the development server...

```
After a short period of time you will see:

```bash
Starting the development server...


You can now view nc-news in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://your-ip-address:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

You can go over to: 
`http://localhost:3000/`

to see your server running from your local computer.

If you want to stop the server, you will need to hit `Ctrl+C` on the terminal.

### Navigating around

The endpoints within this app are:

- `http://localhost:3000/articles`
- `http://localhost:3000/articles/:article_id`
- `http://localhost:3000/explore/`
- `http://localhost:3000/explore/:topic`
- `http://localhost:3000/users/:username`


## Authors

* **Andrew Chung** - *Initial work* - [Andrew Chung](https://github.com/manloeng/fe-nc-news)



