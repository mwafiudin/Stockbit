*** Settings ***
Library                             SeleniumLibrary
Resource                            ../pages/landing_page.robot

*** Variables ***
${usernameField}    //*[@id="username"]
${passwordField}    //*[@id="password"]
${loginButton}      //*[@id="email-login-button"]

*** Keywords ***
Login page opened
    Landing page opened
    User click login button
    User should be directed to login page

Input username
    [Arguments]                     ${username}
    wait until element is visible   ${usernameField}
    input text                      ${usernameField}    ${username}

Input password
    [Arguments]                     ${password}
    wait until element is visible   ${passwordField}
    input text                      ${passwordField}    ${password}

Click login button
    wait until element is visible   ${loginButton}
    click element                   ${loginButton}