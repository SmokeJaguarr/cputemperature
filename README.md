# Get CPU temperature for Linux
This application uses python and node.js(express) to retriev CPU temperature data and display it to front-end web application.
It's also possible to edit temperature.py script and get cpu temperature using python wmi package and Open Hardware Monitor program, but as it requires external program download this solution is not included.

# How it works 
From front-end every second axios GET request is created to server API /api/cputem which runs python script (psutil library) and sends back cpu current temperature.

# Project setup
1) Clone the project
```
git clone https://github.com/SmokeJaguarr/cputemperature
```
2) Install all node.js packages
```
npm install
```
3) Open config/config.env file and change PYTHON variable name to your python global variable name (same what you use in cmd)
4) Open CMD and install psutil globaly. Make sure global python uses same package management(pip)
```
pip install psutil
```
5) npm run start
