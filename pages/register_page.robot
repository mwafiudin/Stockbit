*** Settings ***
Library                             SeleniumLibrary
Resource                            ../pages/landing_page.robot

*** Variables ***
${registerByEmailButton}    //*[@id="email-register"]/p
${fullNameField}            //*[@id="fullname"]
${emailField}               //*[@id="email"]
${usernameField}            //*[@id="username"]
${passwordField}            //*[@id="password"]
${confirmPasswordField}     //*[@id="confirm-password"]
${registerButton}           //*[@id="register-button"]

*** Keywords ***
Register page opened
    Landing page opened
    User click sign up button
    User should be directed to sign up page

User click register with email button
    wait until element is visible   ${registerByEmailButton}
    click element                   ${registerByEmailButton}

Input full name
    [Arguments]                     ${fullName}
    wait until element is visible   ${fullNameField}
    input text                      ${fullNameField}    ${fullName}

Input email
    [Arguments]                     ${email}
    wait until element is visible   ${emailField}
    input text                      ${emailField}    ${email}

Input username
    [Arguments]                     ${username}
    wait until element is visible   ${usernameField}
    input text                      ${usernameField}    ${username}

Input password
    [Arguments]                     ${password}
    wait until element is visible   ${passwordField}
    input text                      ${passwordField}    ${password}

Confirm password
    [Arguments]                     ${confirmPassword}
    wait until element is visible   ${confirmPasswordField}
    input text                      ${confirmPasswordField}    ${confirmPassword}

Click register button
    wait until element is visible   ${registerButton}
    click element                   ${registerButton}