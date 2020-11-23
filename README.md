# Get CPU temperature for Linux
This application uses python and node.js(express) to retriev CPU temperature data and display it to front-end web application.
It's also possible to edit temperature.py script and get cpu temperature using python wmi package and using Open Hardware Monitor program, but as it requires external program download this solution is not included.

# How it works 
From front-end every second axios GET request is created to server API /api/cputem which runs python script (psutil library) and sends back to cpu temperature.

#
