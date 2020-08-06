# Web Document Scan
The repository shares the basic usage of Dynamic Web TWAIN for web document scan, as well as how to integrate Dynamic Web TWAIN JavaScript library to a simple Polymer project.

## Installation
1. Install [Dynamic Web TWAIN](https://www.dynamsoft.com/Downloads/WebTWAIN_Download.aspx) and copy `Dynamic Web TWAIN SDK 16.1\Resources` folder to your target project.

2. Apply for a free trial license from the [online portal](https://www.dynamsoft.com/CustomerPortal/Portal/Triallicense.aspx) and update the following code:

    ```js
    Dynamsoft.WebTwainEnv.ProductKey = 'LICENSE-KEY';
    ```

## Usage
### Hello World
Double-click `helloworld.htm` to run the web document scan app. 

### Polymer Project
Install the Polymer CLI:

```
npm i -g polymer-cli
```

Run the project:

```
cd polymer-document-scan
npm start
```

Visit `http://127.0.0.1:8081/` in your web browser.



![Polymer document scan](https://www.dynamsoft.com/codepool/wp-content/uploads/2020/08/polymer-shadow-dom-document-scan.png)
