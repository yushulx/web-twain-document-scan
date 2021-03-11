# Web Document Scan
The repository demonstrates how to integrate Dynamic Web TWAIN JavaScript library into a simple Polymer project.

## Installation
1. Install [Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/downloads) and copy `Dynamic Web TWAIN SDK <version>\Resources` folder to your target project.

2. Apply for a [30-day FREE Trial License](https://www.dynamsoft.com/customer/license/trialLicense/?product=dwt&utm_source=github) and then update the following code:

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
npm install
npm start
```

Visit `http://127.0.0.1:8081/` in your web browser.



![Polymer document scan](https://www.dynamsoft.com/codepool/wp-content/uploads/2020/08/polymer-shadow-dom-document-scan.png)

## Blog
[How to Make Dynamic Web TWAIN Work with Polymer Shadow DOM](https://www.dynamsoft.com/codepool/polymer-shadow-dom-web-document-scan.html)
