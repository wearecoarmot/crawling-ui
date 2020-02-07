# Crawling-ui 프로젝트

## Since. 2019.12.25. 
| 업무 | 이름 |
| --- | :---: |
| Back-End | [kuckjwi](https://github.com/kuckjwi0928) |
| Front-End | [devkang](https://github.com/LeeKangHyun) |
| Front-End | [FlyingSquirrel](https://github.com/flyingSquirrel-dev) |
| Front-End | [ForPK](https://github.com/ForPK) |

## Prerequisites
`python3.8`
`npm >=12.14.0(latest)`
`pip`
`yarn`

## Installing packages/modules
1. Install packages using pip
    ~~~ shell script
    pip install -r requirements.txt
    ~~~
2. Install modules using yarn in `client` directory
    ~~~ shell script
   cd client/
    yarn install
    ~~~

## Getting Started
To start this app, run as below:
1. To run a server, execute a command in the root directory
    ~~~ shell script
    # first run
    python manage.py makemigrations
    python manage.py migrate
    python manger.py createadmin
    # run server
    python manage.py runserver
    ~~~
2. To run a client app, execute a command in `client` directory
    ~~~ shell script
   cd client/
    yarn start
    ~~~